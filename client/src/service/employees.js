const endpoint = "http://localhost:5000/";

const getEmployees = () => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data);
};

export default getEmployees;
