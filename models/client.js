module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
             type: DataTypes.STRING,
             validate: {
                 len: [10],
                 is: ["^[0-9]+$",'i']
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
