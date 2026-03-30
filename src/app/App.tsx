// import { Hero } from '@/features/hero'
// import { Footer } from '@/widgets/footer'
import { Layout } from '@shared/ui'
import Header from './widgets/Header/Header'
import Hero from './widgets/Hero/Hero'
import Services from './widgets/Services/Services'
import { About } from '@app/widgets/About'
import { Ticker } from '@app/widgets/Ticker'
import { Cursor } from '@shared/ui/Cursor/Cursor'
function App() {
  return (
    <>
      <Cursor />
      {/* <Layout>
        <Header />
        <Hero />
      </Layout>

      <Ticker /> */}
      <About />
      {/* <Services />
      <About /> */}
    </>
  )
}

export default App
