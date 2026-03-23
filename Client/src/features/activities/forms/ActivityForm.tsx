import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  closeForm: () => void;
  activity?: Activity | null;
  submitForm: (activity: Activity) => void;
};

const ActivityForm = ({ closeForm, activity, submitForm }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const activityData = {
      key: activity?.id || crypto.randomUUID(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      date: formData.get("date") as string,
      city: formData.get("city") as string,
      venue: formData.get("venue") as string,
    };
    console.log(activityData);
    submitForm(activityData as Activity);
  };

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create Activity
      </Typography>
      <Box
        component="form"
        flexDirection="column"
        display="flex"
        gap={3}
        onSubmit={handleSubmit}
      >
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          defaultValue={activity?.title || ""}
        />
        <TextField
          name="description"
          label="Description"
          defaultValue={activity?.description || ""}
          variant="outlined"
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          defaultValue={activity?.category || ""}
        />
        <TextField
          name="date"
          label="Date"
          variant="outlined"
          fullWidth
          type="datetime-local"
          defaultValue={activity?.date || ""}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="city"
          label="City"
          variant="outlined"
          fullWidth
          defaultValue={activity?.city || ""}
        />
        <TextField
          name="venue"
          label="Venue"
          variant="outlined"
          fullWidth
          defaultValue={activity?.venue || ""}
        />
        <Box display="flex" justifyContent="space-between"></Box>
        <Box>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ ml: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
