const EventEmitter = require('events');

const students = [
  {
    id: 1,
    name: 'john',
    marks: 524,
  },
  {
    id: 2,
    name: 'smith',
    marks: 256,
  },
  {
    id: 3,
    name: 'luke',
    marks: 124,
  },
];

class ResultNotifier extends EventEmitter {}

const notifier = new ResultNotifier();

// listen for fail event
notifier.on('fail', (std) => {
  // send push notification
  console.log(`found a failed student: ${std.name}`);
  // send email confirmation
  // store this result to database
});

for (let std of students) {
  console.log('student: ', std);
  if (std.marks < 200) {
    //create fail event with std
    notifier.emit('fail', std);
  } else {
    //create pass event with std
    notifier.emit('pass', std);
  }
}
