const container = document.getElementById("container");
const list = document.getElementById("list");
const form = document.getElementById("post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  postsFetch.post("/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  });
});

const getData = async () => {
  try {
    const response = await postsFetch.get(
      "/users",
      // Definindo headers
      {
        headers: {
          "Content-type": "application/json",
          custom: "header",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const printData = async () => {
  const data = await getData();
  console.log(data);

  data.forEach((user) => {});
};

printData();
