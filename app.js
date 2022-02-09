const solde = document.querySelector(".mon_solde");
const envoyer = document.querySelector(".envoyer");
const montant = document.querySelector(".montant");
const historique = document.querySelector(".container__2-transac");

/*----------FONCTION--------*/

const userNames = ['Flan Bi', 'Amani Yann', 'Mon bon petit', 'Tantie Angel', 'Samson Atta']

const soldeValue = () => {
  const x = Math.floor(Math.random() * Math.pow(10, 5));
  return x;
};

var y = soldeValue();

/*--------APPLICATION---------*/

solde.textContent = `${y} XOF`;

envoyer.addEventListener("click", () => {
  if (
    Number(montant.value) * 1 >= 1000 &&
    Number(montant.value) * 1 <= Number(y * 1) &&
    Number(y * 1) >= 1000
  ) {
    console.log("1");
    historique.insertAdjacentHTML(
      "afterbegin",
      `
          <!-- CARD -->
          <div class="card">
            <div class="card_info">
              <p class="userSend">${userNames[Math.floor(Math.random()*userNames.length)]}</p>
              <p class="time">${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}</p>
            </div>
            <div class="card_montant">
              <p>-${montant.value} XOF</p>
            </div>
          </div>
          <!-- CARD END -->
          `
    );
    y = y - montant.value * 1;
    solde.textContent = `${y} XOF`;
    montant.value = "";
  } else {
    montant.value = "";
  }
});
