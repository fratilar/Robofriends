import React from 'react';

const Card = (props) => {
   return(
      <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
         <img src={`https://robohash.org/${props.name}`} width='250' height='200' alt="robots" />
         <h2>{props.name}</h2>
         <p>{props.email}</p>
      </div>
   )
}

export default Card;