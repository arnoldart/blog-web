import CardProject from '../CardProject'
import {CardOne} from './Data'
import {tw} from 'twind'

export default function DataProjects() {
  return(
    <>
      <main className={tw `flex justify-evenly`}>
        <CardProject {...CardOne} />
        <CardProject {...CardOne} />
        <CardProject {...CardOne} />
      </main>
    </>
  )
}