// data loaded
const loadUniverse = async(dataLimit) =>{
    toggleSpinner(true);
    
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    
    const res = await fetch(url);
    const data = await res.json();
     displayUniverse(data.data.tools,dataLimit);
     
}
// display universe
const displayUniverse = (universes,dataLimit) => {
    // data array
    //console.log(universes)
    const universesContainer = document.getElementById('universes-container');
    const showAll = document.getElementById('show-all');
    if( dataLimit && universes.length > 6){
        universes = universes.slice(0,6);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    universes.forEach(universe => {
        // single data 

      // console.log(universe);
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
       }</span><button onclick = "loaduniverseDetails('${universe.id}')" type="button" class="btn-outline-danger ms-5 ps-5" data-bs-toggle="modal" data-bs-target="#universeModal"><img src="icon/arrow-right.svg">
       </button>
       </div>
       </div>`;
       universesContainer.appendChild(universeDiv);
      
    });
    toggleSpinner(false);
}
// spinner loader 
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

const processSearch = (dataLimit) =>{
    
    
    
    loadUniverse(dataLimit);
}
// show all btn 
document.getElementById('btn-show-all').addEventListener('click',function(){
    processSearch();
})
// details 

const loaduniverseDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayUniverseDetails(data.data);
}

const displayUniverseDetails = universeDetails => {
    console.log(universeDetails)
    const modalTittle = document.getElementById("staticBackdropLabel");
    modalTittle.innerText = universeDetails.tool_name;
    const cardImage = document.getElementById('img2');
    cardImage.innerHTML = `<div class="card p-4">
       <img src="${universeDetails.image_link[0]
       }"></div>`;
        
       const cardTittle = document.getElementById('card1');
       cardTittle.innerHTML =`<div><h5> ${universeDetails.tool_name} </h5>
       
       <p>${universeDetails.description}</p></div>`;
       const cardBtn = document.getElementById("button1");
       cardBtn.innerHTML = `<button>Basic:${ universeDetails.pricing[0].price  }</button>
       <button>Pro:${ universeDetails.pricing[1].price }</button>
       <button>Enterprise:${ universeDetails.pricing[2].price }</button>

       `;
       const card2 = document.getElementById("card2");
       card2.innerHTML = `<div>
       <h5>Hey ${universeDetails.tool_name } , how are you feeling today?</h5>
       <p></p>
       </div>`
       



  
    
}




loadUniverse();
