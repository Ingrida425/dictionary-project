import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div></div>
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.tiny} key={index} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
