import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <div>
      <h1 typography="h1">Hello</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
