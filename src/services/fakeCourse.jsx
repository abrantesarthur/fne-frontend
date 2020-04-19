const courses = [
  {
    _id: 1,
    title: "Faculdade nos EUA",
    modules: [
      {
        _id: "1573251",
        title: "Introdução",
        classes: [
          {
            _id: "175912",
            title: "Parabenização e metodologia",
            length: 68,
            completed: true,
            selected: true,
          },
          {
            _id: "275912",
            title: "Minha trajetória",
            length: 56,
            completed: true,
            selected: false,
          },
          {
            _id: "375912",
            title: "Diferenças entre EUA e Brasil",
            length: 49,
            completed: true,
            selected: false,
          },
        ],
      },
      {
        _id: "1643251",
        title: "Notas Escolares",
        classes: [
          {
            _id: "475912",
            title: "A importância das notas escolares.",
            length: 54,
            completed: true,
            selected: false,
          },
          {
            _id: "575952",
            title: "School profile",
            length: 68,
            completed: true,
            selected: false,
          },
          {
            _id: "575962",
            title: "Quais notas tirar na escola",
            length: 90,
            completed: false,
            selected: false,
          },
        ],
      },
      {
        _id: "1273251",
        title: "Provas",
        classes: [
          {
            _id: "575912",
            title: "A importância das provas",
            length: 87,
            completed: false,
            selected: false,
          },
          {
            _id: "235912",
            title: "Quais provas tem que fazer",
            length: 129,
            completed: false,
            selected: false,
          },
          {
            _id: "572112",
            title: "SAT Reasoning: Como Funciona",
            length: 688,
            completed: false,
            selected: false,
          },
          {
            _id: "5723412",
            title: "SAT Reasoning: Quais Notas Tirar",
            length: 548,
            completed: false,
            selected: false,
          },
          {
            _id: "5723422",
            title: "SAT Reasoning: Como se registrar e onde fazer",
            length: 5448,
            completed: false,
            selected: false,
          },
          {
            _id: "51233412",
            title: "SAT Reasoning: Como se preparar",
            length: 448,
            completed: false,
            selected: false,
          },
        ],
      },
    ],
  },
];

export function getCourses() {
  return courses;
}

export function getCourse(id) {
  return courses.find((c) => c._id === id);
}

//   export function saveMovie(movie) {
//     let movieInDb = movies.find(m => m._id === movie._id) || {};
//     movieInDb.name = movie.name;
//     movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//     movieInDb.numberInStock = movie.numberInStock;
//     movieInDb.dailyRentalRate = movie.dailyRentalRate;

//     if (!movieInDb._id) {
//       movieInDb._id = Date.now();
//       movies.push(movieInDb);
//     }

//     return movieInDb;
//   }

//   export function deleteMovie(id) {
//     let movieInDb = movies.find(m => m._id === id);
//     movies.splice(movies.indexOf(movieInDb), 1);
//     return movieInDb;
//   }
