import Mailgun from 'mailgun-js';
import schedule from 'node-schedule';
import Q from 'q';
// import moment from 'moment';

import { User } from '../db/models';

const mailgunApi = process.env.MAILGUN_API_KEY;
const mailgunDomain = process.env.MAILGUN_DOMAIN;
// use nunjucks to render html templates w/ variables

export const mailUsers = mailDay => {
  console.log('users fired');
  // setup promises
  const deffered = Q.defer();
  // find users with preferences notificaitons that match today
  User.findAll()
    .then((err, user) => {
      const users = [];
      // handle error
      if (err) {
        deffered.reject(console.log(`failed: ${err}`));
      } else {
        // add all qualifying users to the users array
        for (let i = user.length - 1; i >= 0; i -= 1) {
          users.push(user[i]);
        }
        deffered.resolve(users);
      }
    })
    .catch(err => {
      deffered.reject(console.log(`failed: ${err}`));
    });
  return deffered.promise;
};

// function to generate custom email
// for given users and return a mailing array
export const mailCreator = users => {
  const mailing = [];
  for (let i = users.length - 1; i >= 0; i -= 1) {
    // get an email template and pass in some variables
    const email = `<!DOCTYPE html>
          <html>
          <head>
              <title>Mail Gun Test</title>
          </head>
          <body>
              <div>
                  <h3>Dear Reciver,</h3>
                  <p>Thank You </p>
              </div>            
          </body>
          </html>`;
    // add qualified users and their customized
    // email to the mailing
    mailing.push({
      user: users[i].email,
      email,
    });
  }
  return mailing;
};

// function to send user email given template and subject
export const mailSender = (userEmail, subject, html) => {
  // setup promises
  const deffered = Q.defer();
  // create new mailgun instance with credentials
  const mailgun = new Mailgun({
    apiKey: mailgunApi,
    domain: mailgunDomain,
  });
  // setup the basic mail data
  const mailData = {
    from: 'deben.reset@gmail.com',
    to: userEmail,
    subject,
    html,
    // two other useful parameters
    // testmode lets you make API calls
    // without actually firing off any emails
    'o:testmode': true,
    // you can specify a delivery time
    // up to three days in advance for
    // your emails to send.
    'o:deliverytime': 'Thu, 13 Oct 2011 18:02:00 GMT',
  };
  // send your mailgun instance the mailData
  mailgun.messages().send(mailData, (err, body) => {
    // If err console.log so we can debug
    if (err) {
      deffered.reject(console.log(`failed: ${err}`));
    } else {
      deffered.resolve(body);
    }
  });
  return deffered.promise;
};

export const mailScheduler = job => {
  // set rules for scheduler
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [new schedule.Range(0, 6)];
  rule.hour = 16;
  rule.minute = 38;
  // scheduleJob take a rule and a function
  // you will need to pass a function object
  // into the mailScheduler function
  schedule.scheduleJob(rule, job);
};
