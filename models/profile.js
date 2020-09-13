module.exports = (sequelize, DataTypes) => {
  // define what a profile entry looks like
  const Profile = sequelize.define("Profile", {
    name: DataTypes.STRING,
  });

  // associate the profile with the user using belongsTo
  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Profile;
};
