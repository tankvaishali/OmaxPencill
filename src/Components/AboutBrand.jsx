

import React from 'react'

function AboutBrand() {
    return (
        <div className="brandBG my-5">
            <div className="overlayeffect py-5">
                <div className='container py-5'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6 my-3'>
                            <div className="col-lg-7 col-10 mx-auto">
                                <img src={require("../assets/image/ECO's LogoUSA.jpg")} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-md-6 my-3 text-center text-light' style={{
                            textshadow: '2px 2px #ff0000'
                        }}>
                            <h4 className='text-capitalize'><span style={{ textShadow: '1px 1px', fontsize: '60px', fontweight: 400, fontfamily: 'var(--fontpri--) !important' }}>OUR BRAND PARTNER </span></h4>
                            <h2 className='fs-1 text-light' style={{ textShadow: '2px 1px' }}>Become partner stack certified partner</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutBrand