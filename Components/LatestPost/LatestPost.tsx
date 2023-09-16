import Styles from '~/Components/LatestPost/LatestPost.module.scss'
import Image from "next/image"

const LatestPost = () => {
  return (
    <div className={Styles.section}>
      {/* <div className={Styles.container}>
        <div style={{ display: "flex"}}>
        <div className={Styles.box_title_content}>
        <p className={Styles.title_content}>Belajar Membuat Dokumentasi API Dengan Swagger Laravel</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Image 
        src="/img/banner.png" 
        width={300} 
        height={200}
        alt='banner'
        
        />
        </div>
        </div>
      </div> */}
      {/* <div className={Styles.header}>
        <p className={Styles.header_title}>Latest Post</p>
      </div>
      <div className={Styles.container}>
        <div className={Styles.box_title_content}>
          <div className={Styles.container_content}>
            <p className={Styles.title_content}>Belajar Membuat Dokumentasi API Dengan Swagger Laravel</p>
            <p>04.12.2023</p>
          </div>
        </div>
        <div className={Styles.test}>
          <Image
            src="/img/banner.png"
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
          />
        </div>
      </div> */}
      
    </div>
  )
}

export default LatestPost