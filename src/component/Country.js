import React from 'react';

const Country = (props) => {
   // console.log(props)
    const {name,population,flag}=props.country;
    const flagStyle= {height:'80px'};
    const addHandleButton=props.addHandleButton;
    //console.log(props.addHandleButton)
   
    return (
        <div>
            <h4>This name of the country is <small>{name}</small></h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h3>The population is {population}</h3>
            <button onClick={()=>addHandleButton(props.country)}> Add country</button>
            
        </div>
    );
};

export default Country;