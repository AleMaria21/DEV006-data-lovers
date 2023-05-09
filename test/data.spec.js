import {arrayProductores, postersProducer, arrayDirectores, postersDirector, arrayAñoAscendente, arrayAñoDescendente, arrayAlfabetoAZ, arrayAlfabetoZA, arrayEspecies, postersEspecie } from '../src/data.js';
const ghibliData = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {"specie": "Human"},
    ]
  },   
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg",
    "release_date": "1988",
    "rt_score": "97",
    "people": [
      {"specie": "Human"},
    ]
  },
  {
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg",
    "release_date": "2002",
    "rt_score": "89",
    "people": [
      {"specie": "Cat"},
    ]
  },
  {
    "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    "title": "The Secret World of Arrietty",
    "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    "director": "Hiromasa Yonebayashi",
    "producer": "Toshio Suzuki",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg",
    "release_date": "2010",
    "rt_score": "95",
    "people": [
      {"specie": "Borrower"},
    ]
  },
  { "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
    "director": "Hiromasa Yonebayashi",
    "producer": "Yoshiaki Nishimura",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",
    "release_date": "2014",
    "rt_score": "92",
    "people": [
      {"specie": "Human"},
    ]
  }
]

const productoresSINrepetir = ["Isao Takahata", "Toshio Suzuki", "Yoshiaki Nishimura", "Toru Hara"]
describe('arrayProductores', () => {
  it('Devuelve una lista con los nombres de productores sin repetir', () => {
    expect(arrayProductores(ghibliData)).toEqual(expect.arrayContaining(productoresSINrepetir));
  });
});

describe('postersProducer', () => {
  it('Devuelve una lista de posters para el productor "Isao Takahata"', () => {
     expect(postersProducer(ghibliData, "Isao Takahata")).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg"]));
    });
   
  it('Devuelve una lista de posters para el productor "Toshio Suzuki"', () => {
     expect(postersProducer(ghibliData, "Toshio Suzuki")).toEqual(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg"]);
    });

  it('Devuelve una lista de posters para el productor "Yoshiaki Nishimura"', () => {
      expect(postersProducer(ghibliData, "Yoshiaki Nishimura")).toStrictEqual(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",]);
    });

  it('Devuelve una lista de posters para el productor "Toru Hara"', () => {
      const posters = postersProducer(ghibliData, "Toru Hara");
      expect(posters).toEqual(expect.arrayContaining([ "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg"]));
    });
  });

const directoresSINrepetir = ["Hayao Miyazaki", "Isao Takahata", "Hiroyuki Morita", "Hiromasa Yonebayashi" ]
describe('arrayDirectores', () => {
  it('Devuelve una lista con los nombres de directores sin repetir', () => {
    expect(arrayDirectores(ghibliData)).toEqual(expect.arrayContaining(directoresSINrepetir));
  });
});

describe('postersDirector', () => {
  it('Devuelve una lista de posters para el director "Hayao Miyazaki"', () => {
     const posters = postersDirector(ghibliData, "Hayao Miyazaki");
     expect(posters).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg"]));
    });

   it('Devuelve una lista de posters para el director "Isao Takahata"', () => {
     const posters = postersDirector(ghibliData, "Isao Takahata");
     expect(posters).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg"]));
    });
   
   it('Devuelve una lista de posters para el director "Hiroyuki Morita"', () => {
     const posters = postersDirector(ghibliData, "Hiroyuki Morita");
     expect(posters).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg"]));
    });

    it('Devuelve una lista de posters para el productor "Hiromasa Yonebayashi"', () => {
      const posters = postersDirector(ghibliData, "Hiromasa Yonebayashi");
      expect(posters).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg"]));
    });  
  });

const arrayAscendenteAño = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg",
  "release_date": "1986",
  "rt_score": "95",
  "people": [
    {"specie": "Human"},
  ]
},   
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
  "director": "Isao Takahata",
  "producer": "Toru Hara",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg",
  "release_date": "1988",
  "rt_score": "97",
  "people": [
    {"specie": "Human"},
  ]
},
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
  "director": "Hiroyuki Morita",
  "producer": "Toshio Suzuki",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg",
  "release_date": "2002",
  "rt_score": "89",
  "people": [
    {"specie": "Cat"},
  ]
},
{
  "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
  "title": "The Secret World of Arrietty",
  "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
  "director": "Hiromasa Yonebayashi",
  "producer": "Toshio Suzuki",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg",
  "release_date": "2010",
  "rt_score": "95",
  "people": [
    {"specie": "Borrower"},
  ]
},
{ "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
  "title": "When Marnie Was There",
  "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
  "director": "Hiromasa Yonebayashi",
  "producer": "Yoshiaki Nishimura",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",
  "release_date": "2014",
  "rt_score": "92",
  "people": [
    {"specie": "Human"},
  ]
}]  
describe('arrayAñoAscendente', () => {
  it('Reorganiza ascendentemente por año la data', () => {
    expect(arrayAñoAscendente(ghibliData)).toEqual(expect.arrayContaining(arrayAscendenteAño));
  });
}); 

const arrayDescendenteAño = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg",
  "release_date": "1986",
  "rt_score": "95",
  "people": [
    {"specie": "Human"},
  ]
}, 
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg",
    "release_date": "1988",
    "rt_score": "97",
    "people": [
      {"specie": "Human"},
    ]
  },
  {
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg",
    "release_date": "2002",
    "rt_score": "89",
    "people": [
      {"specie": "Cat"},
    ]
  },
  {
    "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    "title": "The Secret World of Arrietty",
    "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    "director": "Hiromasa Yonebayashi",
    "producer": "Toshio Suzuki",
    "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg",
    "release_date": "2010",
    "rt_score": "95",
    "people": [
      {"specie": "Borrower"},
    ]
  },
  { "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
  "title": "When Marnie Was There",
  "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
  "director": "Hiromasa Yonebayashi",
  "producer": "Yoshiaki Nishimura",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",
  "release_date": "2014",
  "rt_score": "92",
  "people": [
    {"specie": "Human"},
  ]
}]
describe('arrayAñoDescendente', () => {
  it('Reorganiza descendentemente por año la data', () => {
    expect(arrayAñoDescendente(ghibliData)).toEqual(expect.arrayContaining(arrayDescendenteAño));
  });
});

const arrayAZ = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg",
  "release_date": "1986",
  "rt_score": "95",
  "people": [
    {"specie": "Human"},
  ]
},  
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
  "director": "Isao Takahata",
  "producer": "Toru Hara",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg",
  "release_date": "1988",
  "rt_score": "97",
  "people": [
    {"specie": "Human"},
  ]
}, 
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
  "director": "Hiroyuki Morita",
  "producer": "Toshio Suzuki",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg",
  "release_date": "2002",
  "rt_score": "89",
  "people": [
    {"specie": "Cat"},
  ]
},
{
  "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
  "title": "The Secret World of Arrietty",
  "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
  "director": "Hiromasa Yonebayashi",
  "producer": "Toshio Suzuki",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg",
  "release_date": "2010",
  "rt_score": "95",
  "people": [
    {"specie": "Borrower"},
  ]
},
{ "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
  "title": "When Marnie Was There",
  "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
  "director": "Hiromasa Yonebayashi",
  "producer": "Yoshiaki Nishimura",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",
  "release_date": "2014",
  "rt_score": "92",
  "people": [
    {"specie": "Human"},
  ]
}
]
describe('arrayAlfabetoAZ', () => {
  it('Reorganiza ascendentemente por titulo la data', () => {
    expect(arrayAlfabetoAZ(ghibliData)).toEqual(expect.arrayContaining(arrayAZ));
  });
});

const arrayZA =[{
"id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
"title": "When Marnie Was There",
"description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
"director": "Hiromasa Yonebayashi",
"producer": "Yoshiaki Nishimura",
"poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",
"release_date": "2014",
"rt_score": "92",
"people": [
  {"specie": "Human"},
]
},
{ "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
  "title": "When Marnie Was There",
  "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
  "director": "Hiromasa Yonebayashi",
  "producer": "Yoshiaki Nishimura",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg",
  "release_date": "2014",
  "rt_score": "92",
  "people": [
    {"specie": "Human"},
  ]
},
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
  "director": "Hiroyuki Morita",
  "producer": "Toshio Suzuki",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg",
  "release_date": "2002",
  "rt_score": "89",
  "people": [
    {"specie": "Cat"},
  ]
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
  "director": "Isao Takahata",
  "producer": "Toru Hara",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg",
  "release_date": "1988",
  "rt_score": "97",
  "people": [
    {"specie": "Human"},
  ]
}, 
{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg",
  "release_date": "1986",
  "rt_score": "95",
  "people": [
    {"specie": "Human"},
  ]
}
]
describe('arrayAlfabetoZA', () => {
  it('Reorganiza descendentemente por titulo la data', () => {
    expect(arrayAlfabetoZA(ghibliData)).toEqual(expect.arrayContaining(arrayZA));
  });
});

const especiesSINrepetir = ["Human", "Cat", "Borrower"]
describe('arrayEspecies', () => {
  it('Devulve un array con las especies de los personajes sin repetir', () => {
    expect(arrayEspecies(ghibliData)).toEqual(expect.arrayContaining(especiesSINrepetir));
  });
});

describe('postersEspecie', () => {
  it('Devuelve una lista de posters para la especie "Human"', () => {
    expect(postersEspecie(ghibliData, "Human")).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oW0odRjcBvZfCXvQmT0WQOcyn5o.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j7C9HpfZiIHFupkI55nuSK8qP8x.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g4ivNFOxP3NYgfPhUvaibykhL2.jpg"]));
  });

  it('Devuelve una lista de posters para la especie "Cat"', () => {
    expect(postersEspecie(ghibliData, "Cat")).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqyY7IEWkCWNZ7EuRStQaJITEta.jpg"]));
 });  

  it('Devuelve una lista de posters para la especie "Borrower"', () => {
    expect(postersEspecie(ghibliData, "Borrower")).toEqual(expect.arrayContaining(["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yhckbMafXsuODqTBxIYWJpEULz.jpg"]));
});   
});

