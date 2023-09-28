'use client';
import Styles from './AboutMe.module.scss';
import Image from 'next/image';
import ParticleBackground from '../ParticleBackground';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className={Styles.section}>
      <ParticleBackground/>
      <div className={Styles.container}>
        <div>
          <div id='myProfile' className={Styles.backgroundImage}>
            <Image 
              src={'/img/profil.png'} 
              alt={'test'}    
              priority={true}
              layout='fixed'
              width={99}
              height={99}
              style={{
                borderRadius: "100%"
              }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className={Styles.myContainer}>
            <p id='name' className={Styles.myName}></p>
            <p id='desc' className={Styles.myDesc}></p>
          </div>
          <div id='button'>
            <button className={Styles.button}>
              <Link href={"/Project"} className={Styles.button_link}>
                <p className={Styles.button_link_text}>SEE MY PROJECTS</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;