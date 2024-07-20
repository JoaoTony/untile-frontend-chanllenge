import {FC} from 'react'
import styles from './home.module.css'
import Header from '~/components/navbar'

const HomePage: FC = () => {
  return(
    <div className={styles.container}>
      <Header/>
    </div>
  )
}

export default HomePage