const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => {
      return fetch(url).then((res) => res.json());
    })
  );
  console.log("users,posts,albums", users, posts, albums);
};
await getData();
// Promise.all(urls.map(url=>{
// 	return fetch(url).then(res=>res.json())
// })).then(allvalue=>{
// 	console.log(crypto.randomUUID(),allvalue[0]);
// 	console.log(crypto.randomUUID(),allvalue[1]);
// 	console.log(crypto.randomUUID(),allvalue[2]);
// })

//es feature

const getData2 = async () => {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData2();
