import styles from '../styles/Home.module.css'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export function Main({title,page}) {
  return (
      <main className={styles.main}>
        <Headline title = {title} page={page}/>
        <Links />
      </main>
  );
}
