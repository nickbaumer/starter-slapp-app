module.exports = function(slapp) {
  var request = require('request')
  var url = 'https://www.foaas.com/thanks/nick'

  var headers = {
      'Accept':     'application/json'
  }

  var options = {
    url: url,
    method: 'GET',
    headers: headers
  }

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          // Print out the response body
          var result = JSON.parse(body)
          var myMessage = result.message
          var subtitle = result.subtitle
          console.log('message:' + myMessage)
          console.log('subtitle:' + subtitle)
          msg.say(
            'message:' + myMessage
          )
      }
  }


  var regex = '.*'
  var location = 'ambient'
  slapp.message(regex,location, (msg) => {
    var channel = msg.body.event.channel
    console.log('channel:' + channel)
  //  if (channel == 'C2FJ690FJ') {
    //  console.log('inside if!')
      //request(options, callback(msg))
  //  }
  })


// attempt to re-build
}
