import Link from "next/link";
// import Image from "next/image";

export default function Card(props) {
  return (
    <div className="col-sm-3 ">
      <div
        className="card text-center card border-secondary mb-2"
        style={{ width: "16rem" }}
      >
        <img src="/images/doctor.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <Link href={`/dentist/${props.dentist.id}`}>
            <h5 className="card-title">{props.dentist.name}</h5>
          </Link>
          <p className="card-text">{props.dentist.username}</p>
          <button onClick={props.onClick} className="btn btn-secondary">
            {props.icon}
          </button>
        </div>
      </div>
    </div>
  );
}
