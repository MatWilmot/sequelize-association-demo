module.exports = (sequelize, DataTypes) => {
  // define the parameters for the User model
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // this is where we define associations for the User
  User.associate = (models) => {
    // hasMany allows multiple associations
    User.hasMany(models.Post, {
      // when we delete the user, also delete their posts from the db
      onDelete: "cascade",
    });

    // hasOne allows only one association
    User.hasOne(models.Profile, {
      // when we delete the user, also delete their profile from the db
      onDelete: "cascade",
    });

    // you'll need to check out the /routes directory to see how we can display the associations
    // Also check out the other models, you have to associate the user with them, too
  };

  return User;
};
