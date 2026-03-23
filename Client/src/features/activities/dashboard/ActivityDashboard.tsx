import React from "react";
import ActivityList from "./ActivityList";
import ActivityForm from "../forms/ActivityForm";
import ActivityDetails from "../Details/ActivityDetails";
import { Grid, List } from "@mui/material";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  selectedActivity?: Activity | null;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  submitForm: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
};

const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  submitForm,
  deleteActivity,
}: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 7 }}>
        <List>
          <ActivityList
            activities={activities}
            onSelectActivity={selectActivity}
            deleteActivity={deleteActivity}
          />
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity}
            submitForm={submitForm}

          />

          
        )}
      </Grid>
    </Grid>
  );
};

export default ActivityDashboard;
