import "./search.css";
import React, { useState } from "react";

function Search({ data }){
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");    
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };    
      
    return (
        <div className="search">
            <span className="emp-search-text">Employee search</span>
            <div className="searchInputs">
                <input type="text" placeholder="Type your search here" value={wordEntered}
          onChange={handleFilter} />
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (              
                        <p>{value} </p>
                    );
                })}
                </div>
            )}

        </div>
    )
}
export default Search