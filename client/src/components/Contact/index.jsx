import React from 'react';
import '../../style/Contact/style.css';
import linkedInLogo from'../assets/LinkedIn.png';
import githubLogo from '../assets/Github.png';
import diceLogo from '../assets/Gmail.png';

export default function Contact() {
    return (
        <div>
            <section className="contact">
                <section className="contactGroup">
                    <a href="mailto:matthewdavis1372@gmail.com">
                        <img src={diceLogo} alt="gmail logo" className="logos"/>
                    </a>
                    <a href="mailto:matthewdavis1372@gmail.com" className="contactLink">matthewdavis1372</a>
                </section>                                       
                <section className="contactGroup">
                    <a href="https://github.com/MaDCodingPower" target="_blank">
                        <img src={githubLogo} alt="github logo" className="logos github"/>
                    </a>
                    <a href="https://github.com/MaDCodingPower" className="contactLink" target="_blank">MaDCodingPower</a>
                </section>
                <section className="contactGroup">
                    <a href="https://www.linkedin.com/in/matthew-d-240494b6/" target="_blank">
                        <img src={linkedInLogo} alt="Linked in logo" className="logos"/>
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-d-240494b6/" className="contactLink" target="_blank">matthew_d</a>
                </section>
            </section>
        </div>
    );
  }