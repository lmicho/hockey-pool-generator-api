const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

// scoreboard by date
router.route('/:date')
    .get(function (req, res) {
        let date = req.params.date
        request.get({ url: url + "/scoreboard.json?fordate=" + date, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

module.exports = router;
