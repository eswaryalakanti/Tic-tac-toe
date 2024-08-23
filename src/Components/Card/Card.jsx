import Icon from '../icons/Icons';
import './Card.css';
import { memo } from 'react';

function Card({iconname,click}){
return (
    <div className="card" onClick={click}>
        <Icon name={iconname}/>
      </div>  
);
}

export default memo(Card);