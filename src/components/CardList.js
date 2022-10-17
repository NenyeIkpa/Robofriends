import React from 'react';
import Card from '../components/Card';


const CardList = ({robot}) => {
    if(true) {
        throw new Error('Noooooo')
    }
    const cardArray = robot.map((user, index) => {
        return (
            <Card 
            key={robot[index].id} 
            id={robot[index].id} 
            name={robot[index].name} 
            email={robot[index].email}/>
        ) 
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}
export default CardList;