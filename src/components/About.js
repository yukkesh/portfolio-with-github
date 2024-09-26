import AboutImg from'../assets/about.png';
export default function About(){
   const config={
       line1:'Hi,My name is S Yukkesh.I am a Full stack web developer.I built beautiful Websites with React.js and Tailwind css.',
       line2:'I am proficient in Frontend skills like HTML, CSS, React.js, Redux, Redux Tool kit, Tailwind CSS and many more.',
       line3:'In backend i know Node.js, Python, c, Sql, and MangoDB.',

   }



    return <section className='flex flex-col md:flex-row bg-secondary px-5'id='about'>
        <div className=' py-5 md:w-1/2'>
            <img   src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-[#9c9cb4] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'><b>{config.line1}</b></p>
        <p className='pb-5'><b>{config.line2}</b></p>
        <p><b>{config.line3}</b></p>
        </div>
        </div>

    </section>
}