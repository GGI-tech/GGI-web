import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Socials = ({ heading }) => {
    return (
        <div className='my-12 flex justify-center gap-5'>
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
            <FaTwitter size={30} />
            <FaFacebook size={30} />
            <FaYoutube size={30} />
        </div>
    );
};

export default Socials;
