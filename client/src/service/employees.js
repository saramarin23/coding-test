const endpoint = "http://localhost:5000/data/employees";

const fetchEmployees = () => {
  return fetch(endpoint).then(response => response.json());
};

export default fetchEmployees;
