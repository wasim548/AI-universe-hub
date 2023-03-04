// data loaded
const loadUniverse = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
     displayUniverse(data.data.tools);
}
// display universe
const displayUniverse = universes => {
    // data array
    console.log(universes)
    const universesContainer = document.getElementById('universes-container');
    universes.forEach(universe => {
        // single data 

       console.log(universe);
       const universeDiv = document.createElement('div');
    //    make div & put data
       universeDiv.classList.add('col');
       universeDiv.innerHTML = `<div class="card p-4">
       <img src="${universe.image}" class="card-img-top" alt="...">
       <div class="card-body">
       <h5>Fetures</h5>
       <span>${"1. " + universe.features[0]}</span><br>
       <span>${"2. " + universe.features[1]}</span><br>
       <p>${"3 " + universe.features[2]}</p>
       <h5 class="card-title">${universe.name
       }</h5>
       <span class="card-text"><img src="icon/calendar-minus.svg"></span><span class = " me-5 pe-5"> ${universe.published_in
       }</span><button type="button" class="btn btn-outline-danger ms-5 ps-5"><img src="icon/arrow-right.svg"></button>
       </div>
       </div>`;
       universesContainer.appendChild(universeDiv);
      
    });
    
}

loadUniverse();
