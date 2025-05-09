import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <>
      <h1>Gaye Blog</h1>
      <Link prefetch={true} href={'/blog'}>Blog Anasayfa</Link>
      {children}
    </>
  )
}