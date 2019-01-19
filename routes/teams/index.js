const express = require('express')
const router = express.Router({ mergeParams: true })
const request = require('request')
const config = require('config')
const btoa = require('btoa')

const key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
const headers = { "Authorization": "Basic " + key }
const url = config.mySportsFeeds.url + config.mySportsFeeds.currentSeason

//overall standings
router.route('/overall-team-standings')
    .get(function (req, res) {
        request.get({ url: url + "/overall_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

//conference standings
router.route('/conference-team-standings')
    .get(function (req, res) {
        request.get({ url: + "/conference_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

//division standings
router.route('/division-team-standings')
    .get(function (req, res) {
        request.get({ url: url + "/division_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

//playoff standings
router.route('/playoff-team-standings')
    .get(function (req, res) {
        request.get({ url: url + "/playoff_team_standings.json", headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

//team logs by team
router.route('/team-gamelogs/:teamId')
    .get(function (req, res) {
        let teamId = req.params.teamId;
        request.get({ url: url + "/team_gamelogs.json?team=" + teamId, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })

module.exports = router;
