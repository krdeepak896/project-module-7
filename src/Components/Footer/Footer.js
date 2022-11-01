import React from 'react'
import './FooterComp.css'
import facebook from '../../Assests/Vector4.png'
import instagram from '../../Assests/Vector5.png'
import twitter from '../../Assests/Vector6.png'

function Footer() {

    const[email, setEmail] = React.useState("");
    function saveMail(e){
        setEmail(e.target.value)
    }

    function fetchData(e){
            e.preventDefault();
    fetch("https://module-7-email-details-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json",
        {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : email
            })
        }).then(res => res.json())
        .then(res => console.log(res))
        console.log(email)
        setEmail("")
        }
  return (
    <div className='footer-comp'>
        <div className='footer-top'>
            <h3>Acciojob</h3>
            <div>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="facebook" />
                <img src={twitter} alt="facebook" />
            </div>
        </div>
        <hr className='horizontal-line'/>
        <div className='footer-menu'>
            <div className = 'footer-menu-item'>
                <h5>Company info</h5>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Legal</h5>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Features</h5>
                <p>Business Marketing</p>
                <p>user Analytics</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Resources</h5>
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Get in Touch</h5>
                <input type="text" 
                placeholder="Your Email"  
                className='your-email'
                onChange={saveMail}
                value = {email}
                />
                <button type="submit" 
                className='subscribe-button'
                onClick={fetchData}>Subscribe</button>
                <p>lorem impsum dolor amit</p>
            </div>
        </div>
        <div className='love-message'>
        <h6>Made With ❤️ at Acciojob </h6>
        </div>
        
    </div>
  )
}

export default Footer