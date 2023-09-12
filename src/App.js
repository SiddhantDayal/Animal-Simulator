import './App.css';
import AnimalShow from './AnimalShow';
import {useState} from 'react';

function getRandomAnimal(){
    const Animals = ['dog','cat','horse','cow','gator','bird'];
    return Animals[Math.floor(Math.random()*Animals.length)];
}

function App(){
    const [animals , setAnimal] = useState([]);
    //These are called events in react
    const handleClick = () =>{
        setAnimal([...animals,getRandomAnimal()]);
    };
    const renderedAnimals = animals.map((animal,index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return(
        <div className='App'>
            <button onClick={handleClick}>Generate Animal</button>
            <div className='animal-list'>
                {renderedAnimals}
            </div>
        </div>
    );
}

export default App;