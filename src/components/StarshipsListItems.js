function StarshipsListItems(props){
const ship=props.ship;


return(
    <div key={ship.id} className='starships'>
    <h2>Name: {ship.name} </h2>
    <h3>Model: {ship.model}</h3>
    <h3>crew: {ship.crew}</h3>

    </div>
)
}
export default StarshipsListItems