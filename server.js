'use strict'

const express = require('express')
const Slapp = require('slapp')
const ConvoStore = require('slapp-convo-beepboop')
const Context = require('slapp-context-beepboop')

// use `PORT` env var on Beep Boop - default to 3000 locally
var port = process.env.PORT || 3000

var slapp = Slapp({
  // Beep Boop sets the SLACK_VERIFY_TOKEN env var
  verify_token: process.env.SLACK_VERIFY_TOKEN,
  convo_store: ConvoStore(),
  context: Context(),
})

require('./tutorial')(slapp);

// LAN message
slapp.
  message('(\\b(lan)\\b)|(\\b(Ian)\\b)', 'ambient', (msg) => {
    var today = new Date();
    var lan = new Date('April 13, 2017 18:00');
    var difference = (lan - today.getTime()) / 1000;
    msg
      .say([
      'LAN starts at 18:00 on Thursday the 13th of April 2017.',
      'la la la la I\'m not listening',
      '6pm. Thursday. 13/04.',
      'Ask @vyper',
      difference + ' seconds to go.',
      Math.round(difference / 60) + ' minutes to go.',
      Math.round(difference / 60 / 60) + ' hours to go.',
      Math.round(difference / 86400) + ' days to go.'
    ]).route('thanks')
  }).route('thanks', (msg) => {
    var text = (msg.body.event && msg.body.event.text) || ''
    if (text.match(/(thanks|cheers|ta|thx|thank you)/i)) {
      return msg
        .say([
          'Douchebag.',
          'Dickhole.',
          'Tool.',
          'Ass bandit.'
        ])
  }
})


// attach Slapp to express server
var server = slapp.attachToExpress(express())

// start http server
server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${port}`)
})
