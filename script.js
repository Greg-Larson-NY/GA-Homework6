
const cityFormCapture = document.getElementById('citipix-form');

cityFormCapture.addEventListener('submit', function(event) {

  event.preventDefault();
 
  const city = document.getElementById('city-type').value;

  const cleanedCity = city.trim().toLowerCase();

  document.body.classList = "";

  
  if (cleanedCity === 'new york' || cleanedCity === 'new york city' || cleanedCity === 'nyc') {
    document.body.classList.add('nyc');
  }
  
  else if (cleanedCity === 'san francisco' || cleanedCity === 'bay area' || cleanedCity === 'sf') {
    document.body.classList.add('sf');
  }
 
  else if (cleanedCity === 'los angeles' || cleanedCity === 'la' || cleanedCity === 'lax') {
    document.body.classList.add('la');
  }
  
  else if (cleanedCity === 'buffalo' || cleanedCity === 'buf' || cleanedCity === 'bills mafia') {
    document.body.classList.add('buf');
  }
  
  else if (cleanedCity === 'dublin' || cleanedCity === 'guinness' || cleanedCity === 'stout') {
    document.body.classList.add('dub');
  }
  
  else if (cleanedCity === 'winslow' || cleanedCity === 'take it easy' || cleanedCity === 'eagles') {
    document.body.classList.add('win');
  }
  
  else if (cleanedCity === 'sharon springs' || cleanedCity === 'schitts creek' || cleanedCity === 'rose apothecary') {
    document.body.classList.add('ssprings');
  }
  
  else if (cleanedCity === 'tatooine' || cleanedCity === 'star wars' || cleanedCity === 'in a galaxy far far away') {
    document.body.classList.add('tat');
  }
  
  else if (cleanedCity === 'raccoon city' || cleanedCity === 'resident evil' || cleanedCity === 'zombie') {
    document.body.classList.add('rc');
  }
    
  
  else if (cleanedCity === 'austin' || cleanedCity === 'atx') {
    document.body.classList.add('austin');
  }
  
  else if (cleanedCity === 'sydney' || cleanedCity === 'syd') {
    document.body.classList.add('sydney');
  }
  
  cityFormCapture.reset();
});




  
  

 
  





