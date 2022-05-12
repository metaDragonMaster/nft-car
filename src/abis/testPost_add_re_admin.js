let request = require('request');
let url = "https://api.defender.openzeppelin.com/autotasks/af588e0e-8a73-4b9d-b52c-f2da62fabcf6/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/HERMZRAgNM8esr8TJ6LCt9";
let requestData = {"_address":"0x4306556FC02579f3c9B34703DfCa8ef18e6BB87B","re_address":"0xc058FD311a22a369EF6fE178f7233c30B812f8A9"};

async function httpRequest(url, data) {
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body) // 请求成功的处理逻辑
        }
    });
}
httpRequest(url, requestData);
//https://api.defender.openzeppelin.com/autotasks/f6ed9198-256b-4ea0-9a78-256b3108430c/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/T9AEyJpfx6om6iqDm6iayx
