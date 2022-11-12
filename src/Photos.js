import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="Row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="Column" key={index}>
                <img
                  src={photo.src.small}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
