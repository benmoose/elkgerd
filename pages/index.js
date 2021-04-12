import Head from 'next/head'
import Image from 'next/image'

import SoundcloudPlayer from "../components/soundcloudPlayer"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
        <Head>
          <title>Elk Gerd | Techno & House DJ</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <nav className={styles.nav}>/eg.</nav>

        <main className={styles.sky}>
          <h1 className={styles.title}>elk gerd</h1>
          <h2 className={styles.subtitle}>warm house & techno</h2>
          <div className={styles.box} />
          <div className={styles.page}>
            <div className={styles.content}>
              <h2>Latest DJ set</h2>
              <SoundcloudPlayer src='https://soundcloud.com/bleaknarrative/bleak016-jellyhead-generation-by-elk-gerd' />
            </div>
          </div>
          <div className={styles.image}>
            <Image src='/elkgerd.jpg' width={995} height={835} />
          </div>
        </main>
      </>
  )
}
