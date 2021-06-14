import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Information'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://maps.google.com/maps?q=South%20Richmond%20Hill%20New%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+1 7182880661'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'gurpreets00116@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'South Richmond Hill, 11419'} text2={'New York, United States'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
