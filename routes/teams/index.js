const express = require('express');
const router = express.Router({ mergeParams: true });
const request = require('request');
const config = require('config');
const btoa = require('btoa');

router.route('/')
    .get(function (req, res) {
        res.send("allo")
        let key = btoa(config.mySportsFeeds.key + ":" + config.mySportsFeeds.password)
        let url = 'https://api.mysportsfeeds.com/v1.2/pull/nhl/2018-2019-regular/overall_team_standings.json';
        let headers = {
            "Authorization": "Basic " + key
        }
        request.get({ url: url, headers: headers }, function (e, r, body) {
            res.send(body)
        });
    })
module.exports = router;