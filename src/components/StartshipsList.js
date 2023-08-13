import {useEffect, useState} from 'react'
import StarshipsListItems from './StarshipsListItems';
function StarshipsList(){

    const [starships, setStarships]= useState(null)

    useEffect(()=>{
        console.log('insdie useEffect');
    console.log('Component Mounted');
   
    
    const fetchData= async()=>{
     try {
        const res = await fetch ("https://swapi.dev/api/starships/");
        const data= await res.json();
        console.log(data);
        setStarships(data.results) //setting the data to the user state variable

     } catch (error){
            console.log(error);
        }
    }
    fetchData()

},[]);
console.log("starships", starships);



const starshipsElements= starships ? (
    starships.map((ship)=> <StarshipsListItems ship={ship} key={ship.id}/>)

 
    ) : <h3> Loading...</h3>;



return (
<div>
<h2>
    StartwarsList
</h2>
<div className='cards'>{starshipsElements}</div>


</div>



)

}

export default StarshipsList