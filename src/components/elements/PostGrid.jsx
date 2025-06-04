import PostCard from "./PostCard";
import { usePostsData } from "../../context/PostsDataContenxt";

export default function PostGrid() {
  const { posts } = usePostsData();

  return (
    <div className="container">
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                image={post.image}
                tags={post.tag}
              />
            );
          })
        ) : (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status" />
            <p className="mt-2">Caricamento...</p>
          </div>
        )}
      </div>
    </div>
  );
}
