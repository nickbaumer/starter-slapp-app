module.exports = function(slapp) {
  var request = require('request')
  var url = 'https://www.foaas.com/thanks/nick'

  var headers = {
      'Accept':     'application/json'
  }

  var options = {
    url: url,
    method: 'GET',
  }

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          // Print out the response body
          var result = JSON.parse(body)
          var myMessage = result.message
          var subtitle = result.subtitle
          console.log('message:' + myMessage)
          console.log('subtitle:' + subtitle)

      }
  }

  var regex = '.*'
  var location = 'ambient'

  request(options, callback)

// attempt to re-build
}
