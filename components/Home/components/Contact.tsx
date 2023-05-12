import styles from '../../../styles/Home/components/Contact.module.scss'
import { useState, useRef, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({ setMsgSuccess }) {

    const [state, handleSubmit] = useForm("xgedzndn");
    if (state.succeeded) {
        setMsgSuccess(true)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Your Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Enter Email'
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>

        </>
    );
}

function Contact() {
    const [msgSuccess, setMsgSuccess] = useState<boolean>(false)
    const contactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const contactObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.5) {
                    document.getElementById('contactSideNavbar').setAttribute('style', 'opacity: 0.2')
                } else if (entry.intersectionRatio >= 0.5) {
                    document.getElementById('contactSideNavbar').setAttribute('style', 'opacity: 0.7; color: rgb(26, 161, 155); font-weight: 500')
                }
            })
        }, { threshold: [0.0, 0.5] })

        contactObserver.observe(contactRef.current)

        return () => {
            contactObserver.unobserve(contactRef.current)
        }
    }, [])

    return (
        <div id="contact" className={styles.Contact} ref={contactRef}>
            <div className={styles.Contact_header}>
                <h2>Contact</h2>
                {msgSuccess && <div>Message sent successfuly <span>&#10004;&#65039;</span></div>}
            </div>
            <ContactForm setMsgSuccess={setMsgSuccess} />
        </div>
    )
}

export default Contact