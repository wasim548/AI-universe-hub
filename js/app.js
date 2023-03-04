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
      
    });
    
}

loadUniverse();
