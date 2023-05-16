import {arrayProductores, filterDataProducer, arrayDirectores, filterDataDirector, arrayAñoAscendente, arrayAñoDescendente, arrayAlfabetoAZ, arrayAlfabetoZA} from '../src/data.js';
const ghibliData = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
    "people": [{"specie": "Human"}]
  },   
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "rt_score": "97",
    "people": [{"specie": "Human"}]
  },
  {
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "release_date": "2002",
    "rt_score": "89",
    "people": [{"specie": "Cat"}]
  },
  { 
    "title": "When Marnie Was There",
    "director": "Hiromasa Yonebayashi",
    "producer": "Yoshiaki Nishimura",
    "release_date": "2014",
    "rt_score": "92",
    "people": [{"specie": "Human"}]
  }
]

//test para filtrdo por productor
const productoresSINrepetir = ["Isao Takahata", "Toru Hara", "Toshio Suzuki", "Yoshiaki Nishimura"]
describe('arrayProductores', () => {
  it('Devuelve una lista con los nombres de productores sin repetir', () => {
    expect(arrayProductores(ghibliData)).toEqual(expect.arrayContaining(productoresSINrepetir));
  });
});

describe('filterDataProducer', () => {
  it('Devuelve una lista de películas para el productor "Isao Takahata"', () => {
    expect(filterDataProducer(ghibliData, "Isao Takahata")).toEqual([
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
        "people": [{"specie": "Human"}]  
      }])
  });     
   
  it('Devuelve una lista de películas para el productor "Toshio Suzuki"', () => {
    expect(filterDataProducer(ghibliData, "Toshio Suzuki")).toEqual([{
      "title": "The Cat Returns",
      "director": "Hiroyuki Morita",
      "producer": "Toshio Suzuki",
      "release_date": "2002",
      "rt_score": "89",
      "people": [{"specie": "Cat"}]
    }])
  });

  it('Devuelve una lista de posters para el productor "Yoshiaki Nishimura"', () => {
    expect(filterDataProducer(ghibliData, "Yoshiaki Nishimura")).toEqual([{
      "title": "When Marnie Was There",
      "director": "Hiromasa Yonebayashi",
      "producer": "Yoshiaki Nishimura",
      "release_date": "2014",
      "rt_score": "92",
      "people": [{"specie": "Human"}]  
    }])
  });

  it('Devuelve una lista de posters para el productor "Toru Hara"', () => {
    const posters = filterDataProducer(ghibliData, "Toru Hara");
    expect(posters).toEqual([{
      "title": "Grave of the Fireflies",
      "director": "Isao Takahata",
      "producer": "Toru Hara",
      "release_date": "1988",
      "rt_score": "97",
      "people": [{"specie": "Human"}]
    }]);
  });
});


//Test filtrado por director
const directoresSINrepetir = ["Hayao Miyazaki", "Isao Takahata", "Hiroyuki Morita", "Hiromasa Yonebayashi" ]
describe('arrayDirectores', () => {
  it('Devuelve una lista con los nombres de directores sin repetir', () => {
    expect(arrayDirectores(ghibliData)).toEqual(expect.arrayContaining(directoresSINrepetir));
  });
});

describe('filterDataDirector', () => {
  it('Devuelve una lista de posters para el director "Hayao Miyazaki"', () => {
    const posters = filterDataDirector(ghibliData, "Hayao Miyazaki");
    expect(posters).toEqual([
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
        "people": [{"specie": "Human"}]
      }])
  });

  it('Devuelve una lista de posters para el director "Isao Takahata"', () => {
    const posters = filterDataDirector(ghibliData, "Isao Takahata");
    expect(posters).toEqual([
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
        "release_date": "1988",
        "rt_score": "97",
        "people": [{"specie": "Human"}] 
      }]);
  });
   
  it('Devuelve una lista de posters para el director "Hiroyuki Morita"', () => {
    const posters = filterDataDirector(ghibliData, "Hiroyuki Morita");
    expect(posters).toEqual([
      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "producer": "Toshio Suzuki",
        "release_date": "2002",
        "rt_score": "89",
        "people": [{"specie": "Cat"}]  
      }]);
  });

  it('Devuelve una lista de posters para el productor "Hiromasa Yonebayashi"', () => {
    const posters = filterDataDirector(ghibliData, "Hiromasa Yonebayashi");
    expect(posters).toEqual([
      {
        "title": "When Marnie Was There",
        "director": "Hiromasa Yonebayashi",
        "producer": "Yoshiaki Nishimura",
        "release_date": "2014",
        "rt_score": "92",
        "people": [{"specie": "Human"}]
      }]);
  });  
});


//Test filtrado por año
describe('arrayAñoAscendente', () => {
  it('Reorganiza ascendentemente por año la data', () => {
    expect(typeof arrayAñoAscendente).toBe("function");
  });
  it("Debería retornar las peliculas en orden ascendente por año", () => {
    const dataAscendente = arrayAñoAscendente(ghibliData);
    expect(dataAscendente[0].release_date).toEqual('2014');
    expect(dataAscendente[1].release_date).toEqual('2002');
    expect(dataAscendente[2].release_date).toEqual('1988');
    expect(dataAscendente[3].release_date).toEqual('1986');
  });
}); 

describe('arrayAñoDescendente', () => {
  it('Reorganiza descendentemente por año la data', () => {
    expect(typeof arrayAñoDescendente).toBe("function");
  });
  it("Debería retornar las peliculas en orden descendente por año", () => {
    const dataDescendente = arrayAñoDescendente(ghibliData);
    expect(dataDescendente[3].release_date).toEqual('2014');
    expect(dataDescendente[2].release_date).toEqual('2002');
    expect(dataDescendente[1].release_date).toEqual("1988");
    expect(dataDescendente[0].release_date).toEqual('1986');
  });
}); 


//Test filtrado por alfabeto
describe('arrayAlfabetoAZ', () => {
  it('Reorganiza ascendentemente por titulo la data', () => {
    expect(typeof arrayAlfabetoAZ).toBe("function");
  });
  it("Debería retornar las peliculas en orden ascendente por alfabeto", () => {
    const dataAscendente = arrayAlfabetoAZ(ghibliData);
    expect(dataAscendente[0].title).toEqual('Castle in the Sky');
    expect(dataAscendente[1].title).toEqual("Grave of the Fireflies");
    expect(dataAscendente[2].title).toEqual("The Cat Returns");
    expect(dataAscendente[3].title).toEqual("When Marnie Was There");
  });
});  

describe('arrayAlfabetoZA', () => {
  it('Reorganiza descendentemente por año la data', () => {
    expect(typeof arrayAlfabetoZA). toBe("function");
  });
  it("Debería retornar las peliculas en orden descendente por alfabeto", () => {
    const dataDescendente = arrayAlfabetoZA(ghibliData);
    expect(dataDescendente[3].title).toEqual('Castle in the Sky');
    expect(dataDescendente[2].title).toEqual("Grave of the Fireflies");
    expect(dataDescendente[1].title).toEqual("The Cat Returns");
    expect(dataDescendente[0].title).toEqual("When Marnie Was There");
  });
}); 


/*const especiesSINrepetir = ["Human", "Cat"]
describe('arrayEspecies', () => {
  it('Devulve un array con las especies de los personajes sin repetir', () => {
    expect(arrayEspecies(ghibliData)).toEqual(expect.arrayContaining(especiesSINrepetir));
  });
});

describe('filterDataSpecie', () => {
  it('Devuelve una lista de posters para la especie "Human"', () => {
    expect(filterDataSpecie(ghibliData, "Human")).toEqual(expect.arrayContaining([
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
        "people": [{"specie": "Human"}]
      },  
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
        "release_date": "1988",
        "rt_score": "97",
        "people": [{"specie": "Human"}]
      },
      { 
        "title": "When Marnie Was There",
        "director": "Hiromasa Yonebayashi",
        "producer": "Yoshiaki Nishimura",
        "release_date": "2014",
        "rt_score": "92",
        "people": [{"specie": "Human"}]
      }
    ]));
  });

  it('Devuelve una lista de posters para la especie "Cat"', () => {
    expect(filterDataSpecie(ghibliData, "Cat")).toEqual(expect.arrayContaining([
      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "producer": "Toshio Suzuki",
        "release_date": "2002",
        "rt_score": "89",
        "people": [{"specie": "Cat"}]
      }
    ]));
  });  

}); */

