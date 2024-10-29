import websiteImg4 from '../assets/biproject.jpg';
import websiteImg5 from '../assets/tabproject.png';
import websiteImg6 from '../assets/exproject.jpg';
export default function Projects() {

    const config = {
        projects :[
          {
             image: websiteImg4,
             description:'Here is my Power Bi Sales analysis dashboard of Awesome chocolate company. I downoaded thier data sets in kaggle',
             link:'https://drive.google.com/file/d/1dxHptM48qjjVX2UiISDihOv-QC1skD0Q/view?usp=drivesdk',
          },
          {
            image: websiteImg5,
            description:'This is my Tableau HR report, That tells you the companies employees details in dashboard.',
            link:'https://public.tableau.com/views/TableauPortfolio_17298479390880/HRDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
         },
         {
            image: websiteImg6,
            description:'This is my Excel report with dashboard and it tells you about Bike sales analysis.',
            link:'https://1drv.ms/x/c/1c752f3f521a3b04/EQLPrylnITBCnqAExRDIpgkB3X5DJ3n4l_fms65a6bE9cA?e=nv7cXg',
         },
         
       ]
    }
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-black text-white ">
    <div className="w-full">
    <div className="flex flex-col px-10 py-5">
    <h1 className="text-4xl border-b-4 border-[#eeb712] mb-5 w-[150px] font-bold">Projects</h1>
    <p className='text-white font-bold'>Here are my best projects. I have created these with Power BI, Tableau, Excel. Give them a look.</p>

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
                                  <a className='btn text-black' target='_blank' href={project.link}>Veiw project</a>
                            </div>
                    </div>
                           
                   
                </div>
                
            ))}
               
            
          </div>
    </div>
</section>
}
     
   



    


   