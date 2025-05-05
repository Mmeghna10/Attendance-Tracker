import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { format } from 'date-fns';

const Dashboard = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const today = format(new Date(), 'yyyy-MM-dd');
        const response = await axios.get(`/api/attendance/date/${today}`);
        setAttendance(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  const handleTrackAttendance = async () => {
    try {
      const meetId = prompt('Enter Google Meet ID:');
      if (meetId) {
        await axios.post('/api/attendance/track', { meetId });
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  const presentCount = attendance.filter(a => a.status === 'present').length;
  const absentCount = attendance.filter(a => a.status === 'absent').length;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTrackAttendance}
        >
          Track Today's Attendance
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Present: {presentCount}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Absent: {absentCount}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard; 