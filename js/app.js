// data loaded
const loadUniverse = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
     displayUniverse(data.data.tools);
}


loadUniverse();
