const gamearea = document.querySelector('#gamearea')

for (let i = 0; i < 12; i++) {
  const szamdoboz = document.createElement('div')
  let x = Math.floor(Math.random() * 12) + 1
  szamdoboz.innerHTML = x
  gamearea.appendChild(szamdoboz)
  szamdoboz.addEventListener('click', () => {
    szamdoboz.classList.add("rejtett")
  })
}


