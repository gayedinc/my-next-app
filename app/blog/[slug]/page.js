export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <>
      <h2>Blog Detay Sayfam</h2>
      <p>Bu sayfanın ismi: {slug}</p>
    </>
  )
}