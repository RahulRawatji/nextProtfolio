import { isEmpty } from 'lodash';
import { useFormik } from 'formik';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import RandomQuote from '../components/RandomQuote';
import Footer from '../components/Footer';

export default function Home() {

    const formData = useFormik({
        initialValues: {
            name: "",
            subject: "",
            email: "",
            message: ""
        },
        onSubmit: values => {
            console.log(values)
        },
    });

    return <>
        <Header />
        <div className='body_container'>
            <Navbar />
            <div className='main'>
                <section className='hero'>
                    <div className='hero-img'>
                        <img src='/pain.webp' width={'300px'} />
                    </div>
                    <div className='hero-content'>
                        <h1>Nice to meet you!<br></br> I'm Rahul Rawat</h1>
                        <p>Based in New Delhi. I'm a Full Stack Devloper passionate about building accessible Web Apps that user love.
                        </p>
                        <a className='btn' href='#contact' title='Contact Me'>Contact Me</a>
                    </div>
                </section>
                
                <section className='skills-section'>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>REACT</h2>
                    <h2>JAVASCRIPT</h2>
                </section>

                <section className='project-section'>
                    <h2>Projects</h2>
                    <div className='project-items'>
                       <a href='/'><div className='project-img-container'>
                         <img src="shopping.jpg" className='project-img' />
                        </div></a>
                        <div className='project-content'>
                            <h3>Shopping Kart</h3>
                            <ul className='project-list'>
                                <li>React</li>
                                <li>CSS</li>
                                <li>HTML</li>
                            </ul>
                        </div>
                    </div>
                    <div className='project-items'>
                        <div className='project-content'>
                            <h3>Trek Booking</h3>
                            <ul className='project-list'>
                                <li>React</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>NEXT JS</li>
                            </ul>
                        </div>
                        <a href="https://phoenix-eta.vercel.app/"><div className='project-img-container'>
                         <img src="trek.png" className='project-img' />
                        </div></a>
                    </div>
                    <div className='project-items'>
                    <a href='https://next-protfolio-phi.vercel.app/'> <div className='project-img-container'>
                         <img src="portfolio.jpg" className='project-img'
                               />
                        </div>
                        </a>
                        <div className='project-content'>
                            <h3>Portfolio</h3>
                            <ul className='project-list'>
                                <li>React</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>NEXT JS</li>
                            </ul>
                            <p>A Responsive Portfolio Website Designed and Developed to Practise and showcase Skill of different Web  Development Technologies.</p>                         
                        </div>
    
                    </div>
                </section>

                <section className='quote-section'>
                    <RandomQuote />
                </section>

                <section className='contact-section' id="contact">
                    <h2>Contact</h2>
                    <p>If you’d like to chat about a project or just have question, please fill in the form below. I aim to get back within 2 days.
                    </p>
                    <form onSubmit={formData.handleSubmit}>
                        <Input title='name' value={formData.values.name} onChange={formData.handleChange} required />
                        <Input title='email' value={formData.values.email} onChange={formData.handleChange} type="email" required />
                        <Input title='subject' value={formData.values.subject} onChange={formData.handleChange} columnCount={'1/ span 2'} required />
                        <Input title='message' value={formData.values.message} onChange={formData.handleChange} columnCount={'1/ span 2'} required />
                        <button className='btn btn-form' type='submit'>Send Message</button>
                    </form>
                </section>
            </div>
        </div>
        <Footer />
    </>

}
