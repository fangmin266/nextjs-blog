import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1, //1초마다 isr(정적증분)
  }
}
export default function ISR({ time }) {
  return (
    <>
      <h1>{time}</h1>
    </>
  )
}
ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
