'use client'

import { useState } from 'react'


export default function Skill({ value, styles }: { value: string, styles?: string }) {
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
        <div id={`${value}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${activeGradient} flex items-center justify-center w-full md:w-1/3 lg:w-1/4 border-2 rounded-2xl border-[red] p-3 text-[#fdfaed] hover:border-black ${styles ? styles : ""}`}>
            <div className={`rounded-2xl text-center font-semibold  text-lg`}>
                {value}
            </div>
        </div>
    )
}
