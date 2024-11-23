import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <Grid container spacing={2} alignItems="center" marginTop="20px">
      <Grid item xs={9}>
        <TextField
          variant="outlined"
          label="Add a new task"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          autoFocus
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
