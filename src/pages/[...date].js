import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useEffect, useState } from 'react'

export default function DateSlug() {
  const [time, setTime] = useState()
  useEffect(() => {
    setTime(new Date().toISOString())
  }, [])
  return (
    <>
      <h1>{time}</h1>
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
