import express from 'express';
import { listToDos, addToDo, deletToDo, editToDo } from './controller';
import { mailScheduler, mailUsers, mailCreator, mailSender } from './mailgun';

const router = express.Router();

router.get('/', listToDos, (req, res) => {
  res.status(200).json({ todos: req.todos });
});

router.post('/', addToDo, (req, res) => {
  res.status(201).json({ success: true, detail: 'Created Successfully' });
});
router.delete('/:id', deletToDo, (req, res) => {
  res.status(204).send();
});
router.patch('/:id', editToDo, (req, res) => {
  res.status(204).send();
});

const mailDay = new Date();
// call the scheduler, which takes a function
// and pass in our mailing sequence

mailScheduler(() => {
  // find users with preferences set for now
  mailUsers(mailDay).then(users => {
    // create a mailing
    const mailing = mailCreator(users);
    // for each mailing item, send an email
    for (let i = mailing.length - 1; i >= 0; i -= 1) {
      // email each user with their custom template
      mailSender(mailing[i].user, 'Awesome Headline', mailing[i].email)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(`error: ${err}`);
        });
    }
  });
});

export default router;
