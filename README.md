# JobFlow — Job Application Tracker

JobFlow is a modern full-stack job application tracking dashboard built with Next.js, MongoDB, and Tailwind CSS. It helps users manage, organize, and track their job applications with a clean and responsive interface.

## Features

- Create new job applications
- View all applications dynamically
- Update existing applications
- Delete applications
- Dashboard analytics cards
- Real-time UI updates
- Toast notifications
- Responsive modern UI
- Status-based colored badges

## Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Axios
- React Hot Toast

### Backend
- Next.js API Routes
- MongoDB
- Mongoose

## Project Structure

```bash
app/
 ├── api/
 │    └── jobs/
 │         ├── route.js
 │         └── [id]/
 │              └── route.js

components/
 ├── DashboardCards.jsx
 ├── JobForm.jsx
 └── JobTable.jsx

lib/
 └── mongodb.js

models/
 └── Job.js

 ```

 ## Installation

### Clone the repository:

```bash
git clone https://github.com/Riyakuila/JobFlow.git
```

### Install dependencies:

```bash
npm install
```

### Create .env.local file:

```bash
MONGODB_URI=your_mongodb_connection_string
```

### Run development server:

```bash
npm run dev
```

### Open:

```bash 
http://localhost:3000
```

## CRUD Operations

### Create

Add new job applications using the frontend form or API.

### Read

Fetch and display all applications dynamically from MongoDB.

### Update

Edit existing applications with auto-filled forms.

### Delete

Remove applications instantly with real-time UI updates.

## API Routes

### GET & POST
```bash
/api/jobs
```

### PUT & DELETE

```bash
/api/jobs/:id
```

## Status Types
- Applied
- Interview Scheduled
- Rejected
- Offer Received

## Future Improvements
- Authentication
- Search & filters
- Pagination
- Dark/light theme toggle
- Export applications
- Interview reminders

## Author

Riya Kuila