const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

router.route('/overall-team-standings')
    .get(function (req, res) {
        request.get({ url: url + "/overall_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

router.route('/conference-team-standings')
    .get(function (req, res) {
        request.get({ url: + "/conference_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

router.route('/division-team-standings')
    .get(function (req, res) {
        request.get({ url: url + "/division_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

module.exports = router;


