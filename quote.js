module.exports = function(slapp) {

  slapp.message('ping', ['direct_message'], (msg, text) => {
    msg.say(text)
  })

  slapp.message('pong', ['direct_message'], (msg) => {
    msg.say('ping')
  })

  slapp.message('add quote', ['direct_message'], (msg) => {
    var attach = msg.body.event.attachments.author_name
    console.log(attach)
    })

}
