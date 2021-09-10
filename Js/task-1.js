// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";

// console.log(user);
// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

for (const key in user) {
  console.log(`${key}:${user[key]}`);
}
