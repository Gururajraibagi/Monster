import React from "react";

/* class CardDetails extends Component{

    render(){
        const {id,name,email} =this.props.monster;
        return(
            <div className="card-container">
            <img 
              alt={`monster ${name}`} 
              src={`https://robohash.org/${id}?set=set2`}
             />
             <h2 key={id}>{name}</h2>
             <p>{email}</p>
          </div>
        )
    }
} */

const CardDetails =({monster})=>{
    const {id,name,email} =monster;
    return(
        <div className="card-container">
        <img 
          key={`${id}{name}`}
          alt={`monster ${name}`} 
          src={`https://robohash.org/${id}?set=set2`}
         />
         <h2 key={id}>{name}</h2>
         <p>{email}</p>
      </div>
    )

}

export default CardDetails;
