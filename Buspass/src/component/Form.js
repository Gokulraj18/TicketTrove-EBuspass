import React, { useState, useEffect } from 'react';
import './Form.css';
import bus4 from './images/bus4.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [name, setName] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [email, setEmail] = useState('');
    const [fathername, setFathername] = useState('');
    const [address, setAddress] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [nextMonthFirstDay, setNextMonthFirstDay] = useState('');

    const navigate = useNavigate();

    const calculateDates = () => {
        const today = new Date();
        const nextMonthFirstDay = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        setNextMonthFirstDay(nextMonthFirstDay.toISOString().split('T')[0]);
    };

    useEffect(() => {
        calculateDates();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            Name: name,
            MobileNo: mobileno,
            Email: email,
            FatherName: fathername,
            Address: address,
            RollNumber: rollnumber,
            Source: source,
            Destination: destination,
            ValidityDate: nextMonthFirstDay,
        };

        sendData(formData);
    };

    const sendData = (data) => {
        axios.post("http://localhost:3001/form", data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));

        navigate('/card', { state: { name } });
    };

    return (
        <div >
            <div className="mainhead">
                <div className="heading">
                    <h1>Apply Form</h1>
                </div>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="one">
                        <div className="inside">
                            <div className="inputbox">
                                <input type="text" id="Name" name="Name" required value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                            </div>
                            <div className="inputbox">
                                <input type="text" id="Mobile-No" name="Mobile-No" required placeholder='Mobile No' value={mobileno} onChange={(e) => setMobileno(e.target.value)} />
                            </div>
                            <div className="inputbox">
                                <input type="text" id="email" name="email" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="inputbox">
                                <input type="text" id="Guard-name" name="Guard-name" required placeholder='Father’s Name' value={fathername} onChange={(e) => setFathername(e.target.value)} />
                            </div>
                            <div className="inputbox">
                                <input type="text" id="Address" name="Address" required placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="inputbox">
                                <input type="text" id="RollNumber" name="RollNumber" required placeholder='Roll Number' value={rollnumber} onChange={(e) => setRollnumber(e.target.value)} />
                            </div>
                            <div className="gender">
                                <span>Gender</span>
                                <div className='male'>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label> Male</label>
                                </div>
                                <div className='female'>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label> Female</label>
                                </div>
                            </div>
                            <br />
                            <span>Source</span>
                            <select id="Source" required onChange={(e) => setSource(e.target.value)}>
                                <option value="">Select District</option>
                                <option value="Ariyalur">Ariyalur</option>
                                <option value="Chengalpattu">Chengalpattu</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Cuddalore">Cuddalore</option>
                                <option value="Dharmapuri">Dharmapuri</option>
                                <option value="Dindigul">Dindigul</option>
                                <option value="Erode">Erode</option>
                                <option value="Kallakurichi">Kallakurichi</option>
                                <option value="Kancheepuram">Kancheepuram</option>
                                <option value="Kanyakumari">Kanyakumari</option>
                                <option value="Karur">Karur</option>
                                <option value="Krishnagiri">Krishnagiri</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Mayiladuthurai">Mayiladuthurai</option>
                                <option value="Nagapattinam">Nagapattinam</option>
                                <option value="Namakkal">Namakkal</option>
                                <option value="Nilgiris">Nilgiris</option>
                                <option value="Perambalur">Perambalur</option>
                                <option value="Pudukkottai">Pudukkottai</option>
                                <option value="Ramanathapuram">Ramanathapuram</option>
                                <option value="Ranipet">Ranipet</option>
                                <option value="Salem">Salem</option>
                                <option value="Sivaganga">Sivaganga</option>
                                <option value="Tenkasi">Tenkasi</option>
                                <option value="Thanjavur">Thanjavur</option>
                                <option value="Theni">Theni</option>
                                <option value="Thoothukudi">Thoothukudi</option>
                                <option value="Tiruchirappalli">Tiruchirappalli</option>
                                <option value="Tirunelveli">Tirunelveli</option>
                                <option value="Tirupathur">Tirupathur</option>
                                <option value="Tiruppur">Tiruppur</option>
                                <option value="Tiruvallur">Tiruvallur</option>
                                <option value="Tiruvannamalai">Tiruvannamalai</option>
                                <option value="Tiruvarur">Tiruvarur</option>
                                <option value="Vellore">Vellore</option>
                                <option value="Viluppuram">Viluppuram</option>
                                <option value="Virudhunagar">Virudhunagar</option>
                            </select>
                            <span>Destination</span>
                            <select id="Destination" required onChange={(e) => setDestination(e.target.value)}>
                                <option value="">Select District</option>
                                <option value="Ariyalur">Ariyalur</option>
                                <option value="Chengalpattu">Chengalpattu</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Cuddalore">Cuddalore</option>
                                <option value="Dharmapuri">Dharmapuri</option>
                                <option value="Dindigul">Dindigul</option>
                                <option value="Erode">Erode</option>
                                <option value="Kallakurichi">Kallakurichi</option>
                                <option value="Kancheepuram">Kancheepuram</option>
                                <option value="Kanyakumari">Kanyakumari</option>
                                <option value="Karur">Karur</option>
                                <option value="Krishnagiri">Krishnagiri</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Mayiladuthurai">Mayiladuthurai</option>
                                <option value="Nagapattinam">Nagapattinam</option>
                                <option value="Namakkal">Namakkal</option>
                                <option value="Nilgiris">Nilgiris</option>
                                <option value="Perambalur">Perambalur</option>
                                <option value="Pudukkottai">Pudukkottai</option>
                                <option value="Ramanathapuram">Ramanathapuram</option>
                                <option value="Ranipet">Ranipet</option>
                                <option value="Salem">Salem</option>
                                <option value="Sivaganga">Sivaganga</option>
                                <option value="Tenkasi">Tenkasi</option>
                                <option value="Thanjavur">Thanjavur</option>
                                <option value="Theni">Theni</option>
                                <option value="Thoothukudi">Thoothukudi</option>
                                <option value="Tiruchirappalli">Tiruchirappalli</option>
                                <option value="Tirunelveli">Tirunelveli</option>
                                <option value="Tirupathur">Tirupathur</option>
                                <option value="Tiruppur">Tiruppur</option>
                                <option value="Tiruvallur">Tiruvallur</option>
                                <option value="Tiruvannamalai">Tiruvannamalai</option>
                                <option value="Tiruvarur">Tiruvarur</option>
                                <option value="Vellore">Vellore</option>
                                <option value="Viluppuram">Viluppuram</option>
                                <option value="Virudhunagar">Virudhunagar</option>
                            </select>
                            <div className="inputbox">
                                <button className="loginbtn" type='submit'>
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="imageready">
                            <img src={bus4} alt="" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}