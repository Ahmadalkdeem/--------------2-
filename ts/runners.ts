export const runners = {
  dog: {
    name: "dog",
    id: "dog",
    voice: "woof",
<<<<<<< HEAD
    img: "dog.png",
=======
    img: "dog.gif",
>>>>>>> eb999529dcb1580a480ab4b6ce494a15108760f7
    step: 50,
  },
  horse: {
    name: "horse",
    id: "horse",
    voice: "neigh",
<<<<<<< HEAD
    img: "horse.png",
=======
    img: "horse.gif",
>>>>>>> eb999529dcb1580a480ab4b6ce494a15108760f7
    step: 70,
  },
  duck: {
    name: "duck",
    id: "duck",
    voice: "quack",
<<<<<<< HEAD
    img: "duck.png",
=======
    img: "duck.gif",
>>>>>>> eb999529dcb1580a480ab4b6ce494a15108760f7
    step: 40,
  },
  chick: {
    name: "chick",
    id: "chick",
    voice: "cheap",
<<<<<<< HEAD
    img: "chick.png",
=======
    img: "chick.gif",
>>>>>>> eb999529dcb1580a480ab4b6ce494a15108760f7
    step: 30,
  },
};

//השקעה - משפר מהימנות של הטיפוסים - אם נקבל אובייקט לא תקין נקבל שגיאה
export interface AnimalType {
  name: string;
  id: string;
  voice: string;
  img: string;
  step: number;
}

export class Animal implements AnimalType {
  name: string;
  id: string;
  voice: string;
  img: string;
  step: number;
  //the user selects an animal
  isChosen: boolean;
  //for css transform (move)
  translateX: number;

  constructor(
    name: string,
    id: string,
    voice: string,
    img: string,
    step: number,
    isChosen: boolean,
    translateX: number
  ) {
    this.name = name;
    this.id = id;
    this.voice = voice;
    this.img = img;
    this.step = step;
    this.isChosen = isChosen;
    this.translateX = translateX;
  }
}

<<<<<<< HEAD
export let animalArray: Animal[] = [];
=======
export let animalArray: AnimalType[] = [];
>>>>>>> eb999529dcb1580a480ab4b6ce494a15108760f7
// תזכורת - לולאה שרצה על כל המפתחות של אובייקט
for (let k in runners) {
  let key = k as keyof typeof runners; //"dog" | "horse" | "duck" | "chick"

  let animal = runners[key];
<<<<<<< HEAD
  animalArray.push(
    new Animal(
      animal.name,
      animal.id,
      animal.voice,
      animal.img,
      animal.step,
      false,
      0
    )
  );
}
=======
  animalArray.push(animal);
}
 
>>>>>>> eb999529dcb1580a480ab4b6ce494a15108760f7
