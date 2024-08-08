import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Team = [
    {
        img: require('../assets/image/WhatsApp_Image_2023-08-23_at_19.02.10_VpWYpOU.jpeg'),
        name: 'Dipak Kaswala',
        position: 'CEO'
    },
    {
        img: require('../assets/image/WhatsApp_Image_2023-08-23_at_19.20.37_1.jpeg'),
        name: 'Nitin Madhani',
        position: 'CFO'
    },
    {
        img: require('../assets/image/WhatsApp_Image_2023-08-23_at_19.21.37.jpeg'),
        name: 'Manoj Dobariya',
        position: 'CTO'
    },
]
function HomeTeam() {
    return (
        <div className="container px-4 mgtop py-5">

            <div className="omax_tittle fcolor text-center text-capitalize" data-aos="fade-up"
                data-aos-duration="1800">Our <span className="scolor">Leaders</span></div>
            <div className='row justify-content-between'>
                {Team.map((item) => (
                    <div key={item.name} className='col-lg-4 col-md-6 col-10 text-center zoom py-3' data-aos="zoom-in" data-aos-duration="1800">
                        <div className='shadow mx-2 py-3'>
                            <img
                                src={item.img}
                                height={200}
                                width={200}
                                className='rounded-circle object-fit-cover my-4 zoom-animation p-1'
                                alt={item.name}
                            />
                            <h4 className='fw-bold' style={{ color: 'var(--seccolor--)' }}  >{item.name}</h4>
                            <p className='fw-medium' style={{ color: 'var(--primarycolor--)' }}>{item.position}</p>
                            <div>
                                <Link to={'/'} className='text-decoration-none linkinsta' ><FaFacebook className='m-2 instaface' /></Link>
                                <Link to={'/'} className='text-decoration-none linkinsta'> <FaInstagram className='m-2 instaface' /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeTeam