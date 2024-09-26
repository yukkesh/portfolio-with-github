
export default function Contact(){

    const config ={
        email:'yukkeshs@gmail.com',
        phone:'+91 9360977535',
    }

    return <section id='contact' className='flex flex-col px-5 py-32 bg-purple-400 '>
    
        <div className='flex flex-col items-center'>
        
        <h1 className='text-4xl border-b-4 border-[#202080] mb-5 w-[140px] font-bold'> Contact</h1>
        <p className='pb-5'><b>If you want to discuss more in detail, please contact me.</b> </p>
        <p className='py-2'><span className='font-bold'>Email:</span>{config.email} </p>
        <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone} </p>

        </div>
    

    </section>
}