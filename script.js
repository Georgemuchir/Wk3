
fetch("http://localhost:3000/films")
.then (res => res.json())
.then (films => films.map(film =>{
    const title1 = document.createElement("h1")
    title1.textContent = film.title
    title.appendChild(title1)

    const description=document.createElement("p")
    description.innerHTML=film.description
    main.appendChild(description)

    const showtime=document.createElement("h3")
    showtime.innerHTML=film.showtime
    main.appendChild(showtime)

    const image=document.createElement("img")
    image.src=film.poster
    main.appendChild(image)
}))



// .then (films => films.maps)
// fetch("http://localhost:3000/")
// .then(respond =>respond.json()),
// .then (films =>films.maps)
// const title =document.createElement("h1")
// title.textContent=film.title
// movie_details.apendChild(title)MY MISTAKES 











































// document .addEventListener("DOMContentLoaded"), function() {
// }
//     fetch("http://localhost:3000/")
//     .then(res => res.json())
//     .then(data => {
//         if (data.length>0) {
//          const firstMovie = data[0];
//          const poster = firstMovie.Poster;
//          const title = firstMovie.Title;
//          const runtime = firstMovie.Runtime;
//          const showtime = firstMovie.Showtime;
//          const capacity = firstMovie.Capacity;
//          const ticketssold = firstMovie.TicketsSold;
// const availableTickets = capacity - ticketssold;
// const posterElement =document.createElement("img");
         
//  } }) ;
 
//  function fetchData() {
//      fetch("http://localhost:3000/")
//          .then(res => res.json())
//          .then(data => {
//              console.log(data);
//          })
//          .catch(error => {
//              console.error("Error fetching data:", error);
//          });
//  }

// document .addEventListener("DOMContentLoaded", function() {
//     fetch(endpoint)
//     .then(res => res.json())
//     .then(data => {
//         if (data.length>0) {
//          const firstMovie = data[0];
//          const poster = firstMovie.Poster;
//          const title = firstMovie.Title;
//          const runtime = firstMovie.Runtime;
//          const showtime = firstMovie.Showtime;
//          const capacity = firstMovie.Capacity;
//          const ticketssold = firstMovie.TicketsSold;
// const availableTickets = capacity - ticketssold;
// const posterElement =document.createElement("img");
         
//  }}) 
//  });
 
//  function fetchData() {
//      fetch("http://localhost:3000/")
//          .then(res => res.json())
//          .then(data => {
//              console.log(data);
//          })
//          .catch(error => {
//              console.error("Error fetching data:", error);
//          });
//  }
 // function (){
 //     fetch ("http://localhost:3000/")
 //     .then(res => res.json())
 //     .then(data => {
 //         console.log(data)
 //     })
 // }
 

//  const availableTickets = capacity - ticketsSold;
//          const posterelement = documentElement("img");
//          posterelement.src = poster;
//          posterElement=`${title} poster`;