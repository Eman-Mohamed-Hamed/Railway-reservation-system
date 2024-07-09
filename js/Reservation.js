let allTickets = JSON.parse(localStorage.getItem("ticket")) || [];
let disTicket  =document.querySelector("#creat");
console.log(allTickets);

allTickets.forEach((ticket) =>{
    console.log(ticket);
    disTicket.innerHTML += `
<div class="ticket" id="ticket">
    
        <div class="row">
        <div class="col-xs-6 pull-left" id="date">${ticket.day}</div>
        <div class="col-xs-6 pull-right ">Egyption RAILWAYS</div>
      </div>
      <div class="row">
        <div class="col-xs-6 trainno"><span id="number">${ticket.trainNumber}</span></div>
        <div class="col-xs-6 trainname">${ticket.trainName}</div>
      </div>
      <div class="row">
        <div class="col-xs-6 from">From :<span id="From">${ticket.current}</span></div>
        <div class="col-xs-6 to">To :<span id="To">${ticket.distination}</span></div>
      </div>
      <div class="row">
        <div class="col-xs-2 compartment">S3</div>
        <div class="col-xs-4 seatno">SEAT NO:45</div>
        <div class="col-xs-3 compartment" id="classifiy">${ticket.classifiy}</div>
      </div>
      </div>
    `
});


// let allTickets = JSON.parse(localStorage.getItem("cartona")) || [];
// let disTicket  =document.querySelector("#creat");
// console.log(allTickets);

// allTickets.forEach((ticket) =>{
//     console.log(ticket);
//     disTicket.innerHTML += `
// <div class="ticket" id="ticket">
    
//         <div class="row">
//         <div class="col-xs-6 pull-left" id="date">20/1/2023</div>
//         <div class="col-xs-6 pull-right ">Egyption RAILWAYS</div>
//       </div>
//       <div class="row">
//         <div class="col-xs-6 trainno"><span id="number">45528</span></div>
//         <div class="col-xs-6 trainname">train express</div>
//       </div>
//       <div class="row">
//         <div class="col-xs-6 from">From :<span id="From">${ticket.from}</span></div>
//         <div class="col-xs-6 to">To :<span id="To">${ticket.to}</span></div>
//       </div>
//       <div class="row">
//         <div class="col-xs-2 compartment">S3</div>
//         <div class="col-xs-4 seatno">SEAT NO:45</div>
//         <div class="col-xs-3 compartment" id="classifiy">GEN</div>
//       </div>
//       </div>
//     `
// });



