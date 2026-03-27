# 📰 HeadlineHub

A full-stack news aggregator web application built with **Node.js**, **Express**, **MongoDB**, and the **NewsAPI**. Users can sign up, log in, and browse categorized news articles with pagination — all behind JWT-based authentication.

---

## 🚀 Features

- 🔐 User authentication (Signup / Login / Logout) with hashed passwords
- 🍪 JWT stored in HTTP-only cookies for secure sessions
- 📰 Live news feed powered by [NewsAPI](https://newsapi.org/)
- 🗂️ Category-based filtering (General, Technology, Sports, etc.)
- 📄 Pagination support
- 🎨 EJS templating with reusable partials (header, sidebar)
- 🐳 Docker support for containerized deployment

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Runtime     | Node.js                 |
| Framework   | Express.js              |
| Database    | MongoDB + Mongoose      |
| Templating  | EJS                     |
| Auth        | bcrypt + JWT            |
| News Data   | NewsAPI (`/v2/everything`) |
| Container   | Docker                  |

---

## 📁 Project Structure

```
├── controllers/
│   ├── authController.js      # Signup, Login, Logout logic
│   └── newsController.js      # NewsAPI fetch logic
├── middleware/
│   └── authMiddleware.js      # JWT verification
├── models/
│   └── User.js                # Mongoose User schema
├── routes/
│   ├── authRoutes.js          # /login, /signup, /logout
│   └── newsRoutes.js          # / (dashboard)
├── views/
│   ├── dashboard.ejs          # Main news feed view
│   ├── auth/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   └── partials/
│       ├── header.ejs
│       └── sidebar.ejs
├── public/                    # Static assets (CSS, images)
├── Dockerfile
├── server.js                  # App entry point
└── .env                       # Environment variables (not committed)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/newsapp
JWT_SECRET=your_super_secret_key
NEWS_API_KEY=your_newsapi_key
PORT=3001
```

> 🔑 Get your free NewsAPI key at [https://newsapi.org/register](https://newsapi.org/register)

---

## 🏃 Running Locally

### Without Docker

```bash
# 1. Clone the repository
git clone https://github.com/your-username/headlinehub.git
cd headlinehub

# 2. Install dependencies
npm install

# 3. Create your .env file (see above)

# 4. Start the server
npm start
```

Visit `http://localhost:3001`

### With Docker

```bash
# Build the image
docker build -t headlinehub .

# Run the container
docker run -p 3001:3001 --env-file .env headlinehub
```

---

## 📸 Screenshots

> *(Add screenshots of your login page and dashboard here)*

---

## 📌 API Routes

| Method | Route     | Description              | Auth Required |
|--------|-----------|--------------------------|---------------|
| GET    | /login    | Render login page        | ❌            |
| POST   | /login    | Authenticate user        | ❌            |
| GET    | /signup   | Render signup page       | ❌            |
| POST   | /signup   | Register new user        | ❌            |
| GET    | /logout   | Clear cookie & redirect  | ✅            |
| GET    | /         | Dashboard (news feed)    | ✅            |
| GET    | /?category=technology&page=2 | Filtered + paginated feed | ✅ |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/) 
