import Link from 'next/link';
import WelcomeBox from './components/WelcomeBox';
import Navbar from './components/Navbar';
import SearchBusiness from './components/SearchBusiness';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <SearchBusiness />
      <WelcomeBox />
      <MainContent />
      <Footer />
    </main>
  )
}
