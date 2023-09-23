import React from 'react';
import '../index.css';
const baseDir = 'src/images/';
function Tile(props){
   const imageName = `../images/${props.imgName}`;
   console.log(imageName);
return (props.imgName != null)?<td><div className='tile'>
            <img src={baseDir+props.imgName}/>
            <h2>{props.locationName}</h2>
            <h4>{props.location}</h4> 
            <a href={props.link} target="_blank" ><button>Visit</button></a>
        </div></td>:<td></td>
}

export default Tile;