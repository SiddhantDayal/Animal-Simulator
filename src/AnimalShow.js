import './AnimalShow.css'
import {useState} from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird,//In a map when both the key and value have the same value , then we can write var1:var1 
    cat,//as simply var1
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({type}){
    const [clicks,setClick]=useState(0);
    const Handleclick = () => {
        setClick(clicks+1)
    };
    return (
    <div onClick={Handleclick} className='animal-show'>
        <img className='animal' alt='animal' src={svgMap[type]}/>
        <img className='heart' alt='"Heart"' src={heart} style={{ width :10+10*clicks +'px'}} />
    </div>
    );
}

export default AnimalShow;