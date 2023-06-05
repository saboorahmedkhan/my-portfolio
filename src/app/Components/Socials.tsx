import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Socials() {
    const socials = [
        {
            icon: faGithub,
            link: "https://github.com/saboorahmedkhan"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/saboor-ahmed-khan-20759ab7"
        },
        {
            icon: faTwitter,
            link: "https://twitter.com/saboorahmedkha1?s=08"
        },
        {
            icon: faEnvelope,
            link: "mailto:saboorahmedkhan@gmail.com"
        },
        {
            icon: faWhatsapp,
            link: "https://api.whatsapp.com/send?phone=923410025975"
        },
    ]

    return (
        <ul className='flex flex-col gap-2'>
            {socials.map((social, index) => {
                return (
                    <Link key={index} target="_blank" href={social.link}>
                        <li className='my-2 w-6 sm:w-8 h-6 sm:h-8 md:w-12 md:h-12 border-2 group border-[red] hover:bg-[red]  cursor-pointer rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={social.icon} className='w-3 sm:w-4 h-3 sm:h-4 md:w-6 md:h-6 group-hover:text-[black] text-black hover:bg-gray-300' />
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}
