import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import List from "./List"
import "./SearchBar.css"
import Button from '@mui/material/Button';
import { React, useState } from "react";
import MenuItem from "@mui/material/MenuItem";

function SearchBar() {
    //defining hook data for persistence, cleanliness and reuse
    const [inputText, setInputText] = useState("");
    const [keyword, setKeyword] = useState("")
    const [page, setPage] = useState(1)
    const [hitsPerPage, setHitsPerPage] = useState(50)
    const [displaySearch, setDisplaySearch] = useState(false)

    //ResultList is how I hide and display the results
    let ResultList;

    //The macro search is the query I pass to the API. standard to lowercase the query and display results
    let handleMacroInput = (e) => {
        var lowerCase = document.getElementById('macro-search').value.toLowerCase();
        setKeyword(lowerCase);
        setDisplaySearch(true)
    };

    //The micro search is how I refine the results. standard to lowercase the query and ensure results display
    let handleMicroSearch = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        setDisplaySearch(true)
    };

    //handler to increase pagination
    let handleNextPage = () => {
        setPage(page + 1)
    }

    //handler to reduce pagination
    let handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    //handler to modify the number of results per query page
    let handleHitPerPage = (e) => {
        setHitsPerPage(e.target.value)
    }

    //this is how I load the hidden search results field
    if (displaySearch === true) {
        ResultList = <List style={{maxHeight: '100%', overflow: 'auto'}} input={inputText} keyword={keyword} page={page} hitsPerPage={hitsPerPage}/>
    }

    //the return is what actually renders the content
    return (
        <div className="main">
            <h1>AutoStore Search</h1>
            <div className="search">
                <TextField
                    id="macro-search"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    label="Search"
                    placeholder="Topic Search"
                />
                <Button onClick={handleMacroInput}>Search</Button>
                <TextField
                    id="micro-search"
                    color="secondary"
                    onChange={handleMicroSearch}
                    variant="outlined"
                    fullWidth
                    label="Fine Tune Search"
                    placeholder="Fine Tune"
                />
                <Button onClick={handlePrevPage}>Previous</Button>
                <Button onClick={handleNextPage}>Next</Button>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hitsPerPage}
                    label="Age"
                    onChange={handleHitPerPage}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={50}>Fifty</MenuItem>
                </Select>
            </div>
            <div className="search" style={{maxHeight: '100%', overflow: 'auto'}}>
                {ResultList}
            </div>
        </div>
    );
}

export default SearchBar;