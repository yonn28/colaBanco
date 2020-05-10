var socket = io();

var searchParms = new URLSearchParams(window.location.search);

console.log(searchParms.has('escritorio'));


if(!searchParms.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario')
}

console.log(searchParms.get('escritorio'));

var escritorio = searchParms.get('escritorio');

$('h1').text('Escritorio:' + escritorio)


socket.emit('atenderTicket',{escritorio:escritorio}, function(ticket){
    console.log(ticket);
    $('small').text(ticket.numero);
    console.log(ticket.numero)
})

$('button').on('click',function(){
    socket.emit('atenderTicket',{escritorio:escritorio}, function(ticket){
        if(!ticket.numero){
            $('small').text(ticket);
        }else{            
            console.log(ticket);
            $('small').text(ticket.numero);
            console.log(ticket.numero)
        }
            
    })
})

