const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

// current season info
router.route('/current-season/:date')
    .get(function (req, res) {
        let date = req.params.date
        request.get({ url: url + "/current_season.json?fordate=" + date, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })


// latest udpates
router.route('/latest-updates')
    .get(function (req, res) {
        request.get({ url: url + "/latest_updates.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })
Î
module.exports = router;





