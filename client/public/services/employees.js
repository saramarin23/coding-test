const endpoint = "http://localhost:5000/data/employees";

const getEmployees = () => {
  return fetch(endpoint).then(response => console.log(response));
  // .then(data => console.log(data));
  // .then(console.log(response.json()));
};

export default getEmployees;
