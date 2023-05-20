import React from 'react';
import { Link } from 'react-router-dom'


export default function Footer(){
    return (
        <>
        <div className="footer-basic">
        <footer>
            <div className="social"><a href='https://www.instagram.com/' ><i className="icon ion-social-instagram"></i></a><a href='https://www.snapchat.com/'><i className="icon ion-social-snapchat"></i></a><a href='https://twitter.com/' ><i className="icon ion-social-twitter"></i></a><a href='https://www.facebook.com/facebook/'><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to={`/home`}>Home</Link></li>
                <li className="list-inline-item"><Link >Services</Link></li>
                <li className="list-inline-item"><Link >About</Link></li>
                <li className="list-inline-item"><Link >Terms</Link></li>
                <li className="list-inline-item"><Link >Privacy Policy</Link></li>
            </ul>
            <p className="copyright">Home Tech © 2023</p>
        </footer>
    </div>
        </>
    )
}