import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskList.css";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="task-list">
      <Typography variant="h5" color="textSecondary" className="task-title">
        {tasks.length === 0 ? "No tasks to display!" : "Your Tasks"}
      </Typography>
      <List>
        {tasks.map((task) => (
          <Paper
            key={task.id}
            elevation={3}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <ListItem>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                color="success"
              />
              <ListItemText
                primary={task.text}
                className={`task-text ${
                  task.completed ? "task-text-completed" : ""
                }`}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
