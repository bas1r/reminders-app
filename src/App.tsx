import React, { useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";


function App() {
  const [reminders, setreminders] = useState<Reminder[]>([{id: 1, title: 'A reminder'}])

  return (
    <div className="App">
      <ReminderList items={reminders}></ReminderList>
    </div>
  );
}


export default App;