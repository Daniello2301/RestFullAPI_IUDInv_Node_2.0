const mongoose = require('mongoose');

const EstadoEquipoSchema = mongoose.Schema({

    nombre:{
        type: String,
        require : true
    },
    estado:{
        type: String,
        require: true,
        enum:['Activo', 'Inactivo']
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('EstadoEquipo', EstadoEquipoSchema);