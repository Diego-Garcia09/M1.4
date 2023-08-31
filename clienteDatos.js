const servicio = require("./servicioDatos");

async function main() {
    try {
        await servicio.getDatos(1, 1000);
        await servicio.getDatos(2, 500);
        await servicio.getDatos(3, 1500);
        await servicio.getDatos(4, 700);
        await servicio.getDatos(5, 3500);
        console.log('Programa Terminado');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();