import {tw} from 'twind'

export default function CardProject({img, alt, title, desc, date}) {
  return(
    <>
      <div className={tw `w-80 bg-gray-500 rounded-2xl`}>
        <div>
          <img className={tw `rounded-t-2xl`} src={img} alt={alt}/>
        </div>
        <div className={tw `text-white p-4 `}>
          <h3>Judul</h3>
          <p className={tw `my-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sunt. Placeat odio nemo repellendus.</p>
          <p>2-feb-2021</p>
        </div>
      </div>
    </>
  )
}