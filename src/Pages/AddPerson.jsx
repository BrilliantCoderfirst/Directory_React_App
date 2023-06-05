import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const AddPerson = () => {

    const [rows, setRows] = useState([{name: '', dob: '', aadhar: '', mobile: '', age: ''}]);
    const [data, setData] = useState([]);

    const handleInputData = (event, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = event.target.value;
        setRows(newRows);
    }

    const addRows = () => {
        setRows([...rows, {name: '', dob: '', aadhar: '', mobile: '', age: ''}]);
    };


    const handleSaveData = (index) => {
        if (rows[index].name == "" && rows[index].dob == "" && rows[index].aadhar == "" && rows[index].mobile == "" && rows[index].age == "") {
            alert("Please Fill All Fields---!");
        } else {
            if (+(rows[index].aadhar).length == 12 && +(rows[index].mobile).length == 10) {
                setData([...data, rows[index]]);
                alert("Your Data Save Successfully---! :)")
            } else {
                alert("Please Check The Aadhar Number & Mobile Number---!");
            }
            
        }
    }

    const handleDeleteData = (id) => {
        setRows(rows.filter((items, index) => index !== id ));
    };
    
    
    localStorage.setItem("myData", JSON.stringify(data));





  return (
    <>
        <div className="personContainer">
            <div className="bigBox">
                <Button text="Add New Person" className="noColorBtn"  />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Aadhar Number</th>
                                <th>Mobile Number</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map((items, index) => (
                                    <tr key={index}>
                                        <td><Input type="text" placeholder='' value={items.name} setValue={(e) => handleInputData(e, index, "name")} /></td>
                                        <td><Input type="date" placeholder='' value={items.dob} setValue={(e) => handleInputData(e, index, "dob")} /></td>
                                        <td><Input type="number" placeholder='' value={items.aadhar} setValue={(e) => handleInputData(e, index, "aadhar")} /></td>
                                        <td><Input type="number" placeholder='' value={items.mobile} setValue={(e) => handleInputData(e, index, "mobile")} /></td>
                                        <td><Input type="number" placeholder='' value={items.age} setValue={(e) => handleInputData(e, index, "age")} /></td>
                                        <td className='last_td'><Link to='#'> <span onClick={() => handleSaveData(index)}>Save</span></Link> <Link to="#"><span onClick={() => handleDeleteData(index)}>Delete</span></Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="bottom_btn">
                    <Button text='Add' className="colorBtn" onClick={addRows} />
                </div>
            </div>
        </div>
    </>
  )
}

export default AddPerson;