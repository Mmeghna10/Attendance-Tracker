const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');
const Student = require('../models/Student');
const { google } = require('googleapis');

// Google Meet API setup
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:3000'
);

// Track attendance from Google Meet
router.post('/track', async (req, res) => {
    try {
        const { meetId } = req.body;
        
        // For now, we'll simulate the attendance tracking
        // since Google Meet API requires complex OAuth2 setup
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        // Update attendance for all students
        const students = await Student.find();
        
        for (const student of students) {
            // Randomly mark students as present/absent for testing
            const isPresent = Math.random() > 0.3; // 70% chance of being present
            
            await Attendance.findOneAndUpdate(
                {
                    student: student._id,
                    date: currentDate
                },
                {
                    status: isPresent ? 'present' : 'absent',
                    joinTime: isPresent ? new Date() : null
                },
                { upsert: true, new: true }
            );
        }

        res.json({ message: 'Attendance tracked successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get attendance for a specific date
router.get('/date/:date', async (req, res) => {
    try {
        const date = new Date(req.params.date);
        date.setHours(0, 0, 0, 0);

        const attendance = await Attendance.find({ date })
            .populate('student', 'name rollNumber email');

        res.json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router; 