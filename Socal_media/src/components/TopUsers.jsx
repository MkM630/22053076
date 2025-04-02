import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchPosts } from "../Api";
import "../styles/TopUsers.css";

const TopUsers = () => {
  const { data: users = [] } = useQuery(["users"], fetchUsers);
  const { data: posts = [] } = useQuery(["posts"], fetchPosts);

  const topUsers = users
    .map(user => ({
      ...user,
      postCount: posts.reduce((count, post) => count + (post.userId === user.id ? 1 : 0), 0),
    }))
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

  return (
    <div className="container">
      <h2>Top Users</h2>
      <ul className="top-users">
        {topUsers.map(user => (
          <li key={user.id}>{user.name} - {user.postCount} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
