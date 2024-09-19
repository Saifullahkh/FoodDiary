import React, { useContext} from 'react'
import { TextField,} from '@mui/material'
import { RecipesContext } from '../App';


function SearchBar() {
    const {setSearchQuery} = useContext(RecipesContext)
   

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <div>
            <TextField
                placeholder='search'
                fullWidth
                onChange={handleSearch}
                sx={{
                    "& fieldset": { border: 'none' }
                    
                }}
            />
        </div>
    )
}

export default SearchBar
