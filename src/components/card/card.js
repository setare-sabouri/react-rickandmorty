import "./card.css";
const Card = ({ characters }) => {
  let cards;
  if (characters) {
    cards = characters.map((item) => {
      let { id, image, name, status, location } = item;

      return (
        <div
          key={id}
          className="card-container my-2 col-lg-4 col-md-6 col-sm-6 col-12 px-2"
        >
          <article className="card-content text-center">
            <img className="card-img" src={image} alt=""></img>
            <p>{name}</p>
            <p>last seen: {location.name}</p>
            <p className="badge">{status}</p>
          </article>
        </div>
      );
    });
  } else {
    cards = "No cards found !";
  }
  return <>{cards}</>;
};

export default Card;
