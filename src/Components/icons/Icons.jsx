import { FaTimes,FaRegCircle,FaPen} from 'react-icons/fa';
import { memo } from 'react';

function Icon({name}){
     if(name=='circle'){
        return <FaRegCircle size={40}/>
     }
     else if(name=='cross'){
        return <FaTimes size={40}/>
     }else{
        return <FaPen size={40}/>
     }

}

export default memo(Icon);