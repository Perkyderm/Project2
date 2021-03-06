module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(7, 4),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(7, 4),
      allowNull: false,
    },
  });

  Location.associate = (models) => {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Location.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return Location;
};
