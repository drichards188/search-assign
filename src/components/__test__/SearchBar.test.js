import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "../SearchBar";

//proof of concept test that can be built out upon
it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBar></SearchBar>, div)
})