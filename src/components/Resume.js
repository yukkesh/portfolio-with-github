import ResumeImg from'../assets/resume.jpg';
export default function Resume(){
    const config ={
        link:'https://drive.google.com/file/d/1IVPvvSB5PuD5C3Wi-U8sGIdHjDlYDVhB/view?usp=drivesdk'
    }


    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-[#47487a] mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5 '><a className='px-2 text-black'><b>You can veiw my resume</b></a><a className='btn1 px-5' href={config.link}>Download</a> </p>
        </div>
        </div>

    </section>
}