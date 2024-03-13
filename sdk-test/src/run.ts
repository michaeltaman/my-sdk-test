import Typicode from "@mictrwork/sdk-demo";

const client: Typicode = new Typicode({
  apiKey: "sdfd",
});

// client.getPosts().then((p) => {
//   console.log(p);
// });

// client.getPostById(1).then((p) => {
//   console.log(p);
// });

client
  .createPost({
    title: "michaelt_test",
    body: "michaelt_test",
    userId: 1,
  })
  .then((p) => {
    console.log(`Created new post with id ${p.id}`);
  });
