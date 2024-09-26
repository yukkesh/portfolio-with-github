import HeroImg from'../assets/new.PNG';
import { AiOutlineFacebook,AiOutlineGithub,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:'Iam a Full_stack developer',
        social:{
            facebook:'https://www.facebook.com/share/fNRfF5jZ9QoabuFE/?mibextid=WC7FNe',
            instagram:'https://www.instagram.com/yugii__official?igsh=eWhqNndsYTJzdTJn&utm_source=qr',
            linkedin:'https://www.linkedin.com/in/yukkesh-s-308630289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            github:'https://github.com/yukkesh',
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-6xl font-hero-font text-black'>Hi,<br/> Im <span className='text-white'>S</span> Yukkesh
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}