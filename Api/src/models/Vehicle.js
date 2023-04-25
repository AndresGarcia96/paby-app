const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("vehicle", {
        license_plate: {
            type: DataTypes.STRING(7),
            primaryKey: true,
            unique: true,
            validate: {
                len: [1, 7] // validación que asegura que la placa tenga entre 1 y 7 caracteres
            }
        },
        vehicle_tipe: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        type_of_service: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car_brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car_model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car_model_year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car_color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        license_plate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false });
};