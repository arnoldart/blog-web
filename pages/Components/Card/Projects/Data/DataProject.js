import CardProject from '../CardProject'
import {CardOne} from '../../../../../Data'
import {tw} from 'twind'

export default function DataProjects() {
  return(
    <>
      <main className={tw `flex justify-evenly items-center flex-col sm:flex-row`}>
        <CardProject {...CardOne} />
        <div className={tw `my-10 sm:my-0`}>
          <CardProject {...CardOne} />
        </div>
        <CardProject {...CardOne} />
      </main>
    </>
  )
}