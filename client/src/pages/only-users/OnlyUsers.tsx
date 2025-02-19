import { useGetAllUsersQuery } from "../../features/api/userApi";

export const OnlyUsers = () => {
  const { data, isLoading, isError, error } = useGetAllUsersQuery();

  console.log("isError", isError);
  console.log("error", error);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>TOP SECRET ONLY FOR USERS</h1>
      <ul>{data?.map((user) => <li key={user._id}>{user.username}</li>)}</ul>
    </div>
  );
};
