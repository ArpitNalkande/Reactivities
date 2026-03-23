import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Box,
} from "@mui/material";

type Props = {
  activity: Activity;
  onSelectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

const ActivityCard = ({ activity, onSelectActivity, deleteActivity }: Props) => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city}/{activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between", display: "flex", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box display="flex" gap={2}>
          <Button
          onClick={() => onSelectActivity(activity.id)}
          size="medium"
          variant="contained"
        >
          View
        </Button>

        <Button
          onClick={() => deleteActivity(activity.id)}
          size="medium"
          variant="contained"
          color="error"
        >
          Delete
        </Button>

        </Box>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
