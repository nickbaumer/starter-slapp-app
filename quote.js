module.exports = function(slapp) {

  slapp.message('ping', ['direct_message'], (msg, text) => {
    msg.say(text)
  })

  slapp.message('pong', ['direct_message'], (msg) => {
    msg.say('ping')
  })

  slapp.message('add quote', ['direct_message'], (msg, attachments) => {
    msg.say(attachments.author_name)
    msg.say(attachments.text)
    })

}
