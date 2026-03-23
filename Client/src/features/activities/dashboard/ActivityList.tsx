import React from "react";
import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  onSelectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;

};

const ActivityList = ({ activities, onSelectActivity, deleteActivity }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} 
        onSelectActivity={onSelectActivity}
        deleteActivity={deleteActivity}
        
        
        />
      ))}
    </Box>
  );
};

export default ActivityList;
