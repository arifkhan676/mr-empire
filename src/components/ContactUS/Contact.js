import React from 'react'
import { useForm } from "react-hook-form"
import './Contact.css'

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='contact' >
            <h1>CONTACT - US</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>

                <input  {...register("firstName", { required: true })} placeholder='Customer Name' />
                {errors.firstName && <span style={{ color: 'red' }} >This field is required</span>}

                <input  {...register("email", { required: true }, { pattern: /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ })} placeholder='Customer Email' />
                {errors.email && <span style={{ color: 'red' }} >This field is required</span>}

                <textarea type='textarea' {...register("message", { required: true })} placeholder='Message to us' />
                {errors.message && <span style={{ color: 'red' }} >This field is required</span>}
                <input className='btn btn-warning' type="submit" />
            </form>
        </div>
    )
}

export default Contact
