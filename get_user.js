module.exports = function(msg, callback) {

var request = require('request')
var user_name = ''
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
    form: {'token': msg.meta.bot_token, 'user': msg.body.event.user}
}

// Start the request

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        var result = JSON.parse(body);
        user_name = result.user.name;
        return user_name;
    }
};

user_name = request(options, callback);

};
