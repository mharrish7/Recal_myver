import React, { useState } from 'react';

function Accomodation() {

    const [sel,setsel] = useState('single');
    const [room,setr] = useState(0);
    const [total,settotal] = useState([]);
    const [roomcost,setco] = useState(0);
    const [tval,sett] = useState(0);

    function add(e){
        if(room > 0){
            settotal([sel + '-' + room, ...total]);
        }
    }

    function filter(s){
        var t1 = [];
        var done = 1;
        for(var i of total){
            if(i == s.s && done){
                done = 0;
            }
            else{
                t1.push(i);
            }
        }
        settotal(t1);
    }

    function froomcost(r){
        var t;
        if(sel == 'single'){
            t = (r)*2800;
        }
        else if(sel == 'double'){
            t = r*3500;
        }
        else{
            t = r*1750;
        }
        setco(t);
    }

    var key = 0;
    return (
        <>
         <h1>Accomodation</h1>
            <label>Choose Accomodation : 
                <select name='acc' onChange={e => {
                    setsel(e.target.value);
                    sett(0);
                    setco(0);
                    }}>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="tshare">T-share</option>

                </select>
            </label>
            
            <label>No of Rooms : 
            <input value={tval} type="number" onChange = {e => {
                setr(e.target.value);
                froomcost(e.target.value);
                sett(tval + 1);
                }} min = "0"/>
            </label>
            <p>Cost : {roomcost}</p>
            <button onClick={add}>Submit</button>
            {total.map(s => {
            key += 1;
            if(s != ''){
            return(<div key={key}>
                <p >{s}</p>
                <button onClick={() => filter({s})}>Remove</button>
            </div>)}
            }
            )}

        </>
        
    );
}

export default Accomodation;
