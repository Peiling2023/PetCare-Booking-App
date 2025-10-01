import './card.css';

const Card = ({ imageSrc, title, description, buttonText, onClick, details }) => {
  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {details && (
        <ul className="card-details">
          {details.map((detail, index) => (
            <li key={index}>
              <strong>{detail.label}:</strong> {detail.text}
            </li>
          ))}
        </ul>
      )}
      {buttonText && onClick && (
        <button className="learn-more-button" onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
