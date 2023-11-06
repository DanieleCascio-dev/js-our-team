//Create 6 object

const wayne = newObject(
  "Wayne Barnett",
  "Founder & CEO",
  "wayne-barnett-founder-ceo.jpg"
);
console.log(wayne);

const angela = newObject(
  "Angela Caroll",
  "Chief Editor",
  "angela-caroll-chief-editor.jpg"
);
console.log(angela);

const walter = newObject(
  "Walter Gordon",
  "Office Manager",
  "walter-gordon-office-manager.jpg"
);
console.log(walter);

const lopez = newObject(
  "Angela Lopez",
  "ocial Media Manager",
  "angela-lopez-social-media-manager.jpg"
);
console.log(lopez);

const scott = newObject(
  "Scott Estrada",
  "Developer",
  "scott-estrada-developer.jpg"
);
console.log(scott);

const barbara = newObject(
  "Barbara Ramos",
  "Graphic Designer",
  "barbara-ramos-graphic-designer.jpg"
);
console.log(barbara);

//Create array with object

const ourTeam = [wayne, angela, walter, lopez, scott, barbara];
console.log(ourTeam);

/* ********************************** */
/* FUNCTION */

//Create an object with 3 keywords
function newObject(newName, newRole, newPhoto) {
  const newObject = {
    name: newName,
    role: newRole,
    photo: newPhoto,
  };
  return newObject;
}
