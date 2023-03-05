import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer(props) {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className={'footer'}>
            <div className="socialMedia">
                <InstagramIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>

            </div>
            <p>&copy; {year} SinodPizza.com  </p>
        </div>
    );
}

export default Footer;