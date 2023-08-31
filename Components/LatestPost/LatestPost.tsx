import Styles from '~/Components/LatestPost/LatestPost.module.scss'
import Image from "next/image"

const LatestPost = () => {
  return (
    <div className={Styles.section}>
      <div className={Styles.container}>
        <p className={Styles.header}>Latest Post</p>
        <div style={{ display: "flex"}}>
          <div className={Styles.box_title_content}>
            <p className={Styles.title_content}>Belajar Membuat Dokumentasi API Dengan Swagger Laravel</p>
          </div>
          {/* <div className={Styles.tus}>
            <Image 
              fill
              src={"/img/banner.png"} 
              alt='test'
              sizes='100vw'
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
              quality={100}
              width={1200}
              height={550}
              // className={Styles.test}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LatestPost