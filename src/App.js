
 

import { useState } from 'react';
import './App.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovie';
import FilterMovie from './Components/FilterMovie';
import Logo from '/Users/mac/Desktop/GoMyCode/Divers/We/we/src/Logo.svg';

function App() {
  

  const [movies,setMovies] = useState([
    {title:'The Alliance', description:'It’s been twenty years since four drug dealers have formed a peaceful pact, but after one member takes revenge on another, all hell breaks loose.',posterUrl:'https://canvas.tubitv.com/b3f4e250-fb2e-43be-9751-d25df6b46d52/R6-Ced?w=408&h=583', rating: 5, id : Math.random()},
    {title:'Dope Girls', description:'Fresh out of jail, Dee has one thing on her mind: taking over the streets. She hatches a plan to run the most powerful drug organization in the city.',posterUrl:'https://canvas.tubitv.com/a0eb1a96-8867-4266-85c6-6e87ba02a07b/MHWu6e?w=408&h=583', rating:4, id : Math.random()},
    {title:'The Gods', description:'Mikey James returns from hiding to pay old debts, only to be fighting for survival against his old enemy Anthony Fasano, awaiting his return.',posterUrl:'https://canvas.tubitv.com/e6cd33d0-9f5a-49eb-9be8-2b20228a937c/1wxL5w?w=408&h=583', rating: 5, id : Math.random()},
    {title:'Stash: The Movie', description:'Jay, the son of a deceased drug kingpin, is given a heart-pounding 48 hours to turn over the stash, or his mother and sister will be killed.',posterUrl:'https://canvas.tubitv.com/65412b3c-1133-4019-ab52-9724fb386948/EKP48C?w=408&h=583', rating: 3, id : Math.random()},
    {title:'Trapped', description:'JA calculated drug dealer who is headed out of the game attempts to find vengeance for his father’s murder and give his woman a safer life.',posterUrl:'https://canvas.tubitv.com/9edb1b7a-dd28-4bd5-a792-37aa1719ef29/kfpfp1?w=408&h=583', rating: 2, id : Math.random()},
    
    
    ])
    const [search,setSearch]=useState("")
    const [rate,setRate] = useState(0)

  return (
    
    
    <div className='App'>

<NavMovie movies={movies} setMovies={setMovies}/>
 {/* <AddMovie movies={movies} setMovies={setMovies} />   */}
  <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate}/>
  <ListMovie movies={movies} setMovies={setMovies} search={search} rate={rate}/>  


  <footer>
  <div class="footer-content">
     <img style={{width:'100px'}}src={Logo} alt="" />
     
    <ul class="footer-links">
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</footer>  

</div>
  );
}

export default App;
