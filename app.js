function moviesearch(event) {
    event.preventDefault();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var data = url.searchParams.get("name");
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=" + data, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "2184709211msh9241b36898ea929p185b66jsnd7cb1acad731"
        }
    })
        .then(response =>
            response.json()
        )
        .then(data => {
            if (data.Response == "True") {
                document.getElementById('Result').innerHTML = 'Found '+data.Search.length +' matches :';
                for (i in data.Search) {
                    imdbid = data.Search[i].imdbID;
                    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=" + imdbid + "&r=json&plot=full", {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                            "x-rapidapi-key": "2184709211msh9241b36898ea929p185b66jsnd7cb1acad731"
                        }
                    })
                        .then(response => response.json())
                        .then(response => {
                            /**Linking to index.html */
                            var divelement = document.getElementById('add_Array');

                            /**Creating a Bootstrap grid container */
                            var cgrid = document.createElement('div');
                            cgrid.className = 'container';
                            cgrid.id = imdbid;

                            /**Creating a Bootstrap grid row for Image */
                            var rgrid = document.createElement('div');
                            rgrid.className = 'row';
                            rgrid.id="PosterStyle";

                            /**Image element */
                            var cpic = document.createElement('img')
                            if (response.Poster != "N/A") {
                                cpic.src = response.Poster;
                                cpic.id = "Image";
                                cpic.alt = response.Title + ' Poster';
                                rgrid.appendChild(cpic);
                                cgrid.appendChild(rgrid);
                            } else {
                                var posterdiv = document.createElement('div');
                                posterdiv.id = 'poster';
                                var text = document.createElement('p');
                                text.id = 'postertext';
                                text.innerHTML = "Poster Not Found";
                                posterdiv.appendChild(text);
                                rgrid.appendChild(posterdiv);
                                cgrid.appendChild(rgrid);
                            }
                            /**Creating Bootstrap grid ROW for TITLE */
                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';                           

                            /**Creating Bootstrap grid  COL for TITLE  VALUE*/
                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Title;
                            ccontent.id='Title';
                            /**Appending Title and Title Valur col to row and appending row to container */
                            rrgrid.appendChild(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);      
                            
                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';           
                            
                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';
                            rrgrid.id="Ratingsection"

                            var rrgrid2 = document.createElement('div');
                            rrgrid2.className = 'row';
                           

                            var ratings=document.createElement('div');
                            ratings.className='col';
                            ratings.style.textAlign='center';
                            ratings.innerHTML='Ratings';
                            ratings.id="Rating";
                            rrgrid2.appendChild(ratings);
                            cgrid.appendChild(rrgrid2);


                            for(j in response.Ratings){
                                var ctitle = document.createElement('div');
                                ctitle.className = 'col-4';
                                ctitle.style.textAlign = 'center';
                                ctitle.innerHTML=response.Ratings[j].Value+" on "+response.Ratings[j].Source;
                                rrgrid.append(ctitle); 
                            }                  
                           
                          
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Released :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Released;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Language :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Language;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Genre :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Genre;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Rated :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Rated;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';
                            rrgrid.id='Plot';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Plot :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Plot;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);         
                          
                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Writers :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Writer;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Runtime :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Runtime;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Director :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Director;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Actors :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Actors;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "BoxOffice :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.BoxOffice;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Production :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Production;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Year :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Year;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Type :";

                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Type;

                            rrgrid.append(ctitle);
                            rrgrid.append(ccontent);
                            cgrid.appendChild(rrgrid);
                            divelement.appendChild(cgrid);

                            if (response.Type == "series") {
                                var rrgrid = document.createElement('div');
                                rrgrid.className = 'row';

                                var ctitle = document.createElement('div');
                                ctitle.className = 'col-3';
                                ctitle.innerHTML = "Seasons :";

                                var ccontent = document.createElement('div');
                                ccontent.className = 'col';
                                ccontent.innerHTML = response.totalSeasons;

                                rrgrid.append(ctitle);
                                rrgrid.append(ccontent);
                                cgrid.appendChild(rrgrid);
                                divelement.appendChild(cgrid);
                            }





                        });



                }
            } else {
                document.getElementById('Result').innerHTML = "Sorry, No Results found !";
            }
        }

        );

}

function findStramingLocation(event) {
    event.preventDefault();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var data = url.searchParams.get("data");
    URL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + data + "&country=us";
    fetch(URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "2184709211msh9241b36898ea929p185b66jsnd7cb1acad731"
        }
    })
        .then(response =>
            response.json()
        )
        .then(data => {

            if (data.results.length === 0) {
                document.getElementById('Result').innerHTML = "Sorry, No Results found !";
            }

            else {
                document.getElementById('Result').innerHTML = 'Here are your search matches';
                for (i in data.results) {
                    var divelement = document.getElementById('add_Array');
                    var DistinctLocation = [];
                    var count = 0;
                    var start = false;
                    for (j in data.results[i].locations) {
                        for (k = 0; k < DistinctLocation.length; k++) {
                            if (data.results[i].locations[j].display_name == DistinctLocation[k].display_name
                                && data.results[i].locations[j].url == DistinctLocation[k].url
                            ) 
                            {
                                start = true;
                            }
                        }
                        count++;
                        if (count == 1 && start == false) {
                            DistinctLocation.push(data.results[i].locations[j]);
                        }
                        start = false;
                        count = 0;
                    }

                    for (j in DistinctLocation) {
                        var rgrid = document.createElement('div');
                        rgrid.className = 'row';

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col';

                        var col = document.createElement('div');
                        col.className = 'col';
                        var cpic = document.createElement('img')

                        if (data.results[i].picture != null) {
                            cpic.src = data.results[i].picture;
                            cpic.alt = ' Poster';
                            cpic.id = 'dimension';
                            col.appendChild(cpic);
                            rgrid.appendChild(col);
                            ccontent.appendChild(rgrid);
                        }

                        else {
                            var posterdiv = document.createElement('div');
                            posterdiv.id = 'poster';
                            var text = document.createElement('p');
                            text.id = 'postertext';
                            text.innerHTML = "Poster Not Found";
                            posterdiv.appendChild(text);
                            col.appendChild(posterdiv);
                            rgrid.appendChild(col);
                            ccontent.appendChild(rgrid);
                        }

                        var name = document.createElement('div');
                        name.className = 'row';
                        var namecontent = document.createElement('div');
                        namecontent.className = 'col';
                        namecontent.id= 'title';
                        namecontent.innerHTML = data.results[i].name;
                        name.appendChild(namecontent);
                        ccontent.appendChild(name);

                        var ctitle = document.createElement('div');
                        ctitle.className = 'col';

                        var aelem = document.createElement('a');
                        aelem.href = DistinctLocation[j].url;
                        aelem.appendChild(ctitle);
                        aelem.innerHTML = DistinctLocation[j].display_name;

                        ctitle.append(aelem);
                        var rtitle = document.createElement('div');
                        rtitle.className = 'row';

                        ccontent.appendChild(rtitle);
                        rtitle.append(ctitle);
                        divelement.appendChild(ccontent);
                    }

                }

            }

        })
        .catch(err => {
            console.log(err);
        });
}

function movieDetailSearch(event) {
    event.preventDefault();
    var data = document.getElementById("data").value;
    data = data.replace(" ", "+");
    window.open("movieDetail.html?name=" + data);
}

function getstreaminglinks(event) {
    event.preventDefault();
    var data = document.getElementById("data").value;
    data = data.replace(" ", "+");
    window.open("streamingloc.html?data=" + data);
}

function addimagegallery(event) {
    event.preventDefault();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=" + name, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "2184709211msh9241b36898ea929p185b66jsnd7cb1acad731"
        }
    })
        .then(response =>
            response.json()
        )
        .then(data => {
            if (data.Response == "True") {
                fetch("https://www.googleapis.com/customsearch/v1?q=" + name + "&cx=007406524667026610117:ibv07ximgpk&key=AIzaSyDE0Xp8V6sMIFOSYyd4sGjNm-xlFL7gENQ&searchType=image", {
                    "method": "GET"
                })
                    .then(response =>
                        response.json()
                    ).then(data => {
                        document.getElementById('image_gallery').innerHTML = "Image Gallery";
                        var divelement = document.getElementById('image_gallery_results');

                        /**Creating a Bootstrap grid container */
                        var cgrid = document.createElement('div');
                        cgrid.className = 'container';
                        cgrid.id="image_gallery_pics";                    

                        var rgrid = document.createElement('div');
                        rgrid.className = 'row';
                        rgrid.style.marginBottom = "5%";

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[0].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[0].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[1].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[1].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);

                        cgrid.appendChild(rgrid);

                        var rgrid = document.createElement('div');
                        rgrid.className = 'row';
                        rgrid.style.marginBottom = "5%";

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[2].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[2].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[3].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[3].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        cgrid.appendChild(rgrid);


                        var rgrid = document.createElement('div');
                        rgrid.className = 'row';
                        rgrid.style.marginBottom = "5%";

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[4].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[4].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[5].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[5].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        cgrid.appendChild(rgrid);


                        var rgrid = document.createElement('div');
                        rgrid.className = 'row';
                        rgrid.style.marginBottom = "5%";

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[6].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[6].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[7].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[7].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        cgrid.appendChild(rgrid);


                        var rgrid = document.createElement('div');
                        rgrid.className = 'row';
                        rgrid.style.marginBottom = "5%";

                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[8].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[8].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        var ccontent = document.createElement('div');
                        ccontent.className = 'col-5';
                        var cpic = document.createElement('img')
                        cpic.src = data.items[9].link;
                        cpic.id = "Image_Gallery";
                        cpic.alt = data.items[9].title + ' Poster';
                        ccontent.appendChild(cpic);
                        rgrid.appendChild(cpic);
                        cgrid.appendChild(rgrid);


                        divelement.appendChild(cgrid);

                    })
            } else {
                document.getElementById('image_gallery').innerHTML = "";

            }
        })
}

function PopularMovies(event) {
    event.preventDefault();
    fetch("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=0425b9ec52c1ac4b75c12ca3da201132", {
        "method": "GET",
        "headers": {}
    })
        .then(response =>
            response.json()
        )
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                if (i < 12) {
                    var poster = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

                    var divelement = document.getElementById('popularmovies');

                    var ccontent = document.createElement('div');
                    ccontent.className = 'col-2';
                    ccontent.id = 'col-size';
                    var cpic = document.createElement('img')
                    cpic.id = 'dimension';
                    cpic.src = poster;
                    ccontent.appendChild(cpic);
                    divelement.appendChild(ccontent);
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
}