module.exports = function(slapp) {
  slapp.message('attach', ['direct_message'], (msg) => {
    msg.say('pong')
  })
}
