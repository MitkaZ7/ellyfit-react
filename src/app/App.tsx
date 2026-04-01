// import { Hero } from '@/features/hero'
// import { Footer } from '@/widgets/footer'
import { Layout } from '@shared/ui'
import Header from './widgets/Header/Header'
import Hero from './widgets/Hero/Hero'
import { Services } from './widgets/Services/Services'
import { About } from '@app/widgets/About'
import { Ticker } from '@app/widgets/Ticker'
import { Cursor } from '@shared/ui/Cursor/Cursor'
import { Philosophy } from '@app/widgets/Philosophy'
import { Nutrition } from './widgets/Nutrition'
import { Process } from './widgets/Process'
import { Reviews } from './widgets/Reviews'
import { Footer } from '@app/widgets/Footer'
function App() {
  return (
    <>
      <Cursor />
      <Layout>
        <Header />
        <Hero />
      </Layout>

      <Ticker />
      <Layout>
        <About />
        <Services />
        <Philosophy />
        <Process />
        <Nutrition />
        <Reviews />
        <Footer />
      </Layout>
    </>
  )
}

export default App
