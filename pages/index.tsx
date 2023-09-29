import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
  <>
    <Head>
      <title>DC Guidelines Search</title>
      <meta
        name="description"
        content="This RAG Search runs on Next.js, Supabase, GPT-3, and a lotta coffee ☕."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={styles.center}>
        <SearchDialog/>
      </div>

      <div className="py-8 w-full flex items-center justify-center space-x-6">
      <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
          <Link href="https://www.tech.gov.sg/capability-centre-dsaid/" className="flex items-center justify-center">
          <p className="text-base mr-2">© 2023 Data Science and Artificial Intelligence Division, GovTech</p>
          <Image src={'/dsaid.svg'} width="60" height="26" alt="DSAID logo" />
          </Link>
      </div>
      </div>
  </main>
  </>
  )
}
