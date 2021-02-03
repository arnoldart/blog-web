import {tw} from 'twind'

export default function CardProject({img, alt, title, desc, date}) {
  return(
    <>
      <div className={tw `w-80 h-96 bg-gray-500 rounded-2xl mt-0 transition-all duration-500 sm:hover:-mt-10 hover:shadow-md`}>
        <div>
          <img className={tw `rounded-t-2xl`} src={img} alt={alt}/>
        </div>
        <div className={tw `text-white p-4 `}>
          <h3>{title}</h3>
          <p className={tw `my-5`}>{desc}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  )
}