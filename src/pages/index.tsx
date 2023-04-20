import Image from 'next/image';
import { Inter } from 'next/font/google';
const colors = require('tailwindcss/colors');
import Link from 'next/link';

import InstagramIcon from '../../public/instagram_icon.svg';
import YoutubeIcon from '../../public/youtube_icon.svg';
import LinkedInIcon from '../../public/linkedin_icon.svg';
import GithubIcon from '../../public/github_icon.svg';
import TwitterIcon from '../../public/twitter_icon.svg';

export default function Home() {
  return (
    <div className="font-mono">
      <section 
        id="landing" 
        className="flex flex-col flex-wrap bg-white text-teal-800 justify-center items-center h-screen w-screen"
      >
        <div className="text-3xl sm:text-4xl md:text-6xl mb-4 text-center">
          Chris Martin
        </div>
        <div className="text-xl sm:text-2xl md:text-4xl mb-4 text-center">
          Freelance software developer
        </div>
        <div className="text-lg">
          <Link scroll={false} href="#links" className="underline underline-offset-4">
            links
          </Link> 
          {/* {` • `}
          <Link scroll={false} href="#contact" className="underline underline-offset-4">
            contact
          </Link>  */}
        </div>
      </section>
      <section 
        id="links" 
        className="flex flex-col flex-wrap bg-white text-teal-800 justify-center items-center h-screen w-screen"
      >
        <div className="text-2xl md:text-3xl mb-4">
          chrdevmar on {' '}       
          <Link scroll={false} href="https://linktr.ee/chrdevmar" target="_blank" className="underline underline-offset-4">
            everything
          </Link> 
        </div>
        <div className="flex mb-4">
          <Link href="https://github.com/chrdevmar" target="_blank">
            <GithubIcon fill={colors.gray['400']} width="50px" className="mr-2"/>          
          </Link>
          <Link href="https://linkedin.com/in/chrdevmar" target="_blank">
            <LinkedInIcon fill={colors.gray['400']} width="50px" className="mr-2"/>          
          </Link>
          <Link href="https://instagram.com/chrdevmar" target="_blank">
            <InstagramIcon fill={colors.gray['400']} width="50px" className="mr-2"/>          
          </Link>
          <Link href="https://youtube.com/@chrdevmar" target="_blank">
            <YoutubeIcon fill={colors.gray['400']} width="50px" className="mr-2"/>          
          </Link>
          <Link href="https://twitter.com/chrdevmar" target="_blank">
            <TwitterIcon fill={colors.gray['400']} width="50px"/>
          </Link>
        </div>
        <div className="text-lg">
          <Link scroll={false} href="#landing" className="underline underline-offset-4">
            top
          </Link> 
          {/* {` • `} */}
          {/* <Link scroll={false} href="#contact" className="underline underline-offset-4">
            contact
          </Link> */}
        </div>
      </section>
      {/* <section 
        id="contact" 
        className="flex flex-col flex-wrap bg-white text-teal-800 justify-center items-center h-screen w-screen"
      >
        <div className="text-3xl mb-2 text-center">
          Chat with my assistant
        </div>
        <div className="text-lg">
          <Link scroll={false} href="#links" className="underline underline-offset-4">
            links
          </Link>
          {` • `}
          <Link scroll={false} href="#landing" className="underline underline-offset-4">
            top
          </Link> 
        </div>
      </section> */}
    </div>
  )
}