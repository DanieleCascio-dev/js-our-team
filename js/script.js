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

//print in html
const rowElem = document.querySelector(".row");
console.log(rowElem);

let ourTeamPrint = "";

for (let i = 0; i < ourTeam.length; i++) {
  const person = ourTeam[i];
  ourTeamPrint += `<div class="card col-3 p-0">
  <img src="img/${person.photo}" class="img-top" alt="..." />
  <div class="card-body text-center">
    <p class="name">${person.name}</p>
    <p class="role">${person.role}</p>
  </div>
</div>`;
}

rowElem.innerHTML = ourTeamPrint;

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
