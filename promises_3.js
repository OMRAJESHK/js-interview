const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = await promisify("a", 100);
const b = await promisify("b", 5000);
const c = await promisify("c", 3000);

async function parallel() {
  const promises = [a, b, c];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}
async function race() {
  const promises = [a, b, c];
  const [output1, output2, output3] = await Promise.race(promises);
  return `Race is done: ${output1} ${output2} ${output3}`;
}

async function sequence() {
  const promises = [a, b, c];
  const [output1, output2, output3] = await Promise.race(promises);
  return `sequence is done: ${output1} ${output2} ${output3}`;
}

await race();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve("worked", 3000));
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject("rejected", 3000));
});

Promise.allSettled([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
