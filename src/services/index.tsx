export const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
  return await res.json();
};
