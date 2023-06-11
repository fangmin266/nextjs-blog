import Link from 'next/link'

export async function getServerSideProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
  }
}
export default function Home({ time }) {
  return (
    <>
      <main>
        <h1>{time}</h1>
        <h1 className="flex flex-col gap-y-2">
          <Link href="/csr">CSR</Link>
          <Link href="/ssg">SSG</Link>
          <Link href="/isr">ISR</Link>
        </h1>
      </main>
    </>
  )
}
