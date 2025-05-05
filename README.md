# Google Meet Attendance Tracker

A MERN stack application that automatically tracks attendance from Google Meet sessions.

## Features

- Automatically tracks student attendance from Google Meet
- Real-time attendance status updates
- Student management system
- Daily attendance reports
- Historical attendance data

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google Cloud Project with Google Meet API enabled
- Google OAuth 2.0 credentials

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Add students through the "Students" page
2. Start a Google Meet session
3. Click "Track Today's Attendance" on the dashboard
4. Enter the Google Meet ID when prompted
5. The system will automatically track attendance

## API Endpoints

- `POST /api/attendance/track` - Track attendance from Google Meet
- `GET /api/attendance/date/:date` - Get attendance for a specific date
- `GET /api/students` - Get all students
- `POST /api/students` - Add a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Material-UI
- Google Meet API 