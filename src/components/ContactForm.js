import React from 'react';
import '../css/ContactForm.css'

function ContactForm() {
  return (
    <div className='contact-form-container'>
      <form action='' className='contact-form'>
        <div className='row'>
          <div className='input-container col-12 col-md-6'>
            <input type='text' name='fullname' placeholder='Enter Your Name' className='contact-form__input w-100' />
            <span className='contact-form__input-icon'>
              <i class='fas fa-user-alt'></i>
            </span>
            <span className="text--secondary contact-form__input-error-text mt-2"></span>
          </div>
          <div className='input-container col-12 col-md-6'>
            <input type='email' name='email' placeholder='Enter Your Email' className='contact-form__input w-100' />
            <span className='contact-form__input-icon'>
              <i class='fas fa-envelope'></i>
            </span>
            <span className="text--secondary contact-form__input-error-text mt-2">Check input</span>
          </div>
          <div className='input-container col-12 col-md-6'>
            <input type='tel' name='phone' placeholder='Enter Your Phone Number' className='contact-form__input w-100' />
            <span className='contact-form__input-icon'>                 
              <i class='fas fa-phone-alt'></i>
            </span><span className="text--secondary contact-form__input-error-text mt-2">Check input</span>
          </div>
          <div className='input-container col-12 col-md-6'>
            <input type='email' name='email' placeholder='Enter Your Subject' className='contact-form__input w-100' />
            <span className='contact-form__input-icon'>
            <i class="fas fa-edit"></i>
            </span>
            <span className="text--secondary contact-form__input-error-text mt-2">Check input</span>
          </div>
          <div className='input-container col-12 col-md-12'>
            <textarea name='message' id='' placeholder='Enter Your Message Here' className='contact-form__input contact-form__input--textarea w-100'></textarea>
            <span className='contact-form__input-icon'>
            <i class="fas fa-comment-dots"></i>
            </span>
          </div>
        </div>
        <div className='d-md-flex justify-content-md-end d-lg-block'>
        <button type='submit' className='btn__secondary d-block d-md-inline-block d-lg-block contact-form__btn--submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
