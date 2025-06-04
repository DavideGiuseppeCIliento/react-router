import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostDataContext = createContext();

function PostDataProvider({ children }) {
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

  const PostsData = { posts, setPosts };

  return (
    <PostDataContext.Provider value={PostsData}>
      {children}
    </PostDataContext.Provider>
  );
}

function usePostsData() {
  return useContext(PostDataContext);
}

export { PostDataProvider, usePostsData };
