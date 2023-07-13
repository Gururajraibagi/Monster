import React, { Component } from "react";
import CardDetails from "./card-details.component";

class CardList extends Component{

    render(){
        const {filteredMonster} = this.props;

        return (
            <div className="card-list">
           
            {filteredMonster.map((monster)=>{
                return(
                    <CardDetails monster={monster}></CardDetails>
                )
              })}

            </div>
        

            
        )
    }
}

export default CardList;