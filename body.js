let elList= document.querySelector('.list');
let elSelect= document.querySelector('.filter_select');
let elcard1=document.querySelector("#card1")




elcard1.addEventListener("change" , (e)=>{
  console.log(e.target.value);
  sortArray(e.target.value)
  render(pokemons)
})





const render=(array)=>{
  elList.innerHTML=" "
  for (pokemon of array){
    let newItem= document.createElement('li');
    let newImg= document.createElement('img');
    let newHeading= document.createElement('h3');
    let newText=document.createElement('p');
    let newSpan=document.createElement('span')
    let newAge=document.createElement('span')
    let elOption= document.createElement('option');
    newItem.setAttribute('class', 'list__item');
    newImg.setAttribute('src', pokemon.img);
    newHeading.textContent= pokemon.name
    newHeading.setAttribute('class','title');
    newText.textContent=pokemon.type
    elOption.textContent= pokemon.candy
    newText.textContent=pokemon.type
    newSpan.textContent=pokemon.weight 
    newSpan.setAttribute('class', "span");
    newAge.textContent=pokemon.avg_spawns + 'Age'
    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newItem.appendChild(newSpan);
    newItem.appendChild(newAge);
    elSelect.appendChild(elOption);
    elList.appendChild(newItem);
    

    
  
  }
}

render(pokemons)
console.log(pokemons);
elSelect.addEventListener("change",(e)=>{
console.log("changed",);

 let fileteredArray=  pokemons.filter(item=>{
  return item.candy==e.target.value
})
console.log(fileteredArray);
render(fileteredArray);
})



function sortArray (e)
{
  if(e==='A-z'){
   pokemons = pokemons.sort(
      (a, b)=>{
       return a.name[0].charCodeAt() <= b.name[0].charCodeAt()? -1 : 1;
      }
    )
    
    }
    
    if(e==='z-A'){
      pokemons = pokemons.sort(
        (a, b)=>{
      return a.name[0].charCodeAt() <= b.name[0].charCodeAt()? 1 : -1;
    }
    )
    }
}console.log(sortArray);

const mapArray()
{
  
}


