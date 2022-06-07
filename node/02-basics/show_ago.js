// this utility will show you ago time in human readable format
// like 3 seconds ago, 4 hours ago

// if you have node 14+
// ecmascript (es) modules
// import moment from 'moment';

// commonjs (cjs) modules
const moment = require('moment');

console.log('show ago util');

// ISO format
// YYYY-MM-DD HH:mm:ss

const userDate = process.argv[2];

if (!userDate) {
  throw new Error('Please provide a valid date as first argument');
}

const sometime = new Date(userDate);

let output = moment(sometime).fromNow();

console.log('output: ', output);

//TODO: convert this script to use date-fns
//TODO: write a simple script which tells if user is eligible for voting based on their date of birth
//TODO: check for valid date
// 18+ age is allowed to vote
