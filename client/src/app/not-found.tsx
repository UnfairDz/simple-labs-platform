import Link from "next/link"
import Image from 'next/image'

import Header from './components/Header'

import { jua } from './fonts'

import './not-found.css'


export default function NotFound() {
  return (
    <>
      <Header />
      <section className="error-section">
        <Image className="error-image" src="/images/error.png" alt="error image" width="160" height="160" />
        <p className={jua.className + " error-text"}>
          There was a problem.<br />
          We could not find the page you were looking for.
        </p>
        <Link className={jua.className + " error-button"} href="/">Go back to the Homepage</Link>
      </section>
    </>
  )
}