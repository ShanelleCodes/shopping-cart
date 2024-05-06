import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Lets Stay Connected!: </span>
            <div className="mail">
                <input type='text' placeholder='Enter your e-mail'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
                <PinterestIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact