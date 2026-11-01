# MyPortfolio – COMP229 Assignment 2 (Backend)

Node.js + Express REST API + MongoDB (Mongoose) + JWT authentication,
built on the course `mern_skeleton` structure (Weeks 3–6).

```
MyPortfolio/
├── client/                  ← your React app from Assignment 1 (copy it in)
├── config/config.js         ← port, JWT secret, MongoDB URI
├── server/
│   ├── express.js           ← Express app, middleware, routes mounted
│   ├── helpers/dbErrorHandler.js
│   ├── models/              ← contact, project, qualification, user
│   ├── controllers/         ← CRUD for each + auth.controller.js
│   └── routes/              ← contact, project, qualification, user, auth
├── server.js                ← entry point: connects to MongoDB, starts server
├── .env.example             ← copy to .env and fill in
└── package.json
```

---

## PART I – Project setup (15 marks)

1. Copy your **week 6 `mern_skeleton`** folder and rename the copy **`MyPortfolio`**
   (or use this folder; it contains the same backend layout).
2. Delete `MyPortfolio/client`, then paste the `client` folder from **Assignment 1**.
3. Install packages at the **root**:
   ```bash
   npm install
   ```
4. Check each side on its own (take screenshots of both):
   ```bash
   cd client && npm run dev        # frontend → http://localhost:5173
   # new terminal, at root:
   node server.js                   # backend  → http://localhost:3000
   ```
5. Stop both (Ctrl+C). Then, to run them **together**:
   ```bash
   cd client
   yarn add --dev nodemon concurrently     # or: npm i -D nodemon concurrently
   ```
6. In **`client/package.json`** change the `dev` script to:
   ```json
   "dev": "concurrently \"vite\" \"nodemon ../server.js\""
   ```
7. `cd client` → `yarn dev` (or `npm run dev`). Screenshot showing **both** running.

---

## PART II – MongoDB (25 marks)

1. In MongoDB Atlas (or Compass), create database **`Portfolio`**.
2. Create the collections **`contacts`, `projects`, `qualifications`, `users`**
   (Atlas makes you add one collection when creating the DB; add the others with “+”).
   Insert one sample document in each with the fields from the assignment.
3. Copy the connection string (**Connect → Drivers**). Put `Portfolio` before the `?`:
   ```
   mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/Portfolio?retryWrites=true&w=majority
   ```
4. Copy `.env.example` → `.env` and paste it as `MONGODB_URI`. Also set `JWT_SECRET`.
   (Alternatively, paste it directly into `config/config.js`, as in the slides.)
5. In Atlas **Network Access**, allow your IP address (or `0.0.0.0/0` for testing).
6. Screenshot: database + 4 collections + documents.

**Step 3a:** run `node server.js`, open `http://localhost:3000/`, and screenshot
`{"message":"Welcome to My Portfolio application."}`. Change the message in `server.js`
if your professor's screenshot shows different text.

**Step 4a:** screenshot the console showing `Server started on port 3000.` and
`Connected to the database!`.
*If you get a `querySrv`/DNS error, uncomment the two `dns` lines in `server.js`
(this fix comes from the Week 4 notes).*

---

## PART III – REST API & testing (30 + 20 marks)

All four resources have the same 6 endpoints:

| Method | URL | Action | Needs token? |
|---|---|---|---|
| GET | /api/contacts | list all | no |
| GET | /api/contacts/:id | get one | no |
| POST | /api/contacts | create | no (contact form is public) |
| PUT | /api/contacts/:id | update | **yes** |
| DELETE | /api/contacts/:id | delete one | **yes** |
| DELETE | /api/contacts | delete all | **yes** |

Same for `/api/projects` and `/api/qualifications` (POST needs a token too), and `/api/users`
(POST = sign up, public; GET by id / PUT / DELETE by id need a token **for that same user**).

### Test order in Postman / Thunder Client (screenshot each)

1. **POST** `http://localhost:3000/api/users` – Body → raw → JSON
   ```json
   { "name": "Jane Doe", "email": "jane@example.com", "password": "secret123" }
   ```
2. **POST** `http://localhost:3000/auth/signin`
   ```json
   { "email": "jane@example.com", "password": "secret123" }
   ```
   Copy the `token` from the response.
3. For the protected requests: open the **Auth** tab, choose **Bearer Token**, and paste the token.
4. **POST** `/api/contacts` → `{ "firstname":"Jane","lastname":"Doe","email":"jane@example.com" }`
5. **POST** `/api/projects` (token) →
   ```json
   { "title":"Portfolio Site","firstname":"Jane","lastname":"Doe","email":"jane@example.com",
     "completion":"2026-10-30","description":"MERN portfolio" }
   ```
6. **POST** `/api/qualifications` (token): same shape as projects
7. **GET** all and **GET** `/:id` (copy an `_id` from a response) for each resource
8. **PUT** `/:id` with a changed field (token)
9. **DELETE** `/:id` (token), then **DELETE** all (token)
10. **GET** `/auth/signout`
11. Try a protected route **without** a token and screenshot the `401 UnauthorizedError`.
    That proves the routes are protected (Part IV).

---

## PART IV – Authentication (10 marks)

- `server/controllers/auth.controller.js`: `signin` (checks password, signs a JWT),
  `signout` (clears cookie), `requireSignin` (express-jwt middleware),
  `hasAuthorization` (signed-in user may only change their own profile).
- `server/routes/auth.routes.js`: `POST /auth/signin`, `GET /auth/signout`.
- Passwords are never stored in plain text. The user model keeps `hashed_password` + `salt`
  and exposes `password` as a virtual field (Week 6 slides / Shama Hoque, Ch. 3).

---

## Submission checklist

- [ ] Zip of the project **without `node_modules`** (.zip, not .rar)
- [ ] GitHub link (`.gitignore` already excludes `node_modules` and `.env`)
- [ ] Word doc with screenshots: Part I (frontend, backend, concurrent), MongoDB DB + collections,
      welcome message in browser, “Connected to the database!” console, every API test, signin/token,
      401 on a protected route
