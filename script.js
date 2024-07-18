document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(films => {
            const filmsList = document.getElementById('films');
            filmsList.innerHTML = '';

            films.forEach(film => {
                const li = document.createElement('li');
                li.className = 'film';
                li.textContent = film.title;
                if (film.tickets_sold >= film.capacity) {
                    li.classList.add('sold-out');
                }
                li.addEventListener('click', () => {
                    fetchMovieDetails(film.id);
                });

                filmsList.appendChild(li);
            });

            // Load details for the first movie initially
            if (films.length > 0) {
                fetchMovieDetails(films[0].id);
            }
        })
        .catch(error => console.error('Error fetching films:', error));

    // Function to fetch and display movie details
    function fetchMovieDetails(id) {
        fetch(`http://localhost:3000/films/${id}`)
            .then(res => res.json())
            .then(film => {
                const main = document.getElementById('movie-details');
                main.innerHTML = '';

                const title = document.createElement('h1');
                title.textContent = film.title;
                main.appendChild(title);

                const description = document.createElement('p');
                description.textContent = film.description;
                main.appendChild(description);

                const runtime = document.createElement('p');
                runtime.textContent = `Runtime: ${film.runtime} minutes`;
                main.appendChild(runtime);

                const showtime = document.createElement('p');
                showtime.textContent = `Showtime: ${film.showtime}`;
                main.appendChild(showtime);

                const availableTickets = film.capacity - film.tickets_sold;
                const tickets = document.createElement('p');
                tickets.textContent = `Available Tickets: ${availableTickets}`;
                main.appendChild(tickets);

                const poster = document.createElement('img');
                poster.src = film.poster;
                poster.alt = `${film.title} Poster`;
                main.appendChild(poster);

                const buyButton = document.createElement('button');
                buyButton.textContent = availableTickets > 0 ? 'Buy Ticket' : 'Sold Out';
                buyButton.disabled = availableTickets === 0;
                buyButton.addEventListener('click', () => {
                    if (availableTickets > 0) {
                        tickets.textContent = `Available Tickets: ${--availableTickets}`;
                        buyButton.textContent = availableTickets > 0 ? 'Buy Ticket' : 'Sold Out';
                        buyButton.disabled = availableTickets === 0;
                    }
                });
                main.appendChild(buyButton);
            })
            .catch(error => console.error(`Error fetching movie details for ID ${id}:`, error));
    }
});
