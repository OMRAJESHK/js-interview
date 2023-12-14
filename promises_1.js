const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 0, "Hi Rajesh");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, "How are you?");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Hope you are doing good?");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "I guess");
});

Promise.all([promise1, promise2, promise3, promise4]).then((value) => {
  console.log("value", value);
});

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
).then((allvalue) => {
  console.log(crypto.randomUUID(), allvalue[0]);
  console.log(crypto.randomUUID(), allvalue[1]);
  console.log(crypto.randomUUID(), allvalue[2]);
});
