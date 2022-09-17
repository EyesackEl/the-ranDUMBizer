import React from 'react';
import '../../style/Contact/contact.css';
import linkedInLogo from'../assets/LinkedIn.png';
import githubLogo from '../assets/Github.png';
import gmailLogo from '../assets/Gmail.png';
import diceLogo from '../assets/dice.png';

export default function Contact() {
    return (
        <div className='contact-page-container'>
            <div className="contact-content-box">
                <div className="contact-banner-side">
                    <div className="banner-side-text">
                        <h1>Contact Us</h1>
                        <p>
                            The ranDUMBizer team is a group of hardworking, talented junior developers that plan on creating more projects as they
                            continue to build their foundation. <br /> Keep an eye out for future apps/developments!
                        </p>
                    </div>
                    <img src={diceLogo} alt='logo' className='contact-logo' />
                    {/* <h1>
                        ran<strong>DUMB</strong>izer
                    </h1> */}

                    <div className="contact-banner-bg"></div>
                </div>
                <div className="contact-side">

                    <div className="contact-container">
                        <h2>Front End Monkeys</h2>
                        <section className='card-container'>
                            <section className="contact-card">
                                <div className="card-header">
                                    <img src="https://avatars.githubusercontent.com/u/101996599?v=4" alt="profile-picture" className='member-picture'/>
                                    <div className="button-container">
                                        <i id='email-button' class="fa-solid fa-envelope"></i>
                                        <i id='github-button' class="fa-brands fa-github"></i>
                                        <i id='linkedin-button' class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <h4><strong>Isaac LaFlamme</strong></h4>
                                    <p>React Lead</p>
                                </div>
                                {/* <section className="contactGroup">
                                    <a href="mailto:eyesack@gmail.com">
                                        <img src={gmailLogo} alt="gmail logo" className="logos"/>
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
                                </section> */}
                            </section>
                            <section className="contact-card">
                                <div className="card-header">
                                    <img src="https://avatars.githubusercontent.com/u/102436216?v=4" alt="profile-picture" className='member-picture'/>
                                    <div className="button-container">
                                        <i id='email-button' class="fa-solid fa-envelope"></i>
                                        <i id='github-button' class="fa-brands fa-github"></i>
                                        <i id='linkedin-button' class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <h4><strong>Ryan Reeves</strong></h4>
                                    <p>UI/UX Lead</p>
                                </div>

                                {/* <section className="contactGroup">
                                    <a href="mailto:ryan@gmail.com">
                                        <img src={gmailLogo} alt="gmail logo" className="logos"/>
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
                                </section> */}
                            </section>
                        </section>
                        <div className="divider"></div>
                        <h2>Back End Nerds</h2>
                        <section className='card-container'>
                            <section className="contact-card">
                                <div className="card-header">
                                    <img src="https://avatars.githubusercontent.com/u/102272276?v=4" alt="profile-picture" className='member-picture'/>
                                    <div className="button-container">
                                        <i id='email-button' class="fa-solid fa-envelope"></i>
                                        <i id='github-button' class="fa-brands fa-github"></i>
                                        <i id='linkedin-button' class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <p className='phub'>Porn<div className="hub">hub</div></p>
                                    <h4><strong>Matthew Davis</strong></h4>
                                    <p className='matthew'>PornHub Premium</p>
                                </div>
                                {/* <h4>Matthaiah</h4>
                                <section className="contactGroup">
                                    <a href="mailto:matthewdavis1372@gmail.com" >
                                        <img src={gmailLogo} alt="gmail logo" className="logos"/>
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
                                </section> */}
                            </section>
                            <section className="contact-card">
                                <div className="card-header">
                                    <img src="https://avatars.githubusercontent.com/u/102196654?v=4" alt="profile-picture" className='member-picture'/>
                                    <div className="button-container">
                                        <i id='email-button' class="fa-solid fa-envelope"></i>
                                        <i id='github-button' class="fa-brands fa-github"></i>
                                        <i id='linkedin-button' class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <h4><strong>Adam Parent</strong></h4>
                                    <p className='adam'>DB Lead</p>
                                </div>
                            {/* <section className="contact-card">
                                <h4>Adam-man</h4>
                                <section className="contactGroup">
                                    <a href="mailto:adamemail@gmail.com">
                                        <img src={gmailLogo} alt="gmail logo" className="logos"/>
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
                                </section> */}
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
  }