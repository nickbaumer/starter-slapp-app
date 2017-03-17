module.exports = function(slapp) {
  slapp.
    message('(\\b(lan)\\b)|(\\b(Ian)\\b)', 'ambient', (msg) => {
      var today = new Date();
      var lan = new Date('April 13, 2017 18:00');
      var difference = (lan - today.getTime()) / 1000;
      msg
        .say([
        'LAN starts at 18:00 on Thursday the 13th of April 2017.',
        'You love it really.',
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
            'Ass bandit.',
            'Wow. What a bellend.',
            'Get bent.',
            'Chong.',
            'Really?'
          ])
    }
  })
};
