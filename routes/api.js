const express = require('express');
const router = express.Router({ mergeParams: true });

// GET home page
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

// teams
const teamsRouter = require('./teams');
router.use('/teams', teamsRouter);

// games
const gamesRouter = require('./games');
router.use('/games', gamesRouter);


module.exports = router;