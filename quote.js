module.exports = function(slapp) {
  slapp.message('1 attachments', ['direct_message'], (msg) => {
    msg.say(msg.body)
  })

  slapp.message('ping', ['direct_message'], (msg) => {
    msg.say(msg.body)
  })

  slapp.message('pong', ['direct_message'], (msg) => {
    msg.say('ping')
  })
}
