import "./search.css";
import React, { useState } from "react";
import Subordinate from "./Subordinate";


function Search({ data,items }){
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");   
    const [ visible, setVisible ] = useState("true"); 
    
    const handleFilter = (event) => {
        data = Array.from(new Set(data));
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setVisible("true");
          setFilteredData([]);
        } else {
          if(newFilter.length === 0) setVisible("false");
          setFilteredData(newFilter);
        }
      };    
      
    return (
        <div className="search-container">
          <div className="search">
            <span className="emp-search-text">Employee search</span>
            <div className="searchInputs">
                <input type="text" placeholder="Type your search here" value={wordEntered}
          onChange={handleFilter} />
            </div>
            </div>
            <h2>Results</h2>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (              
                        <p>{value} </p>
                    );
                })}
                </div>
            )}
            
            {filteredData.length === 0 && visible==="true" && (
              <div className="all-employees">
                  {items[0].name}  ({items[0].title})
                  {         
                      items[0].subordinates.map((item) => {
                          return (
                              <div>
                                      <Subordinate key={item.id} subs={item} />
                              </div>                            
                          )
                        })                
                  }
              </div>
            )}

            {filteredData.length === 0 && visible==="false" && (
              <div><p>No record found !!!</p></div>
            )}
            

        </div>
    )
}
export default Search