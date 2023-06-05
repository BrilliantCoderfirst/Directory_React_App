import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const RetrieveInfo = () => {


    let myData = localStorage.getItem("myData");
    let data
    if (myData.length != 0) {
        data = JSON.parse(myData);
    }
    const [search, setSearch] = useState('');
    const [arrData, setArrData] = useState(data);

    const handleSearchAadharNo = (event) => {
        setArrData(data);
        setSearch(event.target.value);
    };

    const handleFindData = () => {
        setArrData(data.filter(element => element.aadhar === search));
    };

    


  return (
    <>
        <div className="personContainer">
            <div className="bigBox">
                <Button text="Retrieve Information" className="noColorBtn"  />
                <div className="box_button">
                    <Input type="number" placeholder='' value={search} setValue={handleSearchAadharNo} />
                    <Button text='Find' className='colorBtn smallWidth' onClick={handleFindData} />
                </div>
                <div className="content_field">

                    {
                        arrData.map((items, index) => (
                            <div className="box" key={index}>
                                <div className="left_box">
                                    <p>Name:</p>
                                    <p>DOB:</p>
                                    <p>Aadhar:</p>
                                    <p>Mobile No: </p>
                                    <p>Age:</p>
                                </div>
                                <div className="right_box">
                                    <p>{items.name}</p>
                                    <p>{items.dob}</p>
                                    <p>{items.aadhar}</p>
                                    <p>{items.mobile}</p>
                                    <p>{items.age}</p>
                                </div> 
                            </div>
                        ))
                    }

                    

        

                </div>
            </div>
        </div>
    </>
  )
}

export default RetrieveInfo