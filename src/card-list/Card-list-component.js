import React from 'react';
import './card-list-style.css';
import {Card} from "./Card-component";
export const CardList = (props) =>{
    console.log(props)
    return(
       
        <div className="Card-list">
           {props.monsters.map(monster=>(
               <Card key={monster.id} monster = {monster} />))}
        </div>
    )
}