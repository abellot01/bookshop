// This example uses waterfall.
// npm install async-waterfall

'use strict';

var util = require('util');
var waterfall = require('async-waterfall');
var hana = require('@sap/hana-client');


// // HANA Cloud Cloud Example
// // DigiCert Global Root CA: https://cacerts.digicert.com/DigiCertGlobalRootCA.crt.pem
//
var connOptions = {
     serverNode: 'bb4e2ab3-00a0-4b75-a8a6-1b2e904b1e08.hana.demo-hc-3-haas-hc-dev.dev-aws.hanacloud.ondemand.com:443',
     uid: 'DBADMIN',
     pwd: 'Manager1',
     encrypt: 'true',
     ssltruststore: '-----BEGIN CERTIFICATE-----MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBhMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBDQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5jb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsBCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7PT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAOBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbRTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUwDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/EsrhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJFPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0lsYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQkCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=-----END CERTIFICATE-----'
 };

var connection = hana.createConnection();

var tasks = [myconn,
    mysql1, myexecute, myresults,
    mydisco];

waterfall(tasks, done);
console.log("Async calls underway\n");

function myconn(cb) {
    connection.connect(connOptions);
    cb(null);
}


function mysql1(cb) {
    var fields = ['ITEM', 'VALUE'];
    var sql = util.format(
        'SELECT * FROM 561A24BCCDC84E7D86DFF608AECC1AF5.CV_SESSION_INFO');
    console.log("SQL statement: " + sql);
    cb(null, sql);
}

function myexecute(sql, cb) {
    var rows = connection.exec(sql);
    cb(null, rows);
}

function myresults(rows, cb) {
    console.log(util.inspect(rows, { colors: true }));
    console.log("");
    cb(null);
}

function mydisco(cb) {
    connection.disconnect(cb);
}

function done(err) {
    console.log("Async done");
    if (err) {
        return console.error(err);
    }
}
