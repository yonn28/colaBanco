var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

$('button').on('click',function(){
    socket.emit('siguienteTicket',null,function(message){
        document.getElementById('lblNuevoTicket').innerHTML= `nuevo ticket ${message}`;
    })
})

socket.on('estadoActual',function(res){
    document.getElementById('lblNuevoTicket').innerHTML= `nuevo ticket ${res.actual}`;
})


