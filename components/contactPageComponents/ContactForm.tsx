'use client'
import React from 'react'
import { Button, Input } from '../common'

type Props = {}

const ContactForm = (props: Props) => {
    return (
        <form className='flex flex-col gap-6' onSubmit={(e) => e.preventDefault()}>
            <Input id='fullName' placeholder='Full name' label='Full name' />
            <Input id='email' type='email' placeholder='Email address' label='Email address' />
            <label htmlFor="message" className='inline-block font-bold text-sm mb-2 first-letter:capitalize text-sub-text'>Message
                <textarea name="message" id="message" placeholder='Your message' className='border border-[#CBCBCB]
                relative focus:border-sub-text  bg-section-bg border-secondary focus:outline-none
                text-primary-text rounded-md mt-2  py-2 px-4 w-full min-h-20 max-h-96'></textarea>
            </label>
            <Button className='w-48'>Send Message</Button>
        </form>
    )
}

export default ContactForm