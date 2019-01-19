const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

// active players
router.route('/active-players')
    .get(function (req, res) {
        request.get({ url: url + "/active_players.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// active players by team
router.route('/active-players/:teamId')
    .get(function (req, res) {
        let teamId = req.params.teamId;
        request.get({ url: url + "/active_players.json?team=" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// injured players
router.route('/players-injuries')
    .get(function (req, res) {
        request.get({ url: url + "/player_injuries.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// injured players by team
router.route('/players-injuries/:teamId')
    .get(function (req, res) {
        let teamId = req.params.teamId;
        request.get({ url: url + "/player_injuries.json?team=" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// players gamelog
router.route('/player-gamelogs')
    .get(function (req, res) {
        request.get({ url: url + "/player_gamelogs.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })


// roster player by date
router.route('/roster-players/:date')
    .get(function (req, res) {
        let date = req.params.date;
        request.get({ url: url + "/roster_players.json?fordate=" + date, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// roster player by date and by team
router.route('/roster-players/:date/:teamId')
    .get(function (req, res) {
        let date = req.params.date;
        let teamId = req.params.teamId;
        request.get({ url: url + "/roster_players.json?fordate=" + date + "&team=" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// daily player stats by date
router.route('/daily-player-stats/:date')
    .get(function (req, res) {
        let date = req.params.date;
        request.get({ url: url + "/daily_player_stats.json?fordate=" + date, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// daily player stats by date and team
router.route('/daily-player-stats/:date/:teamdId')
    .get(function (req, res) {
        let date = req.params.date;
        let teamId = req.params.teamId;
        request.get({ url: url + "/daily_player_stats.json?fordate=" + date + "&team" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// cumulative stats player by team
router.route('/cumulative-player-stats-team/:teamdId')
    .get(function (req, res) {
        let teamId = req.params.teamdId;
        request.get({ url: url + "/cumulative_player_stats.json?team=" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

// cumulative stats player by player
router.route('/cumulative-player-stats/:playerId')
    .get(function (req, res) {
        let playerId = req.params.playerId;
        request.get({ url: url + "/cumulative_player_stats.json?player=" + playerId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })





/* 



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
 */

module.exports = router;





