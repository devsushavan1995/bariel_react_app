import React from 'react';
import '../css/ContactForm.css';
import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data,e) => {
    console.log(data);
    e.target.reset();
  }
  return (
    <div className='contact-form-container'>
      <form action='' className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='input-container col-12 col-md-6'>
            <input type='text' name='fullname' placeholder='Enter Your Name*' className='contact-form__input w-100' {...register("fullName", { required: "Full Name is required", maxLength: {
              value: 30,
              message: "Full Name can not be longer than 30 letters"
            }  })} />
            <span className='contact-form__input-icon'>
              <i class='fas fa-user-alt'></i>
            </span>
            {errors.fullName && (<span className="text--secondary text--sm contact-form__input-error-text">{errors.fullName.message}</span>)}
          </div>
          <div className='input-container col-12 col-md-6'>
            <input type='email' name='email' placeholder='Enter Your Email*' className='contact-form__input w-100' {...register("email", { required: "Email is required", pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email"
            } })}/>
            <span className='contact-form__input-icon'>
              <i class='fas fa-envelope'></i>
            </span>
            {errors.email && (<span className="text--secondary text--sm contact-form__input-error-text">{errors.email.message}</span>)}
          </div>
          <div className='input-container col-12 col-md-6'>
            <input type='tel' name='phone' placeholder='Enter Your Phone Number*' className='contact-form__input w-100' {...register("phone", { required: "Phone Number is required" , pattern: {
              value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
              message: "Enter a valid phone number"
            } })}  />
            <span className='contact-form__input-icon'>                 
              <i class='fas fa-phone-alt'></i>
            </span>
            {errors.phone && (<span className="text--secondary text--sm contact-form__input-error-text">{errors.phone.message}</span>)}
          </div>
          <div className='input-container col-12 col-md-6'>
            <input type='text' name='subject' placeholder='Enter Your Subject*' className='contact-form__input w-100' {...register("subject", { required: "Subject is required" })}  />
            <span className='contact-form__input-icon'>
            <i class="fas fa-edit"></i>
            </span>
            {errors.subject && (<span className="text--secondary text--sm contact-form__input-error-text">{errors.subject.message}</span>)}
          </div>
          <div className='input-container col-12 col-md-12'>
            <textarea name='message' id='' placeholder='Enter Your Message Here' className='contact-form__input contact-form__input--textarea w-100' {...register("message")}></textarea>
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
