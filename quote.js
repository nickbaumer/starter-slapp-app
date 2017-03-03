module.exports = function(slapp) {
  slapp.message('', ['direct_message'], (msg, attachments) => {
    msg.say(attachments.text)
  })

  slapp.message('ping', ['direct_message'], (msg, text) => {
    msg.say(text)
  })

  slapp.message('pong', ['direct_message'], (msg) => {
    msg.say('ping')
  })
}
