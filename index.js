function* watchSeries() {
  yield 'Episode 1';
  yield 'Episode 2';
  yield 'Episode 3';
}

const mySeries = watchSeries();

console.log('Watching series');

console.log(mySeries.next().value);
console.log(mySeries.next().value);
console.log(mySeries.next().value);

console.log('The series has ended');
console.log('');

function* race() {
  console.log('Runner 1 started...');
  yield new Promise(resolve => setTimeout(() => resolve('Baton passed'), 2000));

  console.log('Runner 2 started...');
  yield new Promise(resolve => setTimeout(() => resolve('Race finished'), 2000));
}

const rotation = race();

console.log('Baton race');

rotation.next().value.then(message => {
  console.log(message);
  rotation.next().value.then(console.log);
})
