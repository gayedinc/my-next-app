import Link from 'next/link';

export default async function Page() {

  const { posts } = await fetch('https://dummyjson.com/posts').then(x => x.json());

  return (
    <>
      <h3>Son Yazılarım</h3>
      <Link href={`/blog/add`}>Yeni</Link>
      <hr />
      <ul>
        {posts.map(x =>
          <li key={x.id}>
            <Link href={`/blog/${x.id}`}>{x.title}</Link>
          </li>)}
      </ul>
    </>
  )
}