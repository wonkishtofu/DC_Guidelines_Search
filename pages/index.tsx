import Heead from 'next/head'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import { HoverCard } from '@radix-ui/react-hover-card'

export default function Home() {
  return (
  <>
    <Heead>
      <title>DC Guidelines Search</title>
      <meta
        name="description"
        content="This RAG Search runs on Next.js, Supabase, GPT-3, and a lotta coffee ☕."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Heead>
    <main className={styles.main}>
      <div className={styles.center}>
        <SearchDialog/>
      </div>

      <div className="py-8 w-full flex items-center justify-center space-x-6">
      <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
          <Link href="https://www.ura.gov.sg/Corporate/" className="flex items-center justify-center">
          <p className="text-base mr-2">©2023 Urban Redevelopment Authority, Design and Planning Lab</p>
          {/* <Image src={'/logo.webp'} width="60" height="26" alt="URA logo" /> */}
          </Link>
      </div>
      <HoverCard>
            <a
              href="https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/"
              target="_blank"
            >
              <Image
                src={'/logo.webp'}
                width="120"
                height="60"
                className="absolute bottom-5 right-5"
                alt="URA logo"
              />
            </a>
          </HoverCard>

      </div>
  </main>
  </>
  )
}
