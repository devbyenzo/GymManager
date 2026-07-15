/* imports */
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DashboardPreview from '../components/dashboard/DashboardPreview';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

function App() {
  return (
    <>
      <section id="home" className="bg-zinc-900">
        <Navbar />
      </section>

      <Hero />

      <section id="features" className="py-24">
        <Features />
      </section>

      <section id="dashboard" className="py-24">
        <DashboardPreview />
      </section>

      <section id="testimonials" className="py-24">
        <Testimonials />
      </section>

      <section id="pricing" className="py-24">
        <Pricing />
      </section>

      <section id="cta" className="py-24">
        <CTA />
      </section>

      <section id="footer" className="py-24">
        <Footer />
      </section>
    </>
  );
}

export default App;
