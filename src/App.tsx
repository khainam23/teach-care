import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TechCare+',
  description:
    'Dịch vụ hỗ trợ người lớn tuổi dùng điện thoại, máy tính bảng, laptop, Smart TV và ứng dụng thiết yếu tại nhà.',
  url: 'https://techcareplus.vercel.app/',
  telephone: '+84337209580',
  email: 'khainam23@gmail.com',
  areaServed: ['TP.HCM', 'Hà Nội', 'Đà Nẵng'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Việt Nam',
    addressCountry: 'VN',
  },
  priceRange: '$$',
  sameAs: ['https://zalo.me/techcareplus'],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Hỗ trợ người lớn tuổi dùng điện thoại, máy tính, Smart TV tại nhà',
      },
    },
  ],
};

function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
