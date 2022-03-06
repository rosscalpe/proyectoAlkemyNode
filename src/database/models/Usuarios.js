module.exports = function(sequelize, dataTypes){ 
    let alias = "Usuarios"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        email: { 
            type: dataTypes.STRING, 
            allowNull: true 
        },
        contraseña: {
            type: dataTypes.STRING, 
            allowNull: true 
        }
    } 
    let config = { 
        tableName: 'usuarios', 
        timestamps: false 
    } 
    let Usuarios = sequelize.define(alias, cols, config) 

 
    return Usuarios; 
}