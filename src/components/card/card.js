import "./card.css";
const Card = ({ characters }) => {
  let cards;
  if (characters) {
    cards = characters.map((item) => {
      let { id, image, name, status, location } = item;

      return (
        <div
          key={id}
          className=" card-container col-lg-4 col-md-6 col-sm-6 col-12 p-2"
        >
          <img className="card-img" src={image} alt=""></img>
          <p>{name}</p>
          <p>last seen: {location.name}</p>
          <p>{status}</p>
        </div>
      );
    });
  } else {
    cards = "No cards found !";
  }
  return <>{cards}</>;
};

export default Card;
