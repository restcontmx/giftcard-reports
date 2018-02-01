//api/giftcards/

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var urlLib = require('url');
var request = require('request');
var http_helper = require('../helpers/http_helper_ne');
var encryption_system = require('../helpers/encryption_helper');
var router = express.Router();
var jsonParser = bodyParser.json();


//https://giftcard-api-gunt2raro.c9users.io/api/giftcards/balance/?barcode=51000&business=%202
router.get('/balance', jsonParser, function (req, res) {
    var userdata = JSON.parse(req.cookies['userdata']);
    var url_parts = urlLib.parse(req.url, true);
    console.log('balance request')
    request(
        {
            url: http_helper.get_api_uri('reports/balance/', `?barcode=${url_parts.query.barcode}&business=${url_parts.query.business}`),
            method: 'GET',
            json: true,
            headers: {
                'Authorization': http_helper.get_basic_auth_w_token(encryption_system.decryptCookie(userdata.auth_data))
            }
        },
        (error, response, body) => { res.send(http_helper.data_format_ok(error, response, body)) }
    );
});

router.get('/transbydaterange', jsonParser, function (req, res) {
    var userdata = JSON.parse(req.cookies['userdata']);
    var url_parts = urlLib.parse(req.url, true);
    console.log('transbydaterange request')
    request(
        {
            url: http_helper.get_api_uri('reports/giftcardstransbydaterange/', `?start_date=${url_parts.query.start_date}&end_date=${url_parts.query.end_date}&location=${url_parts.query.loc}&bussines=${url_parts.query.bussines}`),
            method: 'GET',
            json: true,
            headers: {
                'Authorization': http_helper.get_basic_auth_w_token(encryption_system.decryptCookie(userdata.auth_data))
            }
        },
        (error, response, body) => {
            res.send(http_helper.data_format_ok(error, response, body))
            //console.log(response) 
        }
    );

});


router.get('/giftcardstransbybarcode', jsonParser, function (req, res) {
    var userdata = JSON.parse(req.cookies['userdata']);
    var url_parts = urlLib.parse(req.url, true);
    console.log('transbydaterange request')
    request(
        {
            url: http_helper.get_api_uri('reports/giftcardstransbybarcode/', `?barcode=${url_parts.query.barcode}&business=${url_parts.query.business}`),
            method: 'GET',
            json: true,
            headers: {
                'Authorization': http_helper.get_basic_auth_w_token(encryption_system.decryptCookie(userdata.auth_data))
            }
        },
        (error, response, body) => {
            res.send(http_helper.data_format_ok(error, response, body))
            //console.log(response) 
        }
    );

});

module.exports = router;