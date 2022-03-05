module.exports = function(sequelize, dataTypes){ 
    let alias = "Generos"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        nombre: { 
            type: dataTypes.STRING, 
            allowNull: true 
        }, 
        imagen: { 
            type: dataTypes.STRING, 
            allowNull: true 
        }
        
    } 
    let config = { 
        tableName: 'generos', 
        timestamps: false 
    } 
    let Generos = sequelize.define(alias, cols, config) 

    Generos.associate = function(models) {
        Generos.hasMany(models.Peliculas, {
            as:'peliculasPorGenero',
            foreignKey: 'genero_id'
        })
    }
 
    return Generos; 
}