const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'absent'
    },
    joinTime: {
        type: Date
    },
    leaveTime: {
        type: Date
    }
});

module.exports = mongoose.model('Attendance', AttendanceSchema); 