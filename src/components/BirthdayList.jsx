import React from "react";

function BirthdayList({ birthdays, handleDelete, cleear }) {
  return (
    <>
      <ul className="birthdays">
        {birthdays.map((birthday) => {
          const { id, name, image, age } = birthday;
          return (
            <li className="birthdays-item" key={id}>
              <img
                className="birthdays-img"
                src={image}
                alt="Bertie Yates"
                width="75"
                height="75"
              />
              <div className="birthdays-item-info">
                <div className="info-wrapper">
                  <h3 className="info-title">{name}</h3>
                  <p className="info-age">{age} years</p>
                </div>
                <button onClick={() => handleDelete(id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BirthdayList;
