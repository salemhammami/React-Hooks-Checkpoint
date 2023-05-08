
import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';

const FilterMovie=({setSearch,setRate,search,rate})=>{
    const handelReset=()=>{
        setSearch('')
        setRate(0)
    }
    return(
        <div className='filterClass'>
            <input className='searchStyle' placeholder='Find Movies & TV Show' value={search} onChange={(e)=>setSearch(e.target.value)} type="text"/> <br/>
            <Rating className='rateStyle' value={rate} onChange={(e)=>setRate(e.target.value)} name="simple-controlled"/>
            <Button variant="dark"  className='btnReset' onClick={handelReset}>
            Reset          </Button>
        </div>
    )
}

export default FilterMovie