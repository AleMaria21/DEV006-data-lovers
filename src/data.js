
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
export function postersProducer (ghibliData, selectProductor) {
 return ghibliData.filter(function(peliculas) {
   return peliculas.producer === selectProductor;
  }).map(function(peliculas) {
     return peliculas.poster;
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
export function postersDirector (ghibliData, selectDirector) {
  return ghibliData.filter(function(peliculas) {
   return peliculas.director === selectDirector;
  }).map(function(peliculas) {
     return peliculas.poster;
    });
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
  const espciesSinRepetir = ghibliData
  .map(peliculas => peliculas.people.map(personaje => personaje.specie))
  .flat();
  return [...new Set(espciesSinRepetir)]; 
};

//(3) Filtra desde la data las peliculas del productor seleccionado y devuelve un array con los valores de los posters
export function postersEspecie(ghibliData, selectSpecie) {
  return ghibliData.filter((peliculas) => {
    return peliculas.people.some ((personaje) => {
      return personaje.specie === selectSpecie;
    });
  }).map(function(peliculas) {
  return peliculas.poster;
    });
};







