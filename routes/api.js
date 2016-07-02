'use strict';
const express = require('express');
const router = express.Router();
const knex = require("../db/knex.js");

router.get('/blogs', (req,res,next) => {
  knex('blogs')
  .then((blogs) => {
    res.status(200).json(blogs);
  })
  .catch((err) => {
    res.json(err);
  })
})

router.get('/blogs/:id', (req,res,next) => {
  knex('blogs')
  .where({id: req.params.id})
  .first()
  .then((blog) => {
    res.status(200).json(blog);
  })
  .catch((err) => {
    res.json(err);
  })
})

router.post('/blogs', (req,res,next) => {
  if(req.body.author && req.body.topic && req.body.content && req.body.image_url){
    knex('blogs')
    .insert(req.body)
    .returning('*')
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((err) => {
      res.json(err);
    })
  } else {
    res.json({message: 'Incomplete request'});
  }
})


router.put('/blogs/:id', (req,res,next) => {
  console.log('IN THE EDIT ROUTE!', req.body);
  if(req.body.author && req.body.topic && req.body.content && req.body.image_url){
    knex('blogs')
    .where({id: req.params.id})
    .update(req.body)
    .returning('*')
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((err) => {
      res.json(err);
    })
  }
})

router.delete('/blogs/:id', (req,res,next) => {
  knex('blogs')
  .where({id: req.params.id})
  .del()
  .then(() => {
    res.status(200).json({message: `Deleted blog with id of: ${req.params.id}`});
  })
  .catch((err) => {
    res.json(err);
  })
})

module.exports = router;
