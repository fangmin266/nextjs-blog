import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UserInfo() {
  const router = useRouter()
  const { username, info } = router.query
  const [time, setTime] = useState()

  useEffect(() => {
    setTime(new Date().toISOString())
  }, [])
  return (
    <>
      <h1>
        {time} {username} {info}
      </h1>
    </>
  )
}

UserInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
