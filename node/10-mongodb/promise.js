const delay = () => {
  return new Promise((res) => {
    setTimeout(() => res(), 1000);
  });
};

// method 1 of using promise
function run() {
  delay()
    .then(() => {
      console.log('1 second passed');
    })
    .catch((err) => {
      console.log('there was error');
    });
}

// method 2 of using promise
async function run() {
  try {
    //then wala code
    await delay();
    console.log('1 second passed');
  } catch (error) {
    //catch wala code
    console.log('there was error');
  }
}

run();
