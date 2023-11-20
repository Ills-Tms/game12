const gamearea=document.querySelector("#gamearea")

for(let i=0;i<12;i++)
{
    const szamdoboz=document.createElement("div")
    szamdoboz.innerHTML="A"
    gamearea.appendChild(szamdoboz)
}