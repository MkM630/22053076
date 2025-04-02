const API_URL = "http://20.244.56.144/evaluation-service"; 

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};

export const fetchPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
};

export const fetchComments = async () => {
  const res = await fetch(`${API_URL}/comments`);
  return res.json();
};
