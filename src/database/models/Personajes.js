module.exports = function(sequelize, dataTypes){ 
    let alias = "Personajes"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        imagen: { 
            type: dataTypes.STRING, 
            allowNull: true 
        }, 
        nombre: { 
            type: dataTypes.STRING, 
            allowNull: true 
        },
        edad: { 
            type: dataTypes.INTEGER, 
            allowNull: true 
        },
        peso: { 
            type: dataTypes.INTEGER, 
            allowNull: true 
        },
        Historia: { 
            type: dataTypes.STRING, 
            allowNull: true 
        }  
    } 
    let config = { 
        tableName: 'personajes', 
        timestamps: false 
    } 
    let Personajes = sequelize.define(alias, cols, config) 

    Personajes.associate = function (models){
        Personajes.belongsToMany(models.Peliculas, {
            as: 'peliculas',
            through: 'peliculas_personajes',
            foreignKey: 'personaje_id',
            otherKey: 'pelicula_id',
            timestamps: false
        })

    }
 
    return Personajes; 
}