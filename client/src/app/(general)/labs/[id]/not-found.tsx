import Link from "next/link"
import Image from 'next/image'

import { jua } from '../../../fonts'

import '../../../not-found.css'

export default function NotFound() {
  return (
    <section className="error-section">
        <Image className="error-image" src="/images/error.png" alt="error image" width="160" height="160" />
        <p className={jua.className + " error-text"}>
          We Hit a Brick Wall.<br />
          We could not find the lab you were looking for.
        </p>
        <Link className={jua.className + " error-button"} href="/">Go back to the Homepage</Link>
    </section>
  )
}