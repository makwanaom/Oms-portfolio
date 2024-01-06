import './contact.css';
import React, { useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import { Util } from 'leaflet';
// import { useRef } from 'react';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

const markerIcon = new L.Icon (
    {
        iconUrl: require("../../assets/images/logo-4.png"),
        iconSize: [25, 50]
    }  
)

const Contact = () => {


    const [center, setCenter] = useState({ lat: 23.0592, lng:  72.6103});
    const ZOOM_LEVEL = 13;
    const mapRef = useRef();
    const markerPosition = L.latLng(23.0592, 72.6103);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o89ovjh', 'template_7as8kof', form.current, 'KJ3D5Pzf5A5W4OlIk')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            );
    };


    return (
        <>
            <div className='container-contact'>
                <h1>Contact Me</h1>
                <p className='get-touch'>
                    Let's get in touch
                </p>
                <br />
                <br />
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>

                        <li className='half'>
                            <input className='txt' type="text" name="name" placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                required />

                        </li>
                        <li>
                            <input className='sbj'
                                placeholder='Subject'
                                type="text"
                                name='subject'
                                required />
                        </li>
                        <li>
                            <textarea
                                placeholder='Message'
                                name='message'
                                required />

                        </li>
                        <input type="submit" className='flat-button' value="SEND" />


                    </form>

                </div>

                <div className='detail-map'>
                    Om Makwana,
                    <br />
                    India,
                    <br />
                    Asarwa, Ahmedabad 380016,
                    <br />
                    Ahmedabad, Gujarat <br />
                    <span>
                        ommakwana404@gmail.com
                    </span>
                </div>

                <div className='bg-map'>
                    <div className='leaflet-container'>
                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=H5BaalwBnfRYt4GVMXyY'
                                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                            />

                            <Marker position={markerPosition} icon={markerIcon} style="">
                                <Popup>
                                    Om lives here, come over for a cup of coffee :)
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>

            </div>


            <Loader type="pacman"></Loader>
        </>
    );
};

export default Contact;


