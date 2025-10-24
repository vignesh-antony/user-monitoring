import { useQuery } from "@tanstack/react-query";
import { type FC } from "react";
import { fetchUsers } from "../services";

type User = { id: string; first_name: string };

const Users: FC = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<{ data: User[] }>({
    queryKey: ["fetch-users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Failed to load users.</div>;

  return (
    <div className="flex flex-col gap-8">
      <h2>User List</h2>
      <table className="w-full border-collapse bg-gray-800 text-left shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">ID</th>
            <th className="px-4 py-3 text-left font-semibold">Name</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {users?.data?.map(({ id, first_name }) => (
            <tr
              key={id}
              className="hover:bg-gray-700/60 transition-colors duration-200"
            >
              <td className="px-4 py-3 text-gray-100">{id}</td>
              <td className="px-4 py-3 text-gray-100">{first_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
