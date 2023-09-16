import { TypeAnimation } from 'react-type-animation';
import Styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div>
      <div className={Styles.container}>
        <TypeAnimation 
          sequence={[
            `Hai, Saya Jedidta Adoni Saputra aka Arnold\n Saya seorang web programmer di bagian Frontend.`,
          ]}
          repeat={Infinity}
          style={{
            color: 'white',
            whiteSpace: 'pre-line',
            display: 'blox',
            textAlign: 'center',
          }}
        />
      </div>
    </div>
  )
}

export default AboutMe;