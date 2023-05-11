
//FILTRADO POR PRODUCTOR
//Crea un nueva lista arrayProductores, mostrando la data por productor (map) y filtrando los nombres de productores sin repetir (indexOf).
export function arrayProductores (ghibliData) {
 return ghibliData.map(function(peliculas) {
   return peliculas.producer
  }).filter(function(producer, index, arrayProductores) {
   return arrayProductores.indexOf(producer) === index;
  });
};  
  
//Filtra desde la data las peliculas del productor seleccionado y devuelve un array con los valores de los posters
export function filterDataProducer (ghibliData, selectProductor) {
 return ghibliData.filter(function(peliculas) {
  console.log(peliculas.producer === selectProductor)
   return peliculas.producer === selectProductor;
    });
};

//FILTRADO DIRECTOR 
// (1) Crea un nueva lista arrayDirectores, mostrando la data por director (map) y filtrando los nombres de directores sin repetir (indexOf).
export function arrayDirectores (ghibliData) {
  return ghibliData.map(function(peliculas) {
     return peliculas.director; 
    }).filter(function (director, index, arrayDirectores) {
       return arrayDirectores.indexOf(director) === index;
      });
}; 

//(3) Filtra desde la data las peliculas del productor seleccionado y devuelve un array con los valores de los posters
export const filterDataDirector = (data, nameDirector) => {
  const newDataDirector = data.filter(movie => movie.director === nameDirector);
  return newDataDirector;
};

// FILTRADO POR AÑO
// Crea una lista a partir ghibliData, reorganizando los valores del año ascendentemente
export function arrayAñoAscendente (ghibliData) {
 return ghibliData.sort((a, b) =>(b.release_date - a.release_date))
};

// Crea una lista a partir ghibliData, reorganizando los valores del año descendentemente
export function arrayAñoDescendente (ghibliData) {
 return ghibliData.sort ((a, b) => (a.release_date - b.release_date))
};

// FILTRADO POR ALFABETO
// (3) Crea una lista a partir ghibliData, reorganizando los valores del titulo ascendentemente
export function arrayAlfabetoAZ (ghibliData) {
  return ghibliData.sort(function(a, b) {
    return a.title > b.title ? 1 : -1;
  });
};

// Crea una lista a partir ghibliData, reorganizando los valores del titulo descendentemente
 export function arrayAlfabetoZA (ghibliData) {  
  return ghibliData.sort(function(a, b) {
    return a.title < b.title ? 1 : -1;
  });
};

// FILTRADO POR ESPECIE
// (1) Crea un nueva lista arrayEspecies, mostrando la data por especie (map) y filtrando las especies sin repetir (indexOf).
export function arrayEspecies (ghibliData) {
  const espciesSinRepetir = ghibliData.map(peliculas => 
    peliculas.people.map(personaje => 
      personaje.specie)).flat();
  return [...new Set(espciesSinRepetir)]; 
};

//(3) Filtra desde la data las peliculas de la especie seleccionada y devuelve un array con los valores de los posters
export function filterDataSpecie(dataStudioGhibli, selectSpecie) {
  return dataStudioGhibli.filter((peliculas) => {
    return peliculas.people.some ((personaje) => {
      return personaje.specie === selectSpecie;
    });
  })
};







