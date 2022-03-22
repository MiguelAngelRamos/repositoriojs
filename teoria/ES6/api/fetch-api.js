// Personajes https://rickandmortyapi.com/api/character
// fetch

const URL = 'https://rickandmortyapi.com/api/character'; // END POINT

// fetch trabaja con promesas
fetch(URL).then( resp => {
  return resp.json();
}).then( data => {
  console.log(data);
}).catch(err => console.error(err));