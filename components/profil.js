import profile from '../public/images/profil.svg'
import {tw} from 'twind'

export default function Profile() {
  return (
    <>
      <div className={tw `flex flex-col sm:flex-row mx-10 sm:mx-20 bg-gray-700 p-8 rounded-lg text-white items-center mt-16 sm:mt-20`}>
        <div>
          <img src={profile} alt="img"/>
        </div>
        <div className={tw `ml-0 sm:ml-8 mt-10 sm:mt-0 text-center sm:text-left`}>
          <h1 className={tw `font-bold text-3xl sm:text-5xl mb-8`}> Halo semua <br className={tw `hidden sm:block`}/><span>perkenalkan saya Arnold.</span></h1>
          <p className={tw `text-xl text-gray-200`}>Seorang Junior Front End Developer, saya juga membagikan tips tips dan project sekaligus dengan source code nya</p>
        </div>
      </div>
    </>
  )
}