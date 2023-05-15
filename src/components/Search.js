import { useState } from 'react'
import { Divider, Input } from 'antd';


function Search({ setTheseFoods, theseFoods, thoseFoods, setThoseFoods }) {


    const [search, setSearch] = useState("");


    const handleSearchInput = (e) => {
        setSearch(e.target.value)
        searchFunc(e.target.value)

    }

    const searchFunc = (search) => {
        if (search !== "") {
            let newFoods = thoseFoods.filter(x => {
                return x.name.toLowerCase().includes(search)
            })
            setTheseFoods(newFoods)
        } else {
            setTheseFoods(thoseFoods)
        }
    }



    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input name='search' value={search} type="text" onChange={handleSearchInput} />
        </>
    );
}

export default Search;