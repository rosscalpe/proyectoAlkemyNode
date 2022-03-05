module.exports = function(sequelize, dataTypes){ 
    let alias = "Peliculas"; 
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
        titulo: { 
            type: dataTypes.STRING, 
            allowNull: true 
        },
        fecha_creacion: { 
            type: dataTypes.DATE, 
        },
        calificacion: { 
            type: dataTypes.INTEGER, 
            allowNull: true 
        },
        genero_id: { 
            type: dataTypes.INTEGER, 
        }  
    } 
    let config = { 
        tableName: 'peliculas', 
        timestamps: false 
    } 
    let Peliculas = sequelize.define(alias, cols, config) 
    
    Peliculas.associate = function(models) {
        Peliculas.belongsTo(models.Generos, {
            as:'genero',
            foreignKey: 'genero_id'
        })

        Peliculas.belongsToMany(models.Personajes, {
            as: 'personajes',
            through: 'peliculas_personajes',
            foreignKey: 'pelicula_id',
            otherKey: 'personaje_id',
            timestamps: false
        })
    }    
 
    return Peliculas; 
}