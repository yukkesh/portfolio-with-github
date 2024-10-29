import HeroImg from'../assets/xnxx.png';
import {AiOutlineGithub,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:'Iam a Data Analyst',
        social:{
            
            instagram:'https://www.instagram.com/vijay_d_analyst/',
            linkedin:'https://www.linkedin.com/in/vijay-s-ba5b3227a/?trk=opento_sprofile_details',
            github:'https://github.com/Vj141002',
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='  text-6xl font-hero-font text-black'>Hey there,<br/> Im <span className='text-white '><a className='text-border'>Vijay</a></span> S
        <p className='text-4xl py-5'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            
            <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}