import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostGrid() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const apiRequest = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        const data = res.data.posts;
        setPosts(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Errore nella richiesta:", err);
        navigate("/notFound");
      });
  };

  useEffect(() => {
    apiRequest();
  }, []);

  return (
    <div className="conteiner">
      <div className="row">
        {posts.map((post) => {
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
        })}
      </div>
    </div>
  );
}
