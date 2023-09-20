import { useState } from "react";
import data from "./data/db";
import BirthdayList from "./components/BirthdayList";
import Title from "./components/Title";

function App() {
  const [birthdays, setBirthdays] = useState(data);

  const handleDelete = (id) => {
    setBirthdays((prev) => {
      return prev.filter((birthday) => {
        return birthday.id !== id;
      });
    });
  };

  return (
    <div className="container">
      <Title birthdaysLeng={birthdays.length} />
      <BirthdayList birthdays={birthdays} handleDelete={handleDelete} />
      {birthdays.length !== 0 && (
        <button onClick={() => setBirthdays([])} className="clear-all">
          Clear All
        </button>
      )}
      {birthdays.length === 0 && (
        <button onClick={() => setBirthdays(data)} className="clear-all">
          Refresh
        </button>
      )}
    </div>
  );
}

export default App;
