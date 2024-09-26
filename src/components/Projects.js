import websiteImg1 from '../assets/SER.png';
import websiteImg2 from '../assets/simon.png';
import websiteImg3 from '../assets/Screenshot (1).png';
export default function Projects() {

    const config = {
        projects :[
          {
             image: websiteImg1,
             description:'The Human Speech Emotion Recognition (SER) build with <b>ML</b>technologies and Puthon flask.',
             link:'',
          },
          {
            image: websiteImg2,
            description:'The Simon game project built with plain HTML and JavaScript.',
            link:'https://github.com/yukkesh/simon-game.git',
         },
         {
            image: websiteImg3,
            description:'My portfolio website, built with React.js and Tailwind CSS.',
            link:'https://github.com/yukkesh/portfolio-with-github.git',
         },
         
       ]
    }
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white ">
    <div className="w-full">
    <div className="flex flex-col px-10 py-5">
    <h1 className="text-4xl border-b-4 border-[#494ca1] mb-5 w-[150px] font-bold">Projects</h1>
    <p className='text-black font-bold'>These are some of my best projects. I have built these with React, Python flask, tailwind CSS. Check them out.</p>

    </div>
     
    </div>
    <div className="w-full">
        <div className='flex  flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((project)=>(
                 <div className='relative'>
                    <img className='h-[200px] w-[500px]'  src={project.image}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                                  <a className='btn' target='_blank' href={project.link}>Veiw project</a>
                            </div>
                    </div>
                           
                   
                </div>
                
            ))}
               
            
          </div>
    </div>
</section>
}
     
   



    


   