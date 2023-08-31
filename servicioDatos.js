function finDeTransmisionDeDatos(id) {
    console.log('Transferencia', id, 'terminada');
}

function obtenDatosDeInternet(id, duracion) {
return new Promise(resolve => {
    console.log('Proceso', id, 'obteniendo datos de Internet');
    setTimeout(() => {
        finDeTransmisionDeDatos(id);
        resolve();
    }, duracion);
});
}

module.exports.getDatos = obtenDatosDeInternet;