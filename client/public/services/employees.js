const endpoint = "http://localhost:5000";

const getEmployees = () => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(console.log());
};

export default getEmployees;
