module.exports = function(slapp) {

  slapp.message('^$', ['direct_message'], (msg, state) => {
    require('./test_request')(msg)
    console.log('Checking for attachments')
    var attachments = msg.body.event.attachments[0]
    if (attachments) {
      console.log('text:' + attachments.text)
      console.log('author_subname:' + attachments.author_subname)
      console.log('ts:' + attachments.ts)
      //if (!state || !state.date) {
        state.date = attachments.ts
        state.nick = msg.body.event.user
      //}
      state.quote = attachments.author_subname + ': ' + attachments.text + '/n'
      return msg
      .say('It looks like you\'re trying to add a quote')
      .say('Are there more lines?')
      .route('more-lines', state)
    }
  })
}
