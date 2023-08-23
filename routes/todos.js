const auth = require('../middleware/auth');
const {Todo, validate}= require('../models/todo');
const mongoose= require('mongoose');
const express= require('express');
const router = express.Router();

 

router.get('/', auth, async (req,res) => {
    const todos = await Todo.find().sort('title');
    res.send(todos);
});


router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let todo = new Todo({ title: req.body.title, description: req.body.description });
    todo = await todo.save();

    res.send(todo);
});



router.put('/:id', auth, async (req, res) => {
  
    const { error } = validate(req.body);
    if (error) return  res.status(400).send(error.details[0].message);

  
  const todo = await Todo.findByIdAndUpdate(req.params.id, {title: req.body.title, description: req.body.description }, 
    {new: true
    });

    if (!todo) return res.status(404).send('The given ID was not found');
      

     //Update genre
     //Return the updated genre
    res.send(todo);
});

// [auth, admin],
router.delete('/:id', auth, async(req, res) => { 
   
  const todo= await  Todo.findByIdAndRemove(req.params.id);

  if (!todo) return res.status(404).send('The todo was not found');

    
    //Return the same course
    res.send(todo)
});

router.get('/:id', auth, async(req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send('The todo does not exits');
  res.send(todo);
})



module.exports = router;



