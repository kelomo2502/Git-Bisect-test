const sportsList = ['football', 'basketball', 'golf', 'cricket']
const sportsContainer = document.querySelector('.sports');

for (let i = 0; i < sportsList.length; i++) {
  const sportsLi = document.createElement('li');
  sportsLi.innerText = sportsList[i];
  sportsContainer.appendChild(sportsLi);
}

