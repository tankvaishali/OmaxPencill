
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Team = [
    {
        img: require('../assets/image/reviews1.jpg'),
        name: 'Mr.Satish',
        position: 'GENERAL MANAGER',
        aos: "zoom-in-right"
    },
    {
        img: require('../assets/image/reviews2.jpg'),
        name: 'Mr. Vishal',
        position: 'PRODUCTION HEAD/COORDINATOR',
        aos: "zoom-in-left"
    },
    {
        img: require('../assets/image/reviews3.jpg'),
        name: 'Mr.Dipak',
        position: 'QC HEAD (RM/FINISHED GOODS)',
        aos: "zoom-in-right"
    },
    {
        img: require('../assets/image/reviews4.jpg'),
        name: 'Mrs.Minaxi',
        position: 'PACKAGING INCHARGE',
        aos: "zoom-in-left"
    },
    {
        img: require('../assets/image/reviews1.jpg'),
        name: 'Mrs.Krunshnavanti',
        position: 'PACKAGING COORDINATOR',
        aos: "zoom-in-right"
    },
    {
        img: require('../assets/image/reviews2.jpg'),
        name: 'Mrs. Vanita',
        position: 'DISPATCH COORDINATOR',
        aos: "zoom-in-left"
    },
    {
        img: require('../assets/image/reviews3.jpg'),
        name: 'Mr. Anupam',
        position: 'ENGINEER',
        aos: "zoom-in-right"
    },
]
function AboutTeam() {
    return (

        <div className="container px-4 mgtop my-5">
            <div className='omax_tittle fcolor text-center widthmanage mx-auto pb-2 text-capitalize' data-aos="fade-up" data-aos-duration="1800" >Our Creative <span className='scolor'>Team</span></div>
            <div className='row justify-content-center'>

                {Team.map((item) => {
                    return (

                        <div className='col-md-5 col-9 m-3 text-md-start text-center zoom shadow-lg zoom rounded-3 p-3 p-lg-0' data-aos={item.aos} data-aos-duration="1800">
                            <div className="row align-items-center ">
                                <div className="col-lg-6 text-center ">
                                    <img src={item.img} height={150} width={150} className='rounded-circle object-fit-cover my-4 zoom-animation ' alt={item.name} />
                                </div>
                                <div className="col-lg-6">
                                    <h4 className='fw-bold' style={{ color: 'var(--seccolor--)' }}>{item.name}</h4>
                                    <p style={{ color: 'var(--primarycolor--)' }}>{item.position}</p>
                                    <div>
                                        <Link to={'/'} className='text-decoration-none linkinsta' ><FaFacebook className='m-2 instaface' /></Link>
                                        <Link to={'/'} className='text-decoration-none linkinsta'> <FaInstagram className='m-2 instaface' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div>

    )
}

export default AboutTeam