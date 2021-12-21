import React from "react";
import './page.css';
import Subordinate from "./Subordinate";
import Search from "./search";

class Page extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
            names: [],
            
		};
	}

	componentDidMount() {
		fetch(
"http://localhost:4000/employees")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true                    
				});
			})
        
        
	}

    createArray(items){
        
        if(!items)
            return;
        items.map((item) => {
            this.state.names.push(item.name);
            this.createArray(item.subordinates);
        })
        
    }

	render() {
		const { DataisLoaded, items, names } = this.state;       
        
		if (!DataisLoaded) return <div>
			<h3> Fetching data.... </h3> </div> ;
        else{
            this.createArray(items);
            console.log(names);
        }

		return (
            
            <div>
                <Search data={this.state.names} />

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
	);
}
}

export default Page;
