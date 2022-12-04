import Link from "next/link";

export default function Card(props) {
  return (
    <div className="col-sm-3 ">
      <div
        className="card text-center card border-success mb-3"
        style={{ width: "18rem" }}
      >
        <img src="/images/doctor.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <Link href={`/dentist/${props.id}`}>
            <h5 className="card-title">{props.name}</h5>
          </Link>
          <p className="card-text">{props.username}</p>
          <Link href="#" className="btn btn-secondary">
            {props.icon}
          </Link>
        </div>
      </div>
    </div>
  );
}
