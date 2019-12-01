function NowPlaying(event) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    event.preventDefault();
    var cgrid = document.createElement('div');
    cgrid.className = 'container';
    var count = 24;
    

    var rgrid = document.createElement('div');
    rgrid.className = 'row';
    rgrid.style.marginBottom = "5%";
    for(i=1; i <10 ; i++){
        
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=3781293e0ca7ba2756598d23d175baf4&language=en-US&page="+i, {
        "method": "GET",

    })
        .then(response =>
           response.json()
        )
        .then(data => {
            document.getElementById('nowplaying_movies').innerHTML = 'Recently Released Movies';
            var divelement = document.getElementById('nowplaying_movies_results');

            for (i in data.results) {

                var moviedate = data.results[i].release_date;
                var dateArray = moviedate.split("-");               

                if(((dateArray[2] <= dd && dateArray[1]==mm && dateArray[0]==yyyy)||(dateArray[1]==mm-1 && dateArray[0]==yyyy) ) && data.results[i].poster_path!=null && count!=0 )
                {

                var ccgrid = document.createElement('div');
                ccgrid.className = 'col-3';

                var innercgrid = document.createElement('div');
                innercgrid.className = 'container';

                var picgrid=document.createElement('div');
                picgrid.className = 'row';
                var cpic = document.createElement('img');
                cpic.src = "https://image.tmdb.org/t/p/w300" + data.results[i].poster_path;
                cpic.id = "Image";
                cpic.alt = ' Poster';
                picgrid.appendChild(cpic);  
                innercgrid.appendChild(picgrid);
                count=count-1;
               
                
                var headrow=document.createElement('div');
                headrow.className='row';
                var innerheading = document.createElement('div');
                innerheading.className = 'col-12';
                innerheading.innerHTML = "Title : "+ data.results[i].title; 
                innerheading.id= "movietitle";             

               headrow.appendChild(innerheading);
               innercgrid.appendChild(headrow);

               var daterow=document.createElement('div');
                daterow.className='row';
                var innerheading2 = document.createElement('div');
                innerheading2.className = 'col-12'; 
                innerheading2.innerHTML = "Released Date : "+ data.results[i].release_date;
                innerheading2.id= "moviedate"; 
  
                daterow.appendChild(innerheading2);
                innercgrid.appendChild(daterow);

                ccgrid.appendChild(innercgrid);

                rgrid.appendChild(ccgrid);

                cgrid.appendChild(rgrid);

                divelement.appendChild(cgrid);
                }       
         } })
}}