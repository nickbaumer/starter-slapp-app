module.exports = function(msg) {

var request = require('request')

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'https://slack.com/api/users.info',
    method: 'POST',
    headers: headers,
    form: {'token': msg.meta.bot_token, 'user': 'U2FJ2PR2Q'}
}

// Start the request
request(options, function (error, response, body) {
    //if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    //}
})
};
