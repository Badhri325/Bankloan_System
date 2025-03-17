import React from "react";

export default function ServiceCard({ services, onButtonClick }) {
  console.log("service in card", services);
  console.log("image", services.imgSrc);
  const { imgSrc, title, description, buttonText } = services;

  return (
    <section className="service-item card" key={services.id}>
      <div className="service-img">
        <img src={require(`../assets/${imgSrc}`)} alt={`${title}_logo`} />
      </div>
      <div className="service-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
