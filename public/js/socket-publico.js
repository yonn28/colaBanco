var socket = io();

console.log("entre aqui");


var labelTicket1= $("#lblTicket1");
var labelTicket2= $("#lblTicket2");
var labelTicket3= $("#lblTicket3");
var labelTicket4= $("#lblTicket4");

var labelEscritorio1=$("#lblEscritorio1");
var labelEscritorio2=$("#lblEscritorio2");
var labelEscritorio3=$("#lblEscritorio3");
var labelEscritorio4=$("#lblEscritorio4");

var lblTickets = [labelTicket1,labelTicket2,labelTicket3,labelTicket4]
var lblEscritorios = [labelEscritorio1,labelEscritorio2,labelEscritorio3,labelEscritorio4]

socket.on('estadoActual',function(res){
    // console.log(res.actual);
    // console.log(res.ultimos4);
    var audio = new Audio('../audio/new-ticket.mp3',autoplay="");
    audio.play();
    acutalizaHtml(res.ultimos4);
    // location.reload();
})



function acutalizaHtml(Ultimos4){
    for(var i=0; i<Ultimos4.length;i++){
        lblTickets[i].text('Ticket'+Ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio'+Ultimos4[i].escritorio);
    }
}