import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const createUser = async (newUser) => {
  const response = await axios.post("http://localhost:3000/users", newUser);
  return response.data;
};

export const updateUser = async (userId, updatingUser) => {
  const response = await axios.put(
    `http://localhost:3000/users/${userId}`,
    updatingUser
  );
  return response.data;
};
