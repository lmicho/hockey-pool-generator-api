const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

const teamsRouter = require('./teams');
router.use('/teams', teamsRouter);


module.exports = router;