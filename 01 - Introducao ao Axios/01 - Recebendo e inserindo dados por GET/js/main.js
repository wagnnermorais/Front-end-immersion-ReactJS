const container = document.getElementById("container");
const list = document.getElementById("list");

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const printData = async () => {
  const data = await getData();
  console.log(data);

  data.forEach((user) => {
    const listItem = document.createElement("li");

    listItem.textContent = user.name;
    list.appendChild(listItem);
    list.appendChild(listItem);
  });
};

printData();
