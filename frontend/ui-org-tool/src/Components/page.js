import React from "react";
import './page.css';
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
            this.state.names.push(item.name+"  ("+item.title+")");
            return this.createArray(item.subordinates);
        })
        
    }

	render() {
		const { DataisLoaded, items, names } = this.state;       
        
		if (!DataisLoaded) return <div>
			<h3> Fetching data.... </h3> </div> ;
        else{
            this.createArray(items);
        }
		return (            
            <div>
                <Search data={names} items={items}/>
            </div>
	    );
    }
}

export default Page;
