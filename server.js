// setting up express server variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// gotta bring your models into the server
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// bring user routes into our server
const userRoutes = require("./routes/user-routes");
// prefix for all user routes is "/api/users"
app.use("/api/users", userRoutes);

// bring profile routes into our server
const profileRoutes = require("./routes/profile-routes");
// prefix for all profile routes is "/api/profiles"
app.use("/api/profiles", profileRoutes);

// bring post routes into our server
const postRoutes = require("./routes/post-routes");
// prefix for all post routes is "/api/posts"
app.use("/api/posts", postRoutes);

// sync the db, then start the connection to the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
});
