import {React, useEffect, useState} from 'react'
import "./SearchBar.css"

function List(props) {

    //todo insert Algolia api key and application id into these variables
    //*********************************************************
    const apiKey = "INSERT_SECRET_HERE"
    const applicationId = "INSERT_SECRET_HERE"
    //*********************************************************

    //defining hook data for persistence, cleanliness and reuse
    const [hitPerPage, setHitPerPage] = useState(50)
    const [keyword, setKeyword] = useState("")
    const [page, setPage] = useState("")
    const [pageMax, setPageMax] = useState(1)
    const [apiData, setApiData] = useState([{
        "id": 1,
        "text": "Placeholder"
    }]);

    //this series of ifs prevent infinite calling of the effect
    if (hitPerPage !== props.hitsPerPage) {
        setHitPerPage(props.hitsPerPage)
    }
    if (keyword !== props.keyword) {
        setKeyword(props.keyword)
    }
    if (page != props.page) {
        setPage(props.page)
    }

    //use effect is called when the props of the component change
    useEffect((props) => {
        //prevent user from paging past the end of results
        if (page > pageMax) {
            setPage(pageMax)
        }

        //this fetch gets the api data. could use much more error handling and catching edge cases
        const fetchData = async () => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-algolia-api-key': apiKey,
                    'x-algolia-application-id': applicationId
                },
                body: JSON.stringify({
                    "params": "hitsPerPage=" + hitPerPage + "&query=" + keyword + "&page=" + page
                })
            };
            const data = await fetch('https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products/query', requestOptions)
                .then(response => response.json())
                .then(response => {
                    let formattedData = processApiData(response, hitPerPage, setPageMax)
                    setApiData(formattedData)
                })
                .catch(error => {
                    console.log(error)
                })

            return data
        }
            const myData = fetchData()

    }, [keyword, page, hitPerPage]);
    //the deps require the effect to be called on their change

    //reduce the array of results by filtering it with the users input
    const filteredData = apiData.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

//this helper function computes things such as the max pages for a query and maps item data for display
function processApiData(data, hitPerPage, setPageMax) {
    let cleanData = []

    let results = data["nbHits"]

    setPageMax(Math.floor(results/hitPerPage))

    data = data["hits"]
    for (let i = 0; i < data.length; i++) {
        let itemObj = {"id":data[i]["Sku"], "text":data[i]["Name"]}
        cleanData.push(itemObj)
    }
    return cleanData
}

export default List