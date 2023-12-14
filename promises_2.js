const promise1 = new Promise((resolve, reject) => {
  resolve("Hi...!");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("Rajesh!");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("Good Morning");
});

promise1
  .then((res) => {
    console.log("res1", res);
    return res;
  })
  .then((res) => {
    console.log("res2", `${res} Rajesh`);
    return `${res} Rajesh`;
  })
  .then((res) => {
    console.log("res3", `${res} Good Morning`);
    return `${res} Good Morning`;
  })
  .catch((err) => {
    console.log("err", err);
  });

const getResponse = async () => {
  const res1 = await promise1;
  const res2 = await `${res1} Rajesh Good Morning...!`;
  return res2;
};
console.log("asyncawait", await getResponse());
