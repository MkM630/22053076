import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchComments } from "../Api";
import "../styles/TrendingPosts.css";

const TrendingPosts = () => {
  const { data: posts = [] } = useQuery(["posts"], fetchPosts);
  const { data: comments = [] } = useQuery(["comments"], fetchComments);

  const postCommentCounts = posts.map(post => ({
    ...post,
    commentCount: comments.filter(comment => comment.postId === post.id).length,
  }));

  const maxCommentCount = Math.max(...postCommentCounts.map(p => p.commentCount), 0);
  const trendingPosts = postCommentCounts.filter(p => p.commentCount === maxCommentCount);

  return (
    <div className="container">
      <h2>Trending Posts</h2>
      <div className="trending-posts">
        {trendingPosts.map(post => (
          <div key={post.id} className="trending-post">
            <h3>{post.title}</h3>
            <p>{post.commentCount} comments</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
