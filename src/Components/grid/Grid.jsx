import { useState,useCallback } from "react";
import Card from "../Card/Card";
import '../grid/grid.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Range(start, end) {
    return [...Array(end - start).keys()].map(i => i + start);
  }
  
function board (b,sym){
    if(b[0]==b[1] && b[1]==b[2] && b[2]==sym)return sym;
    if(b[3]==b[4] && b[4]==b[4] && b[5]==sym)return sym;
    if(b[6]==b[7] && b[7]==b[8] && b[8]==sym)return sym;

    if(b[0]==b[3] && b[3]==b[6] && b[6]==sym)return sym;
    if(b[1]==b[4] && b[4]==b[7] && b[7]==sym)return sym;
    if(b[2]==b[5] && b[5]==b[8] && b[8]==sym)return sym;

    if(b[0]==b[4] && b[4]==b[8] && b[8]==sym)return sym;
    if(b[2]==b[4] && b[4]==b[6] && b[6]==sym)return sym;
    return '';
}

  // Define the Grid component
  function Grid({ numberofcard }) {
    let [indi,setInd]=useState(Array(numberofcard).fill(''));
    let [turn,setTurn]=useState(false); //0-->0 and 1-->X
    let [winner,setWinner]=useState('');

    function turnChange(){
        console.log(turn)
        setTurn(!turn);
    }


    const fun1=useCallback(function clickfun(val,ind){
        if(val==''){
        if(indi[ind]==''){
        indi[ind]=turn?'cross':'circle';}
        setInd([...indi]);
        const out=board(indi,turn==0?'circle':'cross');
        if(out!=''){
            setWinner(out);
            toast.success(`Player ${out} wins!`);
        }
        turnChange();
    
    }else{
        toast.error('Cell already occupied');
    }


      },[turn,indi,winner]);


    return (<>
    {winner!=''?<><h1 className="turn">The winner is {winner}</h1><button onClick={()=>{
        setWinner('');
        setTurn(false);
        setInd(Array(numberofcard).fill(''));
    }}>Reset</button></>:<>
     <h1 className="turn">The turn : {turn?'X':'O'}</h1>
      <div className="grid-container">
        {indi.map((val, ind) => (
          <Card key={ind} click={()=>fun1(val,ind)}  iconname={val} />
        ))}
      </div></>}
      <ToastContainer />
      </>
    );
  }
  
      

export default Grid;