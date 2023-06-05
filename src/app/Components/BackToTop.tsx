'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function BackToTop() {
    const [activeGradient, setActiveGradient] = useState("skill-gradient");

    function mouseEnter() {
        console.log('mouse enter')
        setActiveGradient('')
    }

    function mouseLeave() {
        console.log('mouse leave')
        setActiveGradient("skill-gradient")
    }


    return (
        <a href='#Home' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${activeGradient} flex items-center justify-center md:w-14 md:h-14 w-10 h-10 border-2 rounded-full border-[red] p-3 text-[#fdfaed] hover:border-[black] cursor-pointer`}>
            <div className={`rounded-full text-center font-semibold text-base md:text-lg`}>
                <FontAwesomeIcon icon={faArrowUp} className='w-4 h-4 md:w-5 md:h-5' />
            </div>
        </a>
    )
}
