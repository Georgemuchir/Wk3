document .addEventListener("DOMContentLoaded", function() {
   fetch(endpoint)
   .then(res => res.json())
   .then(data => {
       if (data.length>0) {
        const firstMovie = data[0];
        const poster = firstMovie.Poster;
        const title = firstMovie.Title;
        const runtime = firstMovie.Runtime;
        const showtime = firstMovie.Showtime;
        const capacity = firstMovie.Capacity;
        const ticketssold = firstMovie.TicketsSold;

        const availableTickets = capacity - ticketsSold;
        const posterelement = documentElement("img");
        posterelement.src = poster;
        posterElement=`${title} poster`;
}}) 
});

function fetchData() {
    fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
// function (){
//     fetch ("http://localhost:3000/")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }