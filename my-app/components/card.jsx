export default function Card(props) {
  return (
    <div class="col-sm-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src="/images/doctor.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.username}</p>
          <a href="#" className="btn btn-primary">
            {props.icon}
          </a>
        </div>
      </div>
    </div>
  );
}
