import Link from 'next/link'

export default function HomeButton() {
  return (
    <div>
      <Link href="/">
        <a>
          <h1>
            Back
          </h1>
        </a>
      </Link>
    </div>
  )
}
