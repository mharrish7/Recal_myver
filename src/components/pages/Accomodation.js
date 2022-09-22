import React, { useState } from 'react';
//hello
function Accomodation() {

    const [fam,setfam] = useState("single");
    const [rreq,setrreq] = useState("notRequired");
    const [roomt,setroomt] = useState(null);
    const [cin,setcin] = useState(null);
    const [cout,setcout] = useState(null);
    const [hotel,sethotel] = useState(null);
    var key = 0;
    return (
        <>
         <h1>Accomodation</h1>
         <label>Participation Type 
            <select onChange={(e) => setfam(e.target.value)}>
                <option value="single" >single</option>
                <option value="withFamily" >withFamily</option>
            </select>
            </label>
            <br />
            <br />
            {fam == 'withFamily' && <div className='fdetails'>
                    <table>
                    <tbody>
                        <tr>
                        <td><label>Alumni count 
                        
                    </label></td>
                    <td><input type="number" min = "0"/></td>
                        </tr>
                        <tr>
                        <td>
                    <label>Spouse count 
                        
                    </label></td>
                    <td><input type="number" min = "0"/></td>
                        </tr>
                        <tr>
                        <td>
                    <label>Family members count 
                        
                    </label></td>
                    <td><input type="number" min = "0"/></td>
                        </tr>
                        <tr>
                        <td>
                        <label>Grand Kids count 
                    </label></td>
                    <td> <input type="number" min = "0"/>
</td>
                        </tr>
                    </tbody>
                    </table>
                    
                    
                    
                    
                </div>}
                <br />
            <br />

            <label>Hotel Room 
            <select onChange={(e) => setrreq(e.target.value)}>
                <option value="notRequired" >notRequired</option>
                <option value="required" >required</option>
            </select>
            </label>
            <br />
            <br />
            {rreq == 'required' && <div className='rdetails'>
            <table>
            <tbody>
            <tr>
            <td><label>Type of room </label></td>
            <td><select onChange={(e) => setroomt(e.target.value)}>
                <option value="singleOccupancy" >singleOccupancy</option>
                <option value="doubleOccupancy" >doubleOccupancy</option>
                <option value="twinShare" >twinShare</option>

            </select></td>
            </tr>
            <tr>
            <td><label>CheckIn</label></td>
            
            <td><input type="date"  onChange={(e) => setcin(e.target.value)}/></td>
            </tr>
            <tr>
            <td><label>CheckOut</label></td>
            <td><input type="date"  onChange={(e) => setcout(e.target.value)}/></td>
            </tr>
            <tr>
            <td><label>Hotel</label></td>
            <td><select onChange={(e) => sethotel(e.target.value)}>
                <option >Select</option>
                <option value="breezeResidency">breezeResidency</option>
                <option value="hotelTamilNadu">hotelTamilNadu</option>

            </select></td>
            </tr>
            </tbody>
            </table>
            
            
            </div>}
            <br />
            <br />
            {hotel == "breezeResidency" && <div className='roomdetails'>
                    <table>
                        <tbody>
                        <tr>
                        <td><label>RoomType</label></td>
                            <td><select onChange={(e) => console.log(e.target.value)}>
                                <option >Select</option>
                                <option value="standard">standard</option>
                                <option value="executive">executive</option>
                                <option value="deluxe">deluxe</option>
                                <option value="luxurySuite">luxurySuite</option>
                                <option value="grandSuite">grandSuite</option>


                            </select></td>
                        </tr>
                        </tbody>
                    </table>
                </div>}

            {hotel == "hotelTamilNadu" && <div className='roomdetails'>
            <table>
            <tbody>
                        <tr>
                        <td><label>RoomType</label></td>
                            <td><select onChange={(e) => console.log(e.target.value)}>
                                <option >Select</option>
                                <option value="standard">standard</option>
                                <option value="familyRoom">familyRoom</option>
                                <option value="deluxe">deluxe</option>
                                <option value="suite">suite</option>
                                <option value="additionalMember">additionalMember</option>


                            </select></td>
                        </tr>
                        </tbody>
                    </table>
                </div>}

            
            <button onClick={(e) => console.log(e)}>Submit</button>

        </>
        
    );
}

export default Accomodation;
