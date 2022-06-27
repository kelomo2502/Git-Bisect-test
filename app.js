const sportsList = ['football', 'basketball', 'golf', 'cricket']
const sportsContainer = document.querySelector('.sports');

for (let i = 0; i < sportsList.length; i++) {
  const sportsLi = document.createElement('li');
  sportsLi.innerText = sportsList[i];
  sportsLi.setAttribute('class', 'sports-li')
  sportsContainer.appendChild(sportsLi);
}

sportsContainer.addEventListener('click', function (e) {
  console.log(e.target.getAttribute('class') + ' is clicked');
  const target = target;
  target.style.backgroundColor = 'lightgrey';
})

