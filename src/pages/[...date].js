import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function DateSlug() {
  const [time, setTime] = useState()
  const router = useRouter()
  const { date } = router.query
  useEffect(() => {
    setTime(new Date().toISOString())
  }, [])
  return (
    <>
      <h1>{time}</h1>
      {/* {JSON.stringify(date)} */}
      {date}
    </>
  )
}

DateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
