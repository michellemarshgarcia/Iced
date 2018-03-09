module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        client_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        }
    });

    Client.associate = function(models) {
		Client.hasMany(models.Contact, {
			onDelete: "cascade"
		});
    };

    return Client;
};
