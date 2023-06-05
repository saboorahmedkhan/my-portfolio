'use client'
import { useState } from 'react'
import { TitleText } from './CustomTexts'
import Skill from './Skill'
import { techSkills, softSkills } from '../constants'

export default function Skills() {
    const [activeTab, setActiveTab] = useState("Soft");
    const [activeSkills, setActiveSkills] = useState("Soft");
    const activeBgColor = "text-white"
    const setBg = (active: string) => (activeTab === active ? activeBgColor : "bg-transparent");

    const tabs = (
        <div className='flex gap-4'>
            {["Soft", "Tech"].map((tab) => (
                <button
                    key={tab}
                    type='button'
                    className={`border-2 rounded-2xl px-1 py-2 w-1/2 lg:w-1/6 text-center border-[black] font-semibold text-2xl ${setBg(tab)}`}
                    onClick={() => {
                        setActiveTab(tab)
                        setActiveSkills(tab)
                    }}
                >
                    {tab} Skills
                </button>
            ))}
        </div>
    );

    return (
        <section id='Skills'>
            <div className="mt-8 px-8">
                <TitleText title='Skills' textStyle='text-center' />
                <div className='my-4'>

                    {tabs}

                    {activeSkills === "Soft" ?
                        <div className="flex flex-wrap w-full mx-auto my-8 gap-4 justify-between">
                            {softSkills.map((skill, index) => {
                                return (
                                    <Skill key={index} value={skill} />
                                )
                            })}
                        </div> :
                        <div className="flex flex-wrap w-full mx-auto my-8 gap-4 justify-between">
                            {techSkills.map((skill, index) => {
                                return (
                                    <Skill key={index} value={skill} />
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
