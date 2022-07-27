import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>This is the homepage</p>
      <Link href="/aboutApp">
        <a>See the planning story</a>
      </Link>
      <Footer />
    </div>
  )
}
