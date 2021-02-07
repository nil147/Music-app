import React from 'react'
import '../styles/Partners.css'
import huawei from '../images/huawei.png';
import mercedes from '../images/mercedes.png';
import nasa from '../images/nasa.png';
import twitter from '../images/twitter.png';
import apple from '../images/apple.png';

function Partners() {
    return (
        <div className="partners">
        <div className="partners-top">
            <p>PARTNERS</p>
            </div>
            <div data-aos="fade-up" className="partners-logo">
                <img src={huawei} alt="logo" />

                <img src={mercedes} alt="logo" />

                <img src={nasa} alt="logo" />

                <img src={twitter} alt="logo" />

                <img src={apple} alt="logo" />
            </div>

        </div>
    )
}

export default Partners
