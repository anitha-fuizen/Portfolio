'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { useRef,useState } from "react";
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();
    const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_se7j0ts', 'template_o9r3f5u', form.current, {
                publicKey: 'JwpCqUzuYg7dymkjU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSentSuccessfully(true);
                    setTimeout(() => {
                        setIsSentSuccessfully(false); // Reset state after a few seconds
                    }, 2000); // Hide message after 5 seconds
                },
                
                (error) => {
                    console.error('FAILED...', error);
                    // Handle error display or logging here
                },
            );
    };
 
    return (
        
        <form ref={form} className="flex flex-col gap-y-4" onSubmit={sendEmail}>
            <div className="relative flex items-center">
                <Input type="text" id="name" placeholder='Name' name="from_name"/>
                <User className="absolute right-6" size={20}/>
            </div>
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder='Email' name="from_email"/>
                <MailIcon className="absolute right-6" size={20}/>
            </div>
            <div className="relative flex items-center">
                <Textarea  id="message" name="message" placeholder='Type your message here...' />
                <MessageSquare className="absolute top-4 right-6" size={20}/>
            </div>
            <div>
            {isSentSuccessfully && (
        <span className="bg-green-500 text-white py-1 px-2  rounded-md shadow-md">
            Message sent successfully!
        </span>
         )}
            
            </div>
            <Button type="submit" className="flex items-center max-w-[166px] gap-x-1">
                Let's talk
                <ArrowRightIcon size={20}/>
            </Button>
        </form>
       
    );
};
