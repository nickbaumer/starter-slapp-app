module.exports = function(slapp) {

  slapp.message('', ['direct_message'], (msg) => {
    console.log('Attempting to log attachments')
    var attachments = msg.body.event.attachments[0]
    console.log('text:' + attachments.text)
    console.log('author_name:' + attachments.author_name)
    console.log('ts:' + attachments.ts)
}
