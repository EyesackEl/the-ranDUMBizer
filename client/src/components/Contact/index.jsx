import React from 'react';
import '../../style/Contact/style.css';
import linkedInLogo from'../assets/LinkedIn.png';
import githubLogo from '../assets/Github.png';
import diceLogo from '../assets/Gmail.png';

export default function Contact() {
    return (
        <div>
            <section className='contactCard'>
                <section className="contact">
                    <h2>Matthaiah</h2>
                    <section className="contactGroup">
                        <a href="mailto:matthewdavis1372@gmail.com" >
                            <img src={diceLogo} alt="gmail logo" className="logos"/>
                        </a>
                        <a href="mailto:matthewdavis1372@gmail.com" className="contactLink">MatthewDavis1372</a>
                    </section>                                       
                    <section className="contactGroup">
                        <a href="https://github.com/MaDCodingPower" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="github logo" className="logos github"/>
                        </a>
                        <a href="https://github.com/MaDCodingPower" className="contactLink" target="_blank" rel="noreferrer">MaDCodingPower</a>
                    </section>
                    <section className="contactGroup">
                        <a href="https://www.linkedin.com/in/matthew-d-240494b6/" target="_blank" rel="noreferrer">
                            <img src={linkedInLogo} alt="Linked in logo" className="logos"/>
                        </a>
                        <a href="https://www.linkedin.com/in/matthew-d-240494b6/" className="contactLink" target="_blank" rel="noreferrer">Matthew_D</a>
                    </section>
                </section>
                <section className="contact">
                    <h2>Isaac-man</h2>
                    <section className="contactGroup">
                        <a href="mailto:eyesack@gmail.com">
                            <img src={diceLogo} alt="gmail logo" className="logos"/>
                        </a>
                        <a href="mailto:eyesack@gmail.com" className="contactLink" >Eyesackemail</a>
                    </section>                                       
                    <section className="contactGroup">
                        <a href="https://github.com/EyesackEl" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="github logo" className="logos github"/>
                        </a>
                        <a href="https://github.com/EyesackEl" className="contactLink" target="_blank" rel="noreferrer">EyesackEl</a>
                    </section>
                    <section className="contactGroup">
                        <a href="https://www.linkedin.com/in/isaac-laflamme-12321a234/" target="_blank" rel="noreferrer">
                            <img src={linkedInLogo} alt="Linked in logo" className="logos"/>
                        </a>
                        <a href="https://www.linkedin.com/in/isaac-laflamme-12321a234/" className="contactLink" target="_blank" rel="noreferrer">Isaac-Laflamme</a>
                    </section>
                </section>
                <section className="contact">
                    <h2>Ryan-man</h2>
                    <section className="contactGroup">
                        <a href="mailto:ryan@gmail.com">
                            <img src={diceLogo} alt="gmail logo" className="logos"/>
                        </a>
                        <a href="mailto:ryan@gmail.com" className="contactLink">Ryanemail</a>
                    </section>                                       
                    <section className="contactGroup">
                        <a href="https://github.com/rreeves1996" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="github logo" className="logos github"/>
                        </a>
                        <a href="https://github.com/rreeves1996" className="contactLink" target="_blank" rel="noreferrer">RReeves1996</a>
                    </section>
                    <section className="contactGroup">
                        <a href="https://www.linkedin.com/in/rreevesdev/" target="_blank" rel="noreferrer">
                            <img src={linkedInLogo} alt="Linked in logo" className="logos"/>
                        </a>
                        <a href="https://www.linkedin.com/in/rreevesdev/" className="contactLink" target="_blank" rel="noreferrer">RReevesdev</a>
                    </section>
                </section>
                <section className="contact">
                    <h2>Adam-man</h2>
                    <section className="contactGroup">
                        <a href="mailto:adamemail@gmail.com">
                            <img src={diceLogo} alt="gmail logo" className="logos"/>
                        </a>
                        <a href="mailto:adamemail@gmail.com" className="contactLink">Adamemail</a>
                    </section>                                       
                    <section className="contactGroup">
                        <a href="https://github.com/arparent" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="github logo" className="logos github"/>
                        </a>
                        <a href="https://github.com/arparent" className="contactLink" target="_blank" rel="noreferrer">ARParent</a>
                    </section>
                    <section className="contactGroup">
                        <a href="https://www.linkedin.com/in/adam-r-parent" target="_blank" rel="noreferrer">
                            <img src={linkedInLogo} alt="Linked in logo" className="logos"/>
                        </a>
                        <a href="https://www.linkedin.com/in/adam-r-parent" className="contactLink" target="_blank" rel="noreferrer">Adam-R-Parent</a>
                    </section>
                </section>
            </section>
        </div>
    );
  }