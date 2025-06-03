export default function PostCard({ id, title, content, image, tags }) {
  console.log(image);
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {image && (
          <img
            src={`http://localhost:3000${image}`}
            className="card-img-top"
            alt={title}
          />
        )}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h6 className="text-muted">ID: {id}</h6>
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-truncate">{content}</p>
            {tags && (
              <div className="mb-3">
                {Array.isArray(tags) ? (
                  tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-1">
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="badge bg-secondary">{tags}</span>
                )}
              </div>
            )}
          </div>

          <div className="mt-3 d-flex justify-content-start ">
            <button className="btn btn-outline-primary btn-sm me-2">
              Visualizza
            </button>
            <button className="btn btn-outline-warning btn-sm">Modifica</button>
          </div>
        </div>
      </div>
    </div>
  );
}
