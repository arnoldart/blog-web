import Styles from '~/styles/LatestPost.module.css'

const LatestPost = () => {
    return (
        <div className={Styles.section}>
            <div className={Styles.container}>
                <p className={Styles.header}>Latest Post</p>
                <div>
                    <div className={Styles.box_title_content}>
                        <p className={Styles.title_content}>Belajar Membuat Dokumentasi API Dengan Swagger Laravel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPost