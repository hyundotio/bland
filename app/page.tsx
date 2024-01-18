import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/bland.svg"
        alt="Bland Corp Logo"
        className={styles.blandLogo}
        width={320}
        height={320}
        priority
      />
    </main>
  )
}
