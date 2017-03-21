module.exports = function(slapp) {
  var request = require('request')
  var url = 'https://www.foaas.com/thanks/nick'

  var headers = {
      'User-Agent':       'Super Agent/0.0.1',
      'Content-Type':     'application/x-www-form-urlencoded'
  }

  var options = {
    url: url,
    method: 'POST',
    form: {'Accept':'application/json'}
  }

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          // Print out the response body
          var result = JSON.parse(body)
          var message = result.message
          var subtitle = result.subtitle
          console.log('message:' + message)
          console.log('subtitle:' + subtitle)
          return message
      }
  }

  var regex = '.*'
  var location = 'ambient'

  slapp.
    message(regex,location, (msg) => {
      msg.say(
        request(options, callback)
      )
    })
// attempt to re-build
}
