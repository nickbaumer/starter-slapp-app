var request = require('request')

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://www.google.com',
    method: 'GET',
    headers: headers,
    //form: {'key1': 'xxx', 'key2': 'yyy'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})

module.exports = function(slapp) {

  slapp.message('^$', ['direct_message'], (msg) => {
    console.log('Checking for attachments')
    var attachments = msg.body.event.attachments[0]
    if (attachments) {
      console.log('text:' + attachments.text)
      console.log('author_subname:' + attachments.author_subname)
      console.log('ts:' + attachments.ts)
      if (!state.date) {
        state.date = attachments.ts
        state.nick = msg.body.event.user
      }
      state.quote = attachments.author_subname + ': ' + attachments.text + '/n'
      return msg
      .say('It looks like you\'re trying to add a quote')
      .say('Are there more lines?')
      .route('more-lines', state)
    }
  })
}
