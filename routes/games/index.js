const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

// full games schedule
router.route('/full-game-schedule')
    .get(function (req, res) {
        request.get({ url: url + "/full_game_schedule.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// full game schedule by team
router.route('/full-game-schedule/:teamId')
    .get(function (req, res) {
        let teamId = req.params.teamId;
        request.get({ url: url + "/full_game_schedule.json?team=" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })


// daily games schedule by date
router.route('/daily-game-schedule/:date')
    .get(function (req, res) {
        let date = req.params.date
        request.get({ url: url + "/daily_game_schedule.json?fordate=" + date, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// game boxscore by game
router.route('/game-boxscore/:gameId')
    .get(function (req, res) {
        let gameId = req.params.gameId;
        request.get({ url: url + "/game_boxscore.json?gameid=" + gameId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// game play by play by game
router.route('/game-playbyplay/:gameId')
    .get(function (req, res) {
        let gameId = req.params.gameId;
        request.get({ url: url + "/game_playbyplay.json?gameid=" + gameId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// game starting line up by game
router.route('/game-startinglineup/:gameId')
    .get(function (req, res) {
        let gameId = req.params.gameId;
        request.get({ url: url + "/game_startinglineup.json?gameid=" + gameId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })


module.exports = router;





