var output = document.getElementById('output');
var container = document.createElement('div');
container.setAttribute('class','container');
output.appendChild(container);
function searchMovie(string){
  if(string!=''){
    fetch("http://www.omdbapi.com/?t="+string+"&apikey=26a71cf4")
    .then(function(resp){
      return resp.json(); 
    })
    .then(function(data){
      if(data["Poster"]!='N/A' && data["Poster"]!='' && data["Poster"]!=undefined){
            var imdb_id = encodeURI(data["imdbID"]);
            const main = document.createElement('div');
            main.setAttribute('class','main');
            main.setAttribute('id','main');
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            card.style.backgroundImage = "url('"+data["Poster"]+"')";
            const inner = document.createElement('div');
            inner.setAttribute('class','inner');
            const p = document.createElement('p');
            p.textContent = data["Title"];
            inner.appendChild(p);
            main.appendChild(card);
            main.appendChild(inner);
            container.appendChild(main);
            main.onclick = function(){
              window.location='info.html?movie='+imdb_id;
            }

        }
        
      })
      .catch(function(err){
        console.log(err);
      })

    }
    
}
function movie(){
  string = document.getElementById('movie').value;
  if(string!=''){
    fetch("http://www.omdbapi.com/?t="+string+"&apikey=26a71cf4")
    .then(function(resp){
      return resp.json(); 
    })
    .then(function(data){
      if(data["Poster"]!='N/A' && data["Poster"]!='' && data["Poster"]!=undefined){
            var imdb_id = encodeURI(data["imdbID"]);
            const main = document.createElement('div');
            main.setAttribute('class','main');
            main.setAttribute('id','main');
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            card.style.backgroundImage = "url('"+data["Poster"]+"')";
            const inner = document.createElement('div');
            inner.setAttribute('class','inner');
            const p = document.createElement('p');
            p.textContent = data["Title"];
            inner.appendChild(p);
            main.appendChild(card);
            main.appendChild(inner);
            container.appendChild(main);
            main.onclick = function(){
              window.location='info.html?movie='+imdb_id;
            }

        }
        
      })
      .catch(function(err){
        console.log(err);
      })

}
}