import {arrayProductores, postersProducer, arrayDirectores, postersDirector, arrayAñoAscendente, arrayAñoDescendente, arrayAlfabetoAZ, arrayAlfabetoZA, arrayEspecies, postersEspecie} from "./data.js";

const portadaVideo = document.querySelector('.portadaVideo');
const portadaInfo = document.querySelector('.portadaInfo');
const titleLogoContainer = document.querySelector('.titleLogoContainer');
const parrafoContainer = document.querySelector('.parrafoContainer');
const postersContainer = document.querySelector('.postersContainer');
let ghibliData;

fetch('./data/ghibli/ghibli.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  ghibliData = data.films;
  postersGhibli(ghibliData);
  createProducerList(ghibliData);
  createDirectorList(ghibliData);
  createYearList(ghibliData);
  createAlfabetoFilter(ghibliData);
  createSpecieList(ghibliData);
});

const postersGhibli = (ghibliData) => {

  ghibliData.forEach((e) => {
    const poster= document.createElement('img');
    poster.setAttribute('src', e.poster)
    poster.setAttribute('class', 'poster')

    postersContainer.appendChild(poster)

        poster.addEventListener('click', () => {
            const video = `<video src= ${e.info[0].video} loop autoplay>`
            const parrafo = `<p class='parrafo'>${e.info[0].texto}</p>`
            const titleLogo = `<img class= 'imgTitle' src= ${e.info[0].logoTitleUrl} />`

            portadaVideo.innerHTML = video;
            parrafoContainer.innerHTML = parrafo;
            titleLogoContainer.innerHTML = titleLogo;

        })

  })
}

//FILTRADO
//FILTRADO POR PRODUCTOR
//(1) Inserta los  del arrayProductores en select filterProducer
const createProducerList = (ghibliData) => {
 const filterProducer = document.getElementById("filterProducer")
 
 //(1.2)Itera y crea un opcion para darle un texto y un valor a los elementos del arrayProductores
 arrayProductores(ghibliData).forEach(function(producer) {
   const opcionProductor= document.createElement("option");
   opcionProductor.text = producer;
   opcionProductor.value = producer;
   filterProducer.add(opcionProductor);
  });

 //(2)Agrega un evento cuando se selecciona un productor, vaciando postersContainer para agregarle postersProducerIMG
 filterProducer.addEventListener("change", function(event) {
   //Obtiene el valor del productor seleccionado
   let selectProductor = event.target.value;
   postersContainer.innerHTML = "";

   postersProducer(ghibliData, selectProductor).forEach((e) =>{
     const postersProducerIMG = document.createElement("img")
     postersProducerIMG.setAttribute("src", e)
     postersProducerIMG.setAttribute("class", "poster")

     postersContainer.append(postersProducerIMG)
    });
  });
};

//FILTRADO POR DIRECTOR
//(1) Inserta los valores del arrayDirectores en select filterDirector
const createDirectorList = (ghibliData) => {
 const filterDirector = document.getElementById("filterDirector")
 
 //(1.2) Itera y crea un opcion para darle un texto y un valor a los elementos del arrayDirectores
 arrayDirectores(ghibliData).forEach(function(director) {
   const opcionDirector= document.createElement("option");
   opcionDirector.text = director;
   opcionDirector.value = director;
   filterDirector.add(opcionDirector);
  });

 //(2)Agrega un evento cuando se selecciona un productor, vaciando postersContainer para agregarle postersDirectorIMG
 filterDirector.addEventListener("change", function(event) {
  //Obtiene el valor del productor seleccionado
   let selectDirector = event.target.value;
   postersContainer.innerHTML = "";
  
   postersDirector(ghibliData, selectDirector).forEach((e) =>{
     const postersDirectorIMG = document.createElement("img")
     postersDirectorIMG.setAttribute("src", e)
     postersDirectorIMG.setAttribute("class", "poster")
      
     postersContainer.append(postersDirectorIMG)
    });
  });
};

//FILTRADO POR AÑO
const createYearList = (ghibliData) => {
 const filterYear = document.getElementById("filterYear");
 //(1) Añade dos opciones "Ascendente" y "Descendente" en el select filterYear
 const opcionAñoAscendente = document.createElement("option");
   opcionAñoAscendente.value = "ascendente";
   opcionAñoAscendente.textContent = "Ascendente"
   filterYear.add(opcionAñoAscendente);
 
  const opcionAñoDescendente = document.createElement("option");
   opcionAñoDescendente.value = "descendente";
   opcionAñoDescendente.textContent = "Descendente"
   filterYear.add(opcionAñoDescendente);

 //(2) Agrega un evento al elegrir una opcion del select
 filterYear.addEventListener("change", function(event) {
   const selectAño = event.target.value;
   postersContainer.innerHTML = "";

   arrayAñoDescendente(ghibliData, selectAño).forEach((e) =>{
     const postersAscendentesIMG = document.createElement("img")
     postersAscendentesIMG.setAttribute("src", e.poster)
     postersAscendentesIMG.setAttribute("class", "poster")
    });

   arrayAñoAscendente(ghibliData, selectAño).forEach((e) =>{
     const postersDescendentesIMG = document.createElement("img")
     postersDescendentesIMG.setAttribute("src", e.poster)
     postersDescendentesIMG.setAttribute("class", "poster")
    });

   //(3) Deacuerdo al valor seleccionado mostrará el array filtrado correspondiente en la seccion de posters.
   let peliculasfiltradasAño;
   if( selectAño === "ascendente") {
     peliculasfiltradasAño = arrayAñoAscendente(ghibliData);
    } else if(selectAño === "descendente") {
       peliculasfiltradasAño = arrayAñoDescendente(ghibliData);
      }

    postersGhibli(peliculasfiltradasAño);
  });
};

//FILTRADO POR ALFABETO
const createAlfabetoFilter = (ghibliData) => {
  const selectfilterAlfabeto = document.getElementById("selectfilterAlfabeto");

  //(1) Añade dos opciones "A-Z" y "Z-A" en el selectfilterAlfabeto
  const opcionAZ = document.createElement("option");
  opcionAZ.value = "a-z";
  opcionAZ.textContent = "A-Z"
  selectfilterAlfabeto.add(opcionAZ);
  
  const opcionZA = document.createElement("option");
  opcionZA.value = "z-a";
  opcionZA.textContent = "Z-A"
  selectfilterAlfabeto.add(opcionZA);
     
  //(2) Agrega un evento al elegrir una opcion del select, toma el valor seleccionado y vacia la seccion de posters
  selectfilterAlfabeto.addEventListener("change", function(event) {
   const alfabetoElegido = event.target.value;
   postersContainer.innerHTML = "";

   //(4) Combierte el link de poster en imagenes 
   arrayAlfabetoAZ(ghibliData, alfabetoElegido).forEach((e) =>{
     const postersAZIMG = document.createElement("img");
     postersAZIMG.setAttribute("src", e.poster);
    postersAZIMG.setAttribute("class", "poster");
    });
  
   arrayAlfabetoZA(ghibliData, alfabetoElegido).forEach((e) =>{
    const postersZAIMG = document.createElement("img");
     postersZAIMG.setAttribute("src", e.poster);
     postersZAIMG.setAttribute("class", "poster");
    });
    
   //(5) De acuerdo al valor seleccionado mostrará el array filtrado correspondiente en la seccion de posters.
   let peliculasfiltradasAlfabeto;
     if(alfabetoElegido === "a-z") {
      peliculasfiltradasAlfabeto = arrayAlfabetoAZ(ghibliData);
     } else if(alfabetoElegido === "z-a") {
      peliculasfiltradasAlfabeto = arrayAlfabetoZA(ghibliData);
    };
    postersGhibli(peliculasfiltradasAlfabeto);
  });   
};

//FILTRADO POR ESPECIE
//(2) Inserta los valores del arrayProductores en select filterProducer
const createSpecieList = (ghibliData) => {
  const filterSpecie = document.getElementById("filterSpecie")
 //Itera y crea un opcion para darle un texto y un valor a los elementos del arrayProductores
 arrayEspecies(ghibliData).forEach(function(specie) {
    const opcionSpecie = document.createElement("option");
    opcionSpecie.text = specie;
    opcionSpecie.value = specie;
    filterSpecie.add(opcionSpecie);
  });
 
 //Agrega un evento cuando se selecciona un productor, cambiando el valor del select 
 filterSpecie.addEventListener("change", function(event) {
   //Obtiene el valor del productor seleccionado
   let selectSpecie = event.target.value;
   postersContainer.innerHTML = "";
   
   postersEspecie(ghibliData, selectSpecie).forEach((e) =>{
     const postersSpecieIMG = document.createElement("img")
     postersSpecieIMG.setAttribute("src", e)
     postersSpecieIMG.setAttribute("class", "poster")
 
     postersContainer.append(postersSpecieIMG)
    });
  });
 };