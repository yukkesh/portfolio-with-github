import AboutImg from'../assets/animation.jpg';
export default function About(){
   const config={
       line1:'Hi, My Name is Vijay S. I am a Data Analyst. I like making dashboards, charts , writing queries and analysing datas.',
       line2:'B.com Computer Application - A.M JAIN COLLEGE(2023)',
       line3:'EXCEL, SQL, Python, Power BI, Tableau.',

   }



    return <section className='flex flex-col md:flex-row bg-black px-10'id='about'>
        <div className=' py-5 px-2 md:w-1/2'>
            <img   src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center '>
        <h1 className='text-4xl border-b-4 border-[#eeb712] mb-5 w-[170px] font-bold text-white '>About Me</h1>
        <p className='pb-5 text-white'><b>{config.line1}</b></p>
        <h1  className='text-4xl border-b-4 border-[#eeb712] mb-5 w-[170px] font-bold text-white '>Education</h1>
        <p className='pb-5 text-white'><b>{config.line2}</b></p>
        <h1  className='text-4xl border-b-4 border-[#eeb712] mb-5 w-[160px] font-bold text-white '> Technical Skills</h1>
        <p className='text-white'><b>{config.line3}</b></p>
        </div>
        </div>

    </section>
}