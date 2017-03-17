const getContent = function(url) {
  // return new pending promise
  return new Promise((resolve, reject) => {
    // select http or https module, depending on reqested url
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
         reject(new Error('Failed to load page, status code: ' + response.statusCode));
       }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
    })
};

module.exports = function(slapp) {

  slapp.message('^$', ['direct_message'], (msg) => {
    require('./get_user')(msg) // this needs to be a function, not a require?
    var user_name = exports.name
    console.log(user_name) // this doesn't work because it's not part of a callback
    //console.log('User identified as:' + user_name)
    //console.log('Checking for attachments')
    var attachments = msg.body.event.attachments[0]
    if (attachments) {
      var strQuote = attachments.author_subname + ': ' + attachments.text + '/n'
      return msg
      .say('It looks like you\'re trying to add a quote.')
      .say('Are there more lines?')
      .route('more-lines', {date: attachments.ts, nick: user_name, quote: strQuote})
    }
  })
  .route('more-lines', (msg, state) => {
    var text = (msg.body.event && msg.body.event.text) || ''
    if (!text) {
      var attachments = msg.body.event.attachments[0]
      if (!attachments) {
        return msg
        .say('I didn\'t catch that.')
        .say('Are there more lines?')
        .route('more-lines', state)
      } else {
        var strQuote = attachments.author_subname + ': ' + attachments.text + '/n'
        state.quote = state.quote + strQuote
        return msg
        .say('Are there more lines?')
        .route('more-lines', state)
      }
    } else if (text == 'yes') {
      return msg
      .say('Please share the next line.')
      .route('more-lines', state)
    } else if (text == 'no') {
      return msg
      .say('Here is your quote')
      .say(JSON.stringify(state))
    }
  })
}
