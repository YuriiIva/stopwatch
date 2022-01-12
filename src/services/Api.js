import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// const BASE_URL = "https://61c4aa46f1af4a0017d9972f.mockapi.io";
// const BASE_URL = "https://connections-api.herokuapp.com/";

// const fetchData = async (path, options = {}) => {
//   const res = await fetch(`${BASE_URL}/${path}`, options);
//   return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
// };

const getData = (endpoint) => {
  return axios.get(endpoint);
};

const saveItem = (endpoint, item) => {
  return axios.post(endpoint, item);
};

const deleteItem = (endpoint, id) => {
  return axios.delete(`${endpoint}/${id}`);
};

export { getData, saveItem, deleteItem };

///для Api запроса на mockApi///
// const getData = (endpoint) => fetchData(endpoint);

// const saveItem = (endpoint, item, options = {}) => {
//   const finalOptions = {
//     method: "POST",
//     // body: item,
//     body: JSON.stringify(item),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     ...options,
//   };
//   return fetchData(endpoint, finalOptions);
// };

// const editItem = (endpoint, item, options = {}) => {
//   const finalOptions = {
//     method: "PUT",
//     body: JSON.stringify(item),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     ...options,
//   };
//   return fetchData(`${endpoint}/${item.id}`, finalOptions);
// };

// const deleteItem = (endpoint, id, options = {}) =>
//   fetchData(`${endpoint}/${id}`, { method: "DELETE", ...options });

// export { getData, saveItem, editItem, deleteItem };
