function moviesearch(event) {
    event.preventDefault();
    var data = document.getElementById("data").value;
    data = data.replace(" ", "+");   
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
                document.getElementById('Result').innerHTML = 'Search Results ';
                for (i in data.Search) {
                    imdbid = data.Search[i].imdbID;
                    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=" + imdbid + "&r=json", {
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
                            cgrid.style.border = "1px solid black";

                            /**Creating a Bootstrap grid row for Image */
                            var rgrid = document.createElement('div');
                            rgrid.className = 'row';
                            rgrid.style.marginBottom = "5%";
                            /**Image element */
                            var cpic = document.createElement('img')
                            if (response.Poster != "N/A") {
                                cpic.src = response.Poster;
                                cpic.id = "Image";
                                cpic.alt = response.Title + ' Poster';
                                rgrid.appendChild(cpic);
                                cgrid.appendChild(rgrid);
                            }
                            /**Creating Bootstrap grid ROW for TITLE */
                            var rrgrid = document.createElement('div');
                            rrgrid.className = 'row';

                            /**Creating Bootstrap grid  COL for TITLE */
                            var ctitle = document.createElement('div');
                            ctitle.className = 'col-3';
                            ctitle.innerHTML = "Title :";

                            /**Creating Bootstrap grid  COL for TITLE  VALUE*/
                            var ccontent = document.createElement('div');
                            ccontent.className = 'col';
                            ccontent.innerHTML = response.Title;
                            /**Appending Title and Title Valur col to row and appending row to container */
                            rrgrid.appendChild(ctitle);
                            rrgrid.appendChild(ccontent);
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

                            if(response.Type=="series"){
                                var rrgrid = document.createElement('div');
                                rrgrid.className = 'row';
    
                                var ctitle = document.createElement('div');
                                ctitle.className = 'col-3';
                                ctitle.innerHTML = "Number of Seasons :";
    
                                var ccontent = document.createElement('div');
                                ccontent.className = 'col';
                                ccontent.innerHTML = response.totalSeasons;
    
                                rrgrid.append(ctitle);
                                rrgrid.append(ccontent);
                                cgrid.appendChild(rrgrid);
                                divelement.appendChild(cgrid);
                            }



                            for (j in response.Ratings) {
                                var rrgrid = document.createElement('div');
                                rrgrid.className = 'row';

                                var ctitle = document.createElement('div');
                                ctitle.className = 'col-3';
                                ctitle.innerHTML = response.Ratings[j].Source + " Rating :";

                                var ccontent = document.createElement('div');
                                ccontent.className = 'col';
                                ccontent.innerHTML = response.Ratings[j].Value;

                                rrgrid.append(ctitle);
                                rrgrid.append(ccontent);
                                cgrid.appendChild(rrgrid);
                                divelement.appendChild(cgrid);
                            }

                        });



                }
            } else {
                document.getElementById('Result').innerHTML = "Sorry, Movie not found !";
            }
        }

        );

}

function findStramingLocation(event)
{
    event.preventDefault();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var data = url.searchParams.get("data");
    URL="https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+data+"&country=us";
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
    .then(data=>
        {
            for(i in data.results)
            {       
                var divelement=document.getElementById('add_Array');
                var rgrid=document.createElement('div');
                rgrid.className='row';

                var ccontent=document.createElement('div');
                ccontent.className='col';

                var col=document.createElement('div');
                col.className='col';
                var cpic=document.createElement('img')

                var name=document.createElement('div');
                name.className='row';
                var namecontent=document.createElement('div');
                namecontent.className='col';
                namecontent.innerHTML=data.results[i].name;
                name.appendChild(namecontent);
                ccontent.appendChild(name);
                
                if(data.results[i].picture!="N/A")
                {
                    cpic.src=data.results[i].picture;
                    cpic.alt=' Poster';
                     cpic.height="200";
                     cpic.width="200";
                    col.appendChild(cpic);
                    rgrid.appendChild(col);
                    ccontent.appendChild(rgrid);
                }
        
                for(j in data.results[i].locations)
                {
                    var ctitle=document.createElement('div');
                    ctitle.className='col';

                    var aelem=document.createElement('a');
                    aelem.href= data.results[i].locations[j].url;  
                    aelem.appendChild(ctitle); 
                    aelem.innerHTML=data.results[i].locations[j].display_name;  
                    
                    ctitle.append(aelem);
                    var rtitle=document.createElement('div');
                    rtitle.className='row';
                    
                    ccontent.appendChild(rtitle);
                    rtitle.append(ctitle);
                    divelement.appendChild(ccontent); 
                }
                console.log(divelement);
            }
        })   
    .catch(err => {
        console.log(err);
    });
}

function getstreaminglinks(event)
{
    event.preventDefault();
    var data = document.getElementById("data").value;
    data = data.replace(" ", "+");
    window.open("streamingloc.html?data="+data); 
}