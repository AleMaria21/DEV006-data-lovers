import {arrayProductores, filterDataProducer, arrayDirectores, filterDataDirector, arrayAñoAscendente, arrayAñoDescendente, arrayAlfabetoAZ, arrayAlfabetoZA} from "./data.js";

const postersContainer = document.querySelector('.postersContainer');
const portadaVideo = document.querySelector('.portadaVideo');
const titleLogoContainer = document.querySelector('.titleLogoContainer');
const parrafoContainer = document.querySelector('.parrafoContainer');
const buttonContainer = document.querySelector('.buttonContainer');

const newImagenDescriptionContainer = document.querySelector('.newImagenDescriptionContainer');
const newTitleContainer = document.querySelector('.newTitleContainer');
const newDescriptionContainer = document.querySelector('.newDescriptionContainer');
const newScoreContainer = document.querySelector('.newScoreContainer');
const newCreatorsContainer = document.querySelector('.newCreatorsContainer');
const newTitle1Container = document.querySelector('.newTitle1Container');
const newContadorContainer = document.querySelector('.newContadorContainer');
const newCardsContainer = document.querySelector('.newCardsContainer');
const newTitle2Container = document.querySelector('.newTitle2Container');
const newCardsContainer2 = document.querySelector('.newCardsContainer2');
const newTitle3Container = document.querySelector('.newTitle3Container');
const newCardsContainer3 = document.querySelector('.newCardsContainer3');

const filterAlphabet = document.getElementById('filterAlphabet');
const filterDirector = document.getElementById('filterDirector');
const filterProducer = document.getElementById('filterProducer');
const filterYear = document.getElementById('filterYear');


fetch('./data/ghibli/ghibli.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const dataStudioGhibli = data.films;
    
    const postersGhibli = (ghibliData) => {

      postersContainer.innerHTML = "";
      document.getElementById('contadorMovies').innerHTML = `<span class="letterPink">You are watching:</span> ${ghibliData.length} movies`;

      ghibliData.forEach((e) => {
        const poster= document.createElement('img');
        poster.setAttribute('src', e.poster)
        poster.setAttribute('class', 'poster')
  
        postersContainer.appendChild(poster)
  
        poster.addEventListener('click', () => {
          const video = `<video src= ${e.info[0].video} loop autoplay>`
          const parrafo = `<p class='parrafo'>${e.info[0].texto}</p>`
          const titleLogo = `<img class= 'imgTitle' src= ${e.info[0].logoTitleUrl} />`
          const button = `<button class="buttonReadMore" id="buttonReadMore"></button>`
  
          portadaVideo.innerHTML = video;
          parrafoContainer.innerHTML = parrafo;
          titleLogoContainer.innerHTML = titleLogo;
          buttonContainer.innerHTML = button;
          
          const boton = document.getElementById('buttonReadMore');
          boton.addEventListener('click', nextPage);

          const reload = document.getElementById('reloadPage');
          reload.addEventListener('click', reloadPage);


          //OCULTAR PAGINA DE POSTERS Y MOSTRAR PÁGINA DE INFORMACION DE CADA PELICULA
          function nextPage() {
            document.getElementById('sectionPage-One').style.display = 'none';
            document.getElementById('sectionPage-Two').style.display = 'grid';
            portadaVideo.innerHTML=""
          }

          //Actulizar nuestra página
          function  reloadPage() {
            location.reload();
          }

          const newPoster = `<img class= 'newImagenDescription' src= ${e.info[0].imageDescription} />`
          newImagenDescriptionContainer.innerHTML = newPoster;

          const newTitle = `<p class="newTitle">${e.title}<span class="newTitleSpan"> (${e.release_date})</span></p>`
          newTitleContainer.innerHTML = newTitle

          const newDescription = `<p class="newDescription">${e.description}</p>`
          newDescriptionContainer.innerHTML = newDescription

          const newScore = 
            `<p class="titleScore">Score</p>
            <img class='iconStar' src= ${e.info[0].iconStar}>
            <p class="numberScore">${e.rt_score}/100</p>`
          newScoreContainer.innerHTML = newScore

          const newCreators = 
              `<p><span class="letterPink">Director: </span>${e.director}</p>
              <p><span class="letterPink">Producer: </span>${e.producer}</p>`
          newCreatorsContainer.innerHTML = newCreators

          const newTitleCharacters = `<h2 class="titlePeliculas">Characters</h2>`
          newTitle1Container.innerHTML = newTitleCharacters

          const newContadorCharacters = `<p class="contadorParrafo"><span class="letterPink">You are watching:</span> ${e.people.length} personajes</p>`
          newContadorContainer.innerHTML = newContadorCharacters

          //Creación de cards de personajes
          e.people.forEach(element => {
            const card = document.createElement('article');
            card.setAttribute('class', 'cardArticle')
            card.innerHTML += 
              `<h2 class="namePersonaje">${element.name}</h2>
              <img class="cardImage" src="${element.img}" alt="Personaje de la película">
              <p class="infoPersonajes"><span class="letterPink">Gender:</span> ${element.gender}</p>
              <p class="infoPersonajes"><span class="letterPink">Age:</span> ${element.age}</p>
              <p class="infoPersonajes"><span class="letterPink">Eye Color:</span> ${element.eye_color}</p>
              <p class="infoPersonajes"><span class="letterPink">Specie:</span> ${element.specie}</p>`

            newCardsContainer.appendChild(card)
          });

          //Creación de cards de locaciones
          const newTitle2Locations = `<h2 class="titlePeliculas">Locations</h2>`
          newTitle2Container.innerHTML = newTitle2Locations
          
          if (e.locations.length === 0) {
            newCardsContainer2.innerHTML = `<p class="noInformation">There is no information :(</p>`
          } else {
            e.locations.forEach( place => {
              const card2 = document.createElement('article');
              card2.setAttribute('class', 'cardArticle')
              card2.innerHTML += 
                `<h2 class="namePersonaje">${place.name}</h2>
                <img class="cardImage" src="${place.img}" alt="Personaje de la película">
                <p class="infoPersonajes"><span class="letterPink">Climate: </span>${place.climate}</p>
                <p class="infoPersonajes"><span class="letterPink">Terrain: </span>${place.terrain}</p>
                <p class="infoPersonajes"><span class="letterPink">Surface Water: </span>${place.surface_water}</p>
                <p class="infoPersonajes"><span class="letterPink">Residents: </span>${place.residents}</p>`
   
              newCardsContainer2.appendChild(card2);    
            });
          }

          //Creación de cards de vehiculos
          const newTitle3Vehicles = `<h2 class="titlePeliculas">Vehicles</h2>`
          newTitle3Container.innerHTML = newTitle3Vehicles

          if (e.vehicles.length === 0) {
            newCardsContainer3.innerHTML = `<p class="noInformation">There is no information :(</p>`
          } else {
            e.vehicles.forEach( mobility => {
              const card3 = document.createElement('article');
              card3.setAttribute('class', 'cardArticleVehicles')
              card3.innerHTML += 
                `<h2 class="namePersonaje">${mobility.name}</h2>
                <img class="cardImageVehicle" src="${mobility.img}" alt="Personaje de la película">
                <p class="infoPersonajes descripcion">${mobility.description}</p>
                <p class="infoPersonajes"><span class="letterPink">Vehicle Class: </span>${mobility.vehicle_class}</p>
                <p class="infoPersonajes"><span class="letterPink">Length: </span>${mobility.length}</p>
                <p class="infoPersonajes"><span class="letterPink">Pilot: </span>${mobility.pilot.name}</p>`

              newCardsContainer3.appendChild(card3);
            });
          } 

        });
      })
    }; 
    postersGhibli(dataStudioGhibli);

    //FILTRADO
    //FILTRADO POR PRODUCTOR
    //(1) Inserta los  del arrayProductores en select filterProducer
    const createProducerList = (ghibliData) => {
      //(1.2)Itera y crea un opcion para darle un texto y un valor a los elementos del arrayProductores
      arrayProductores(ghibliData).forEach(function(producer) {
        const opcionProductor= document.createElement("option");
        opcionProductor.text = producer;
        opcionProductor.value = producer;
        filterProducer.add(opcionProductor);
      });
    };
    createProducerList (dataStudioGhibli);

    //(2)Agrega un evento cuando se selecciona un productor, vaciando postersContainer para agregarle postersProducerIMG
    filterProducer.addEventListener("change", () => {
      const seletedProducer = filterProducer.value
      let peliculasfiltradasProductor;

      if (seletedProducer === "all") {
        peliculasfiltradasProductor = postersGhibli(dataStudioGhibli)
      } else {
        peliculasfiltradasProductor = filterDataProducer(dataStudioGhibli, seletedProducer)
      }
      postersGhibli(peliculasfiltradasProductor);
    });
    
    //FILTRADO POR DIRECTOR
    //(1) Inserta los valores del arrayDirectores en select filterDirector
    const createDirectorList = (ghibliData) => {
    //(1.2) Itera y crea un opcion para darle un texto y un valor a los elementos del arrayDirectores
      arrayDirectores(ghibliData).forEach(function(director) {
        const opcionDirector= document.createElement("option");
        opcionDirector.text = director;
        opcionDirector.value = director;
        filterDirector.add(opcionDirector);
      });
    };
    createDirectorList(dataStudioGhibli);
    //(2)Agrega un evento cuando se selecciona un productor, vaciando postersContainer para agregarle postersDirectorIMG
    filterDirector.addEventListener("change", () => {
      //Obtiene el valor del director seleccionado
      const selectedDirector = filterDirector.value
      let peliculasfiltradasDirector;

      if(selectedDirector === "all") {
        peliculasfiltradasDirector = postersGhibli(dataStudioGhibli);
      } else {
        peliculasfiltradasDirector = filterDataDirector(dataStudioGhibli, selectedDirector);
      }
      postersGhibli(peliculasfiltradasDirector);
    });
  
    //FILTRADO POR AÑO
    const createYearList = () => {
      //(1) Añade dos opciones "Ascendente" y "Descendente" en el select filterYear
      const opcionAñoAscendente = document.createElement("option");
      opcionAñoAscendente.value = "ascendente";
      opcionAñoAscendente.textContent = "Ascendente"
      filterYear.add(opcionAñoAscendente);
  
      const opcionAñoDescendente = document.createElement("option");
      opcionAñoDescendente.value = "descendente";
      opcionAñoDescendente.textContent = "Descendente"
      filterYear.add(opcionAñoDescendente);
    };
    createYearList();
 
    //(2) Agrega un evento al elegrir una opcion del select
    filterYear.addEventListener("change", () => {
  
      //(3) Deacuerdo al valor seleccionado mostrará el array filtrado correspondiente en la seccion de posters.
      let peliculasfiltradasAño;
      if( filterYear.value === "ascendente") {
        peliculasfiltradasAño = arrayAñoAscendente(dataStudioGhibli);
      } else if(filterYear.value === "descendente") {
        peliculasfiltradasAño = arrayAñoDescendente(dataStudioGhibli);
      }
      postersGhibli(peliculasfiltradasAño);
    });

    //FILTRADO POR ALFABETO
    const createAlfabetoFilter = () => {
   
      //(1) Añade dos opciones "A-Z" y "Z-A" en el selectfilterAlfabeto
      const opcionAZ = document.createElement("option");
      opcionAZ.value = "a-z";
      opcionAZ.textContent = "A-Z"
      filterAlphabet.add(opcionAZ);
   
      const opcionZA = document.createElement("option");
      opcionZA.value = "z-a";
      opcionZA.textContent = "Z-A"
      filterAlphabet.add(opcionZA);
    };
    createAlfabetoFilter();

    //(2) Agrega un evento al elegrir una opcion del select, toma el valor seleccionado y vacia la seccion de posters
    filterAlphabet.addEventListener("change", () => {
    
      //(5) De acuerdo al valor seleccionado mostrará el array filtrado correspondiente en la seccion de posters.
      let peliculasfiltradasAlfabeto;
      if(filterAlphabet.value === "a-z") {
        peliculasfiltradasAlfabeto = arrayAlfabetoAZ(dataStudioGhibli);
      } else if(filterAlphabet.value === "z-a") {
        peliculasfiltradasAlfabeto = arrayAlfabetoZA(dataStudioGhibli);
      }
      postersGhibli(peliculasfiltradasAlfabeto);
    });   
 
    //FILTRADO POR ESPECIE
    //(2) Inserta los valores del arrayProductores en select filterProducer
    /* const createSpecieList = () => {
      const filterSpecie = document.getElementById("filterSpecie")
      //Itera y crea un opcion para darle un texto y un valor a los elementos del arrayProductores
      arrayEspecies(dataStudioGhibli).forEach(function(specie) {
        const opcionSpecie = document.createElement("option");
        opcionSpecie.text = specie;
        opcionSpecie.value = specie;
        filterSpecie.add(opcionSpecie);
      });
    };
    createSpecieList(); 

    //Agrega un evento cuando se selecciona un productor, cambiando el valor del select 
    filterSpecie.addEventListener("change", () => {
    //Obtiene el valor del productor seleccionado
      const selectedSpecie = filterSpecie.value
      let peliculasfiltradasEspecie;

      if (selectedSpecie === "all") {
        peliculasfiltradasEspecie = postersGhibli(dataStudioGhibli);
      }else {
        peliculasfiltradasEspecie = filterDataSpecie(dataStudioGhibli, selectedSpecie);
      }
      postersGhibli(peliculasfiltradasEspecie);
    })*/
  });
  