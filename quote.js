module.exports = function(slapp) {

  slapp.message('^$', ['direct_message'], (msg) => {
    var user_name = require('./get_user')(msg)
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
