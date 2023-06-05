import { TitleText } from './CustomTexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faGlobe } from '@fortawesome/free-solid-svg-icons'




export default function About() {
    return (
        <section id='About'>
            <div className="my-12 px-8">
                <TitleText title='About Me' textStyle='text-center' />
                <div className='w-full md:min-h-[25vh] mt-4 lg:mt-10 flex flex-col md:flex-row justify-between items-start gap-6'>
                    <p className='text-[#fffbf0] text-sm sm:text-base w-full lg:w-2/3 font-semibold mt-2 md:mt-0 self-start'>
                        <span><FontAwesomeIcon icon={faGlobe} className='w-4 h-4 group-hover:text-[red] text-[black] inline mb-1 mr-1' /></span> In the first quater of PIAIC WEB 3.0 metaverse and A.I course I learned Typescrit, NodeJs, TailwindCSS, Github and Vercel and my aim is to complete this state of the art course and then become a full stack blockchain developer.
                    </p>
                    <p className='text-[#fffbf0] text-sm sm:text-base w-full lg:w-2/3 font-semibold mt-8 md:mt-0 self-end'>
                        <span><FontAwesomeIcon icon={faMicrochip} className='w-4 h-4 group-hover:text-[red] text-[black] inline mb-1 mr-1' /></span> Previously I have done B.S Biomedical and MBA Marketing and I have a vast experince of pharmaceuticals and medical equipment sales and marketing + export marketing but now I have decided to change my field because I am very much interested in blockchain and A.I and want to become blockchain and A.I developer.
                    </p>
                </div>
            </div>
        </section>
    )
}
