function moviesearch(event) {
    event.preventDefault();
    var data = document.getElementById("data").value;
    data = data.replace(" ", "+");
    URL = 'http://www.omdbapi.com/?apikey=8b1257f&t=' + data;
    fetch(URL)
        .then(response => response.json())
        .then(moviedetail => {
            document.getElementById('Result').innerHTML = 'Result';
            document.getElementById('Title').innerHTML = 'Title : ';
            document.getElementById('Title_Result').innerHTML = moviedetail.Title;
            document.getElementById('Year').innerHTML = 'Released : ';
            document.getElementById('Year_Result').innerHTML = moviedetail.Released;
            document.getElementById('Plot').innerHTML = 'Plot  : ';
            document.getElementById('Plot_Result').innerHTML = moviedetail.Plot;
            document.getElementById('Genre').innerHTML = 'Genre : ';
            document.getElementById('Genre_Result').innerHTML = moviedetail.Genre;
            document.getElementById('Runtime').innerHTML = 'Runtime : ';
            document.getElementById('Runtime_Result').innerHTML = moviedetail.Runtime;
            document.getElementById('Director').innerHTML = 'Director : ';
            document.getElementById('Director_Result').innerHTML = moviedetail.Director;
            document.getElementById('Actors').innerHTML = 'Actors : ';
            document.getElementById('Actors_Result').innerHTML = moviedetail.Actors;
            document.getElementById('Language').innerHTML = 'Language : ';
            document.getElementById('Language_Result').innerHTML = moviedetail.Language;
            document.getElementById('Writers').innerHTML = 'Writers : ';
            document.getElementById('Writers_Result').innerHTML = moviedetail.Writer;
            document.getElementById('Production').innerHTML = 'Production : ';
            document.getElementById('Production_Result').innerHTML = moviedetail.Production;
            document.getElementById('Boxoffice').innerHTML = 'Box Office Collection : ';
            document.getElementById('Boxoffice_Result').innerHTML = moviedetail.BoxOffice;
            /**Ratings and poster to be added by Vinaya */

        })



}