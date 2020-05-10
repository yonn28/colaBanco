const { io } = require('../server');
const {TicketControl} =require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    client.on('siguienteTicket',(data, callback)=>{
        nextTicket=ticketControl.siguiente();
        callback(nextTicket);
    })

    client.emit('estadoActual',{ 
        actual: ticketControl.getUltimoTicket(),
        ultimos4:ticketControl.getUltimos4Tickets()
    })
  
    client.on('atenderTicket',(data,callback)=>{

        if(!data.escritorio){
            return callback({
                err:true,
                mensaje:'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        //actualizar/ notificar cambios en los ultimos 4

        client.broadcast.emit('estadoActual',{ 
            actual: ticketControl.getUltimoTicket(),
            ultimos4:ticketControl.getUltimos4Tickets()
        })

    })

});