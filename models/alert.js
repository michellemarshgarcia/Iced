// Twilio Credentials
const accountSid = 'ACd81bf947a5dd7bb7d5783ae98246872b';
const authToken = 'your_auth_token';

// require the Twilio module and create a REST client
const clientContact = require('twilio')(accountSid, authToken);

clientContact.messages.create(
  {
    to: contactPhone,
    from: '+13347815558',
    body: 'Hello this is an alert from immigration service ICED.' + name + 'has been detained by ICE.',
  },
  (err, message) => {
    console.log(message.sid);
  }
);