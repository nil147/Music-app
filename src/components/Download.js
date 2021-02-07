import { Button } from '@material-ui/core'
import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import '../styles/Download.css';
import { Parallax } from 'react-parallax';

function Download() {

    const img = "https://images.pexels.com/photos/586416/pexels-photo-586416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    return (
        <div className="download"> 
        <Parallax blur={5} bgImage={img} strength={200} strength={500} style={{ height: 350}}>
            <div className="download-info">
            <p>DOWNLOAD OUR MUSIC</p>
            <h1>You Can Listen To Our Music On Any Device</h1>
            <h3>
            Our singles and albums are already available on Apple Music and Google Play Music. Just <br></br> select your favorite service and listen to our tracks on any device.
            </h3>
            <div className="download-button">
                <Button>Apple Music <AppleIcon /></Button>
                <Button>Google Music <ShopIcon /></Button>
            </div>
            </div>
            </Parallax>
            
        </div>
    )
}

export default Download
