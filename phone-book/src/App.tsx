import React from "react";
import {Element} from './components/Element/Element'
import {SearchBar} from "./components/SearchBar/SearchBar";
import "./App.scss";


function App() {
    return (
        <div className="App">
            <SearchBar/>
            <Element/>
        </div>
    );
}


export default App;
