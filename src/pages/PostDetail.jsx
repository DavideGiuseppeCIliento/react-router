import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const apiRequest = () => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        const data = res.data.post;
        setPost(data);
        console.log(res.data.post);
      })
      .catch((err) => {
        console.error("Errore nella richiesta:", err);
        navigate("/notFound");
      });
  };

  useEffect(() => {
    apiRequest();
  }, [id]);

  if (!post) return <p>Caricamento...</p>;

  return (
    <div className=" mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={`http://localhost:3000${post.image}`}
            className="img-fluid rounded-start"
            alt="ciambellone"
          />
        </div>
        <div className="col-md-7 ">
          <div className="card-body ms-4 me-4">
            <h2 className="card-title mb-3">{post.title}</h2>
            <p className="card-text">{post.content}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {post.tags.join(", ")}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <button
          className="btn btn-outline-danger btn-sm me-2"
          onClick={() => navigate(`/posts/${parseInt(id) - 1}`)}
        >
          Precedente
        </button>
        <button
          className="btn btn-outline-success btn-sm me-2"
          onClick={() => navigate(`/posts/${parseInt(id) + 1}`)}
        >
          Successivo
        </button>
      </div>
    </div>
  );
}
