import React, {useState} from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        alert(`${formData.name}, ${formData.email}, ${formData.phone}, ${formData.message}`);

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        document.querySelector('form').reset();
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return (
        <section id='contact' className='contact container'>
            <h1 className='contact-heading'>Get in touch</h1>
            <div className='contact-container'>
                <form className='contact-form' onSubmit={onSubmit}>
                    <div className='contact-form--group'>
                        <label htmlFor='name' className='contact-form--label'>Name</label>
                        <input name='name' type='text' className='contact-form--input' required onChange={onChange}></input>
                        <p className='contact-form--example'>eg. Jane Doe</p>
                    </div>      
                    <div className='contact-form--group'>
                        <label htmlFor='email' className='contact-form--label'>Email</label>
                        <input name='email' type='email' className='contact-form--input' required onChange={onChange}></input>
                        <p className='contact-form--example'>eg. janedoe@email.com</p>
                    </div>
                    <div className='contact-form--group'>
                        <label htmlFor='phone' className='contact-form--label'>Email</label>
                        <input name='phone' type='text' className='contact-form--input' required onChange={onChange}></input>
                        <p className='contact-form--example'>eg. 00 44 23 32 32</p>
                    </div>
                    <div className='contact-form--group'>
                        <label htmlFor='message' className='contact-form--label'>Email</label>
                        <textarea name='message' type='text' className='contact-form--textarea' required onChange={onChange}></textarea>
                    </div>

                    <input type='submit' className='button' style={{border: 'none'}}></input>
                </form>
                <div>
                    <h1 className='contact-address'>
                    headbits AG, Oberdorfstrasse 8, 8001 Zurich
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Contact
