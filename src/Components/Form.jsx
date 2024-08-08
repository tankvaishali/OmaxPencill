import React, { useState } from 'react';

function Form() {
    const [errmsg, seterrmsg] = useState({});
    const [blankobj, setblankobj] = useState({});
    const [obj, setobj] = useState({});
    let getdata = (e) => {
        if (e.target.name === "name") {
            if (e.target.value?.length <= 0) {
                errmsg.name = "Your name is require !"
            } else {
                errmsg.name = ""
            }
        }
        if (e.target.name === "email") {
            if (e.target.value?.length <= 0) {
                errmsg.email = "Your email is require !"
            } else {
                errmsg.email = ""
            }
        }
        if (e.target.name === "phonenumber") {
            if (e.target.value.length === 10) {
                errmsg.phonenumber = ""
            } else if (e.target.value.length < 10) {
                errmsg.phonenumber = "Number must be require 10 digits."
            } else if (e.target.value.length > 10) {
                errmsg.phonenumber = "Number is not valid."
            }
        }
        if (e.target.name === "subject") {
            if (e.target.value?.length <= 0) {
                errmsg.subject = "Your email is require !"
            } else {
                errmsg.subject = ""
            }
        }
        if (e.target.name === "textarea") {
            if (e.target.value?.length <= 0) {
                errmsg.textarea = "Please Write Your Message !"
            } else {
                errmsg.textarea = ""
            }
        }
        obj[e.target.name] = e.target.value;
        blankobj[e.target.name] = ""
        setobj({ ...obj })
        setblankobj({ ...blankobj })
        seterrmsg({ ...errmsg })
    }
    let savedata = (event) => {
        event.preventDefault();

        if (obj.name === "" || obj.name === undefined) {
            errmsg.name = "Your name is require !"
        }
        if (obj.email === "" || obj.email === undefined) {
            errmsg.email = "Your email is require !"
        }
        if (obj.phonenumber === "" || obj.phonenumber === undefined) {
            errmsg.phonenumber = "Your phone number is require !"
        }
        if (obj.subject === "" || obj.subject === undefined) {
            errmsg.subject = "Subject is reaquire!"
        }
        if (obj.textarea === "" || obj.textarea === undefined) {
            errmsg.textarea = "Please Write Your Message!"
        }
        if (Object.values(errmsg).every((x) => x === "")) {
            setobj({ ...blankobj })
            // setobj({...obj})
            console.log(obj);
        }
        seterrmsg({ ...errmsg })
    }
    return (
        <>
            <div class="container overflow-hidden">
                <div class="row g-4 p-3 my-5 m-0">
                    <div class="col-lg-4 section overflow-hidden d-flex align-items-center justify-content-center" data-aos="zoom-in-right" data-aos-duration="1800">
                        <div class="info-item ">
                            <div className="my-auto">
                                <div className='text-white my-auto p-4'>
                                    <h3 className='fw-bold lh-sm py-2'>If You Have Any Query, Feel Free To Contact Us</h3>
                                    <p className='lh-lg pt-2'>Omax Industries, takes pride in operating from a spacious factory area of 56,000 square feet. With a strong establishment in 2011, we have successfully navigated the industry for over 12 years, leveraging our experience and expertise to deliver exceptional manufacturing solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8" >
                        <form data-aos="zoom-in-left" data-aos-duration="1800">
                            <div className='omax_tittle fcolor pb-3 text-capitalize'>Connect With <span className='scolor'> Us !</span></div>
                            <div class="row gy-2">
                                <div className='col-md-6'>
                                    <input type="text" name='name' placeholder='Your Name' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.name} />
                                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.name}</span>
                                </div>
                                <div className='col-md-6'>
                                    <input type="email" name='email' placeholder='Email' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.email} />
                                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.email}</span>
                                </div>
                                <div className='col-md-6'>
                                    <input type="number" name='phonenumber' placeholder='Phone Number' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.phonenumber} />
                                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.phonenumber}</span>
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" name='subject' placeholder='Subject' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.subject} />
                                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.subject}</span>
                                </div>
                                <div className='col-md-12'>
                                    <textarea name="textarea" id="" rows="5" className='w-100 border-0 shadow-lg rounded rounded-3 p-3' onChange={getdata} placeholder='Message' value={obj.textarea}></textarea>
                                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.textarea}</span>
                                </div>

                                <div
                                    class=" col-md-12 ">

                                    <div className='btn_hover text-center w-100'>
                                        <button onClick={savedata} className='btnedit p-2 fw-medium w-100 border-0 rounded-3 text-center text-white fs-5'>SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form