// 'use client'
import Nav from "~/app/Components/Navbar/Navbar";
import Styles from './page.module.scss'
import ArticleCard from "../Components/ArticleCard/ArticleCard";

const Project = async () => {
  return (
    <section className={Styles.section}>
      <Nav/>
      <div className={Styles.container}>
        <p className={Styles.title}>PROJECT POSTS</p>
        <ArticleCard />
      </div>
    </section>
  )
}

export default Project
