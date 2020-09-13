module.exports = (sequelize, DataTypes) => {
  // define the Post model
  const Post = sequelize.define("Post", {
    text: DataTypes.STRING,
  });

  // associate the model with the User using belongsTo
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
