import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;

};

const ActivityDetails = ({ activity, cancelSelectActivity, openForm }: Props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />

      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>

        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>

        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "space-between",
          display: "flex",
          pb: 2,
        }}
      >
        <Button color="primary" onClick={() => openForm(activity.id)}>
          Edit
        </Button>
        <Button onClick={cancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetails;
