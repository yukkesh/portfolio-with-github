
export default function Contact(){

    const config ={
        email:'vijaysivamani1410@gmail.com',
        phone:'+91 9952944018',
    }

    return <section id='contact' className='flex flex-col px-5 py-32 bg-black '>
    
        <div className='flex flex-col items-center'>
        <h1 className='text-4xl border-b-4 border-[#47487a] mb-5 w-[140px] font-bold text-white'> Thanks!</h1>
        <p className='pb-5 text-2xl text-white'><b>Thank you for taking the time to visit my portfolio!.</b> </p>
        <h1 className='text-4xl border-b-4 border-[#47487a] mb-5 w-[140px] font-bold text-white'> Contact</h1>
        <p className='pb-5 text-2xl text-white'><b>If you want to discuss more in detail, please contact me.</b> </p>
        <p className='py-2 text-2xl text-white'><span className='font-bold'>Email:</span> {config.email} </p>
        <p className='py-2  text-2xl text-white'><span className='font-bold'>Phone:</span> {config.phone} </p>

        </div>
    

    </section>
}