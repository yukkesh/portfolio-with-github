import websiteImg1 from '../assets/Powe BI.jpg';
import websiteImg2 from '../assets/SQL.jpg';
import websiteImg3 from '../assets/Tableau.jpg';
export default function Certificate() {

    const config = {
        certificates :[
          {
             image: websiteImg1,
             description:'This is my Power BI course completion certificate.',
             link:'https://drive.google.com/file/d/1THYXy22BjgeTqlj-paCqF3HnI82m2Jh9/view?usp=sharing',
          },
          {
            image: websiteImg2,
            description:'This is my SQL course completion certificate.',
            link:'https://drive.google.com/file/d/1d3ab2jK79s-ydhNdMc2SYq1YCoBGcIx2/view?usp=sharing',
         },
         {
            image: websiteImg3,
            description:'This is my Tableau course completion certificate.',
            link:'https://drive.google.com/file/d/1boKrIOBoQBqKX1s6svgszPh7KuLweX31/view?usp=drive_link',
         },
         
       ]
    }
    return <section id='certificates' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white ">
    <div className="w-full">
    <div className="flex flex-col px-10 py-5">
    <h1 className="text-4xl border-b-4 border-[#47487a] mb-5 w-[190px] font-bold">Certificates</h1>
    <p className='text-black font-bold'>Here are my certificates for completing my Power BI, SQL and Tableau courses.</p>
      </div>
     
    </div>
    <div className="w-full">
        <div className='flex  flex-col md:flex-row px-10 gap-5'>
            {config.certificates.map((certificate)=>(
                 <div className='relative'>
                    <img className='h-[200px] w-[500px]'  src={certificate.image}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{certificate.description}</p>
                        <div className='flex justify-center'>
                                  <a className='btn text-black' target='_blank' href={certificate.link}>Veiw Certificate</a>
                            </div>
                    </div>
                           
                   
                </div>
                
            ))}
               
            
          </div>
    </div>
</section>
}