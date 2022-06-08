function myFunction() {
  return Promise.resolve('This is the value');
}

myFunction().then((res) => {
  console.log('function resolved with value: ', res);
});

async function run() {
  const res = await myFunction();
  console.log('function resolved with value: ', res);
}

run();
