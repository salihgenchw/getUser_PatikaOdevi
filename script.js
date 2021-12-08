import axios from "axios";

let getUser = async (id) => {
  await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((data) => console.log(data)
  );

  await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((data) => console.log(data)
  );
};

getUser(5);
