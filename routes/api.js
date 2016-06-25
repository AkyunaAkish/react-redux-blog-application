'use strict';
const express = require('express');
const router = express.Router();
// const knex = require("../db/knex.js");

router.get('/', (req,res,next) => {
  res.status(200).json({message: 'Initial test route'});
})

module.exports = router;
