const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  }
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  const listKeys = (obj) => Object.keys(obj);
  console.log(listKeys(lesson1));

  const sizeObj = (obj) => Object.keys(obj).length;
  console.log(sizeObj(lesson1));