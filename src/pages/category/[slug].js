import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query
  const [time, setTime] = useState()

  useEffect(() => {
    setTime(new Date().toISOString())
  }, [])
  return (
    <>
      <h1>
        {time} {slug} {from}
      </h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
