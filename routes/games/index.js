const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

router.route('/full-game-schedule')
    .get(function (req, res) {
        request.get({ url: url + "/full_game_schedule.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

module.exports = router;


