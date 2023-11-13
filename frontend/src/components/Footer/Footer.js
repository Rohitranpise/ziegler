import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../Footer/footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links_div'>
                        <h4>For Business</h4>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/healthplan'>
                            <p>healthplan</p>
                        </a>
                        <a href='/individual'>
                            <p>individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>Resources</h4>
                        <a href='/resource'>
                            <p>Resource center</p>
                        </a>
                        <a href='/resource'>
                            <p>Testimonials</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>Partners</h4>
                        <a href='/employer'>
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>Company</h4>
                        <a href='/about'>
                            <p>About</p>
                        </a>
                        <a href='/press'>
                            <p>Press</p>
                        </a>
                        <a href='/career'>
                            <p>Career</p>
                        </a>
                        <a href='/contact'>
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>social media</h4>
                        <div className='socialmedia'>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <WhatsAppIcon />
                        </div>
                    </div>
                    <div className='sb_footer-below'>
                        <div className='sb_footer-copyright'>
                            <p>
                                @{new Date().getFullYear()} FlyStore. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer