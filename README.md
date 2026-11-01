# COMP229 Assignment 2 - MyPortfolio

Crystel Hilton

This is my portfolio app for Assignment 2. The frontend is my React app from Assignment 1 and the backend is Node.js and Express with a MongoDB Atlas database (Portfolio). It has REST APIs for contacts, projects, qualifications and users, plus sign in / sign out with JWT.

## How to run

1. Run `npm install` in the main folder and in the client folder
2. Add a `.env` file in the main folder with MONGODB_URI and JWT_SECRET
3. `cd client` then `npm run dev`

Frontend runs on http://localhost:5173 and the backend runs on http://localhost:3000

## APIs

- /api/contacts
- /api/projects
- /api/qualifications
- /api/users
- /auth/signin and /auth/signout

Each API has GET all, GET by id, POST, PUT by id, DELETE by id and DELETE all. Update and delete need a token.
