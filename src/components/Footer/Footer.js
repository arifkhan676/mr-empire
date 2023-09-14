import React from 'react'
import './footer.css'
import img1 from '../Image/2.jpg'
import img2 from '../Image/5.jpg'
import img3 from '../Image/6.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='Footer' >
            <div className="right">
                <ul>
                    <li>Desing</li>
                    <li>Take Order</li>
                    <li>Services</li>
                    <li>Interiror Design</li>
                    <li>Best Services </li>
                </ul>
            </div>
            <div className="middle">
                <img className='footer-img' src={img1} alt="" />
                <img className='footer-img' src={img2} alt="" />
                <img className='footer-img' src={img3} alt="" />
                <div className="icon">
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                </div>
            </div>
            <div className="left">
                <ul>
                    <li>Desing</li>
                    <li>Take Order</li>
                    <li>Services</li>
                    <li>Interiror Design</li>
                    <li>Best Services </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
