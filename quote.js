module.exports = function(slapp) {
  slapp.message('1 attachments', ['direct_message'], (msg, attachments) => {
    msg.say(attachments.text)
  })

  slapp.message('ping', ['direct_message'], (msg, text) => {
    msg.say(text)
  })

  slapp.message('pong', ['direct_message'], (msg) => {
    msg.say('ping')
  })
}
