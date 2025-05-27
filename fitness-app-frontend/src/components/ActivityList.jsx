import { Card, CardContent, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActivities } from '../services/api';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const fetchActivities = async () => {
    try {
      const response = await getActivities();
      setActivities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Grid container spacing={3}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={4} key={activity.id}>
          <Card
            onClick={() => navigate(`/activities/${activity.id}`)}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 4,
              },
              background: '#f9fafb',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {activity.type}
              </Typography>
              <Typography>Duration: {activity.duration} mins</Typography>
              <Typography>Calories: {activity.caloriesBurned}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActivityList;
