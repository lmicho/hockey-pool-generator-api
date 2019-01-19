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

// scoreboard
const scoreBoardRouter = require('./scoreboard');
router.use('/scoreboard', scoreBoardRouter);

// players
const playersRouter = require('./players');
router.use('/players', playersRouter);

// seasons
const seasonsRouter = require('./seasons');
router.use('/seasons', seasonsRouter);


module.exports = router;