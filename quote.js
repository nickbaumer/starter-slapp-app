module.exports = function(slapp) {

  slapp.message('', ['direct_message'], (msg) => {
//    var type = msg.body.event.attachments.text
    console.log('Attempting to log body')
    console.log(body)
    })

}
