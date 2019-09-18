const { App } = require('@slack/bolt')
const random = require('./randomQuote.js')
const app = new App({
  token: process.env.TOKEN,
  signingSecret: process.env.SECRET
})

app.message('me motive', async ({ message, say }) => {
  const {quote,author} = await random('./quotes.txt')

  say({blocks:[
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `${quote}`
    }
  },
  {
    type: 'context',
    elements: [{
      type: 'plain_text',
      text: author
    }]
  }]})
});

(async () => {
  await app.start(process.env.PORT)

  console.log('started')
})()
