import CardMovie from "./CardMovie"
import notFound from '/Users/mac/Desktop/GoMyCode/Divers/We/we/src/notFound.svg';


const ListMovie =( {movies, search, rate, setMovies})=>{
    const x = movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate)
    return(
        <div className="cards">
            {/* {movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate)
            .map(el=><CardMovie el={el}/>)} */}
            

            {x.length==0 ? <div className="notFound">
                            {/* <h1 className="notFoundText">Not found</h1>  */}
                            <img src= {notFound} alt="Logo" className='imgNotFound' />
                            </div> : x.map(el=><CardMovie movies={movies} setMovies={setMovies} el={el}/>)} 
        
                            </div>
    )
}

export default ListMovie