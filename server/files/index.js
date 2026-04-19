window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

         const article = document.createElement("article");
  article.id = movie.imdbID; // IMPORTANTE

  const title = document.createElement("h1");
  title.textContent = movie.Title;

  const poster = document.createElement("img");
  poster.src = movie.Poster;
  poster.alt = movie.Title + " poster";

  const released = document.createElement("p");
  released.textContent = "Released: " + movie.Released;

  const runtime = document.createElement("p");
  runtime.textContent = "Runtime: " + movie.Runtime + " min";

  const genres = document.createElement("p");
  genres.textContent = "Genres: ";

  movie.Genres.forEach(function (genre) {
    const span = document.createElement("span");
    span.textContent = genre;
    span.className = "genre";
    genres.appendChild(span);
  });

  const directors = document.createElement("p");
  directors.textContent = "Directors: " + movie.Directors.join(", ");

  const writers = document.createElement("p");
  writers.textContent = "Writers: " + movie.Writers.join(", ");

  const actors = document.createElement("p");
  actors.textContent = "Actors: " + movie.Actors.join(", ");

  const plot = document.createElement("p");
  plot.textContent = "Plot: " + movie.Plot;

  const metascore = document.createElement("p");
  metascore.textContent = "Metascore: " + movie.Metascore;

  const imdb = document.createElement("p");
  imdb.textContent = "IMDb Rating: " + movie.imdbRating;

  
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function () {
    location.href = "edit.html?imdbID=" + movie.imdbID;
  };

  article.appendChild(title);
  article.appendChild(poster);
  article.appendChild(released);
  article.appendChild(runtime);
  article.appendChild(genres);
  article.appendChild(directors);
  article.appendChild(writers);
  article.appendChild(actors);
  article.appendChild(plot);
  article.appendChild(metascore);
  article.appendChild(imdb);
  article.appendChild(editButton);

  bodyElement.appendChild(article);   
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
