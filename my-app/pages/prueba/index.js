import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Prueba() {
  return (
    <div className={styles.container}>
        <h1>Prueba</h1>
        <Link href="/">Inicio</Link>
    </div>

  )
}
