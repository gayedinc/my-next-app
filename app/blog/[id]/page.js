export default async function Page({ params }) {
  const { id } = await params;
  const posts = await fetch(`https://dummyjson.com/posts/${id}`).then(x => x.json());

  return (
    <>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </>
  )
}