import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../index.css';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const [emailMessage, setEmailMessage] = useState(false);

    // Send email
    const sendEmail = async (e) => {
        e.preventDefault();

        // Set loading state and wait for response
        const id = toast.loading('Pending...');
        let email = await emailjs.sendForm(
            'service_uxg2hyc',
            'template_e3fgctp',
            form.current,
            'S_CwvCXPZj5jA-fvu'
        );
        // Check if email succeeded and notify user
        if (email.status === 200) {
            toast.update(id, {
                render: 'Email sent successfully!',
                type: 'success',
                isLoading: false,
                closeButton: true,
                closeOnClick: true,
                autoClose: 5000,
            });
        } else {
            toast.update(id, {
                render: 'Email not sent!',
                type: 'error',
                isLoading: false,
                closeButton: true,
                closeOnClick: true,
                autoClose: 5000,
            });
        }

        e.target.reset();
    };

    //Users from PC will be sent to web whatsapp
    const whatsappRedirect = () => {
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 1024) {
            return 'https://api.whatsapp.com/send?phone=00389070580897';
        } else {
            return 'https://web.whatsapp.com/send?phone=00389070580897';
        }
    };

    return (
        <section id='contact'>
            {emailMessage && toast('Success')}
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>Ardonit.1980@gmail.com</h5>
                        <a href='mailto:ardonit.1980@gmail.com' target='_blank' rel='noreferrer'>
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Ardonit Saliji</h5>
                        <a href='https://m.me/ardonitsaliji' target='_blank' rel='noreferrer'>
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+38970580897</h5>
                        <a href={whatsappRedirect()} target='_blank' rel='noreferrer'>
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea
                        name='message'
                        rows='7'
                        placeholder='Your Message'
                        required
                    ></textarea>
                    <button type='submit' className='btn btn-primary'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
