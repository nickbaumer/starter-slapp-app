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
    form: {'token': msg.meta.bot_token, 'user': msg.body.event.user}
}

// Start the request

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        var result = JSON.parse(body);
        var user_name = result.user.name;
        module.exports.name = user_name;
        console.log('inside callback:'+user_name)
    }
};
console.log('outside callback:'+user_name)

request(options, callback);
return user_name;

};
