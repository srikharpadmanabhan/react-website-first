import React from 'react'
import './Email.css'

import { useForm } from 'react-hook-form';

const Email = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;
    return (
        <div className='email-config'>
            <h1>Contact</h1>

            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">Name is required<br /></div>
                )}
                <input
                    type='text'
                    {...register('user_name', { required: true })}
                    placeholder='Name'
                    maxLength='30'
                    aria-invalid={errors.user_name ? "true" : "false"} />
                <br />
                {errors.user_email && errors.user_email.type === "required" && (
                    <div role="alert">Email is required<br /></div>
                )}
                <input
                    type='text'
                    {...register('user_email', { required: true })}
                    placeholder='Email'
                    maxLength='30'
                    aria-invalid={errors.user_email ? "true" : "false"} />
                <br />
                {errors.message && errors.message.type === "required" && (
                    <div role="alert">Message is required<br /></div>
                )}
                <textarea
                    {...register('message', { required: true })}
                    placeholder='Message'
                    maxLength='1500'
                    aria-invalid={errors.user_email ? "true" : "false"} />
                <p className='message-chars-left'>{messageCharsLeft}</p>
                <br />
                <input type='submit' value='Send' />
            </form>
        </div >
    )
}

export default Email