module.exports = function(slapp) {

  slapp.message('', ['direct_message'], (msg) => {
//    var type = msg.body.event.attachments.text
    console.log('Attempting to log attachments')
    //var attachments = JSON.parse(msg.body.event.attachments)
    console.log(msg.body.event.attachments[0].author_name)
    })

}
