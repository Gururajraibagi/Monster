import { Component } from "react";

import './search-box.component'
class SearchBox extends Component{

    render(){
        return (
            <input 
            type='search' 
            className={`searchbox ${this.props.className}`}
            placeholder={this.props.placeholder} 
            onChange={this.props.onChangehandler}></input>
        )
    }

}

export default SearchBox;