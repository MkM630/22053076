import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../Api";
import "../styles/Feed.css";

const Feed = () => {
  const { data: posts = [] } = useQuery(["feed"], fetchPosts, {
    refetchInterval: 5000,
  });

  return (
    <div className="container">
      <h2>Live Feed</h2>
      <div className="feed">
        {posts.slice().reverse().map(post => (
          <div key={post.id} className="feed-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
