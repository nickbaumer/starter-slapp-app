var insults = {
  function(slapp) {
    var request = require('request')
    var url = 'https://www.foaas.com/thanks/nick'
    var options = {
      url: url,
      method: 'GET'
    }

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            var result = JSON.parse(body)
            var message = result.message
            var subtitle = result.subtitle
            console.log('message:' + message)
            console.log('subtitle:' + subtitle)
        }
    }

    var regex = '.*'
    var location = 'ambient'

    function(slapp) {
      slapp.
        message(regex,location, (msg) => {
          request(options, callback)
        }
    }
  }
}

module.exports = insults
