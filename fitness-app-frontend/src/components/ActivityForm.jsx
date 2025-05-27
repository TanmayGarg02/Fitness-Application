import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { addActivity } from '../services/api';

const ActivityForm = ({ onActivityAdded }) => {
  const [activity, setActivity] = useState({
    type: 'RUNNING',
    duration: '',
    caloriesBurned: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addActivity(activity);
      onActivityAdded();
      setActivity({ type: 'RUNNING', duration: '', caloriesBurned: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, background: '#ffffffdd' }}>
      <Typography variant="h5" gutterBottom>
        Add New Activity
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Activity Type</InputLabel>
          <Select
            value={activity.type}
            label="Activity Type"
            onChange={(e) => setActivity({ ...activity, type: e.target.value })}
          >
            <MenuItem value="RUNNING">Running</MenuItem>
            <MenuItem value="WALKING">Walking</MenuItem>
            <MenuItem value="CYCLING">Cycling</MenuItem>
            <MenuItem value="SWIMMING">Swimming</MenuItem>
            <MenuItem value="CARDIO">Cardio</MenuItem>
            <MenuItem value="WEIGHT_TRAINING">Weight_Training</MenuItem>
            <MenuItem value="YOGA">Yoga</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Duration (Minutes)"
          type="number"
          sx={{ mb: 2 }}
          value={activity.duration}
          onChange={(e) =>
            setActivity({ ...activity, duration: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Calories Burned"
          type="number"
          sx={{ mb: 3 }}
          value={activity.caloriesBurned}
          onChange={(e) =>
            setActivity({ ...activity, caloriesBurned: e.target.value })
          }
        />

        <Button variant="contained" type="submit" size="large">
          Add Activity
        </Button>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
