var socket = io();

socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

// On son para escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor');
});

// Enivar información
socket.emit('enviarMensaje', {
    usuario: 'Jonathan Robles',
    mensaje: 'Hola mundo'
}, function(mensaje) {
    console.log(mensaje.resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});