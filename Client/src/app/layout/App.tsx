import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );
  const [editmode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  const handleSelectActivity = (id: string) => {
    const activity = activities.find((a) => a.id === id);
    setSelectedActivity(activity || null);
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities([
        ...activities.filter((a) => a.id !== activity.id),
        activity,
      ]);
      setSelectedActivity(activity);
    } else {
      // activity.id = crypto.randomUUID();
      const newActivity = { ...activity, id: crypto.randomUUID() };
      setActivities([...activities, newActivity]);
      setSelectedActivity(newActivity);
    }
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container maxWidth="xl" sx={{ marginTop: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editmode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Box>
  );
}

export default App;
