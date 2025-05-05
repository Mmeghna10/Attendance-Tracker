import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { format } from 'date-fns';
import axios from 'axios';

const AttendanceView = () => {
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  useEffect(() => {
    fetchAttendance();
  }, [date]);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`/api/attendance/date/${date}`);
      setAttendance(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <TextField
        type="date"
        value={date}
        onChange={handleDateChange}
        style={{ marginBottom: '20px' }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Roll Number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Join Time</TableCell>
              <TableCell>Leave Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendance.map((record) => (
              <TableRow key={record._id}>
                <TableCell>{record.student.name}</TableCell>
                <TableCell>{record.student.rollNumber}</TableCell>
                <TableCell>
                  <Typography
                    style={{
                      color: record.status === 'present' ? 'green' : 'red'
                    }}
                  >
                    {record.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  {record.joinTime
                    ? format(new Date(record.joinTime), 'hh:mm a')
                    : '-'}
                </TableCell>
                <TableCell>
                  {record.leaveTime
                    ? format(new Date(record.leaveTime), 'hh:mm a')
                    : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceView; 