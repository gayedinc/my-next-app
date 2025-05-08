import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h3>Son Yazılarım</h3>
      <ul>
        <li><Link href={'/blog/merhaba-dunya'}>Merhaba Dünya</Link></li>
        <li><Link href={'/blog/ilk-next-projesi'}>Next Projesi</Link></li>
      </ul>
    </>
  )
}