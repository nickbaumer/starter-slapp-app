module.exports = function(slapp) {

  slapp.message('^$', ['direct_message'], (msg, state) => {
    var user_name = require('./get_user')(msg)
    //console.log('User identified as:' + user_name)
    //console.log('Checking for attachments')
    var attachments = msg.body.event.attachments[0]
    if (attachments) {
      //console.log('text:' + attachments.text)
      //console.log('author_subname:' + attachments.author_subname)
      //console.log('ts:' + attachments.ts)
      if (!state.date) {
        var firstQuote = 'It looks like you\'re trying to add a quote/n'
        state.date = attachments.ts
        state.nick = user_name
      }
      state.quote = attachments.author_subname + ': ' + attachments.text + '/n'
      console.log('state.quote:' + state.quote)
      return msg
      .say(firstQuote + 'Are there more lines?')
      .route('more-lines', state)
    }
  })
  .route('more-lines', (msg, state) => {
    var text = (msg.body.event && msg.body.event.text) || ''
    if (!text) {
      return msg
      .say('I didn\'t catch that.')
      .say('Are there more lines?')
      .route('more-lines', state)
    } else if (text == 'yes') {
      return msg
      .say('Please share the next line.')
      .route('more-lines', state)
    } else if (text == 'no') {
      return msg
      .say('Here is your quote')
      .say(state.quote)
    }
  })
}
