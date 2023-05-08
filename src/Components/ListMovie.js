import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie";
import notFound from '/Users/mac/Desktop/GoMyCode/Divers/We/we/src/notFound.svg';


const ListMovie =( {movies, search, rate, setMovies, setSearch, setRate})=>{
    const x = movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate)
    return(
        <div>
        <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate}/>
        <div className="cards">
            {/* {movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate)
            .map(el=><CardMovie el={el}/>)} */}
            

            {x.length===0 ? <div className="notFound">
                            {/* <h1 className="notFoundText">Not found</h1>  */}
                            <img src= {notFound} alt="not found" className='imgNotFound' />
                            </div> : x.map(el=><CardMovie movies={movies} setMovies={setMovies} el={el}/>)} 
        
                            </div>
                            </div>)
}

export default ListMovie