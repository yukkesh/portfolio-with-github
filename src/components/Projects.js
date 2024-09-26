import websiteImg1 from '../assets/SER.png';
import websiteImg2 from '../assets/simon.png';
import websiteImg3 from '../assets/Screenshot (1).png';
export default function Projects() {
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white ">
    <div className="w-full">
    <div className="flex flex-col px-10 py-5">
    <h1 className="text-4xl border-b-4 border-[#494ca1] mb-5 w-[150px] font-bold">Projects</h1>
    <p className='text-black font-bold'>These are some of my best projects. I have built these with React, Python flask, tailwind CSS. Check them out.</p>

    </div>
     
    </div>
    <div className="w-full">
        <div className='flex  flex-col md:flex-row px-10 gap-5'>
            
                <div className='relative'>
                <img className='h-[200px] w-[500px]'  src={websiteImg1}/>
                     
                <div className='project-desc'>
                         <p className='text-center px-5 py-1'>The Human Speech Emotion Recognition (SER) project integrates cutting-edge technologies to analyze and interpret emotions from speech data. The frontend, developed using React which communicates seamlessly with a Python Flask backend, where the heavy lifting of ML model inference and emotion prediction occurs.</p>
                     </div>
                
            </div>
            <div className='relative'>
            <img className='h-[200px] w-[500px]'  src={websiteImg2}/>
                 
            <div className='project-desc'>
                     <p className='text-center px-5 py-1'>The Simon game project built with plain HTML and JavaScript is a classic memory game that challenges players to remember and repeat sequences of colors and sounds. The game typically consists of four colored buttons, each corresponding to a unique sound.</p>
                 </div>
            
        </div>
        <div className='relative'>
                <img className='h-[200px] w-[500px]'  src={websiteImg3}/>
                     
                <div className='project-desc'>
                         <p className='text-center px-5 py-1'>My portfolio website, built with React.js and Tailwind CSS, focuses on showcasing my projects and skills in a sleek and interactive manner.The front end is designed for optimal user experience, featuring components like AppBar for navigation, Typography for content display, and Grid for responsive layout management.</p>
                     </div>
                
            </div>
            
        </div>    
    </div>
</section>
}
     
   



    


   