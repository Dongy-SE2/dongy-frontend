export default async function ProductIDPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <p>Hello: {productId}</p>
    </>
  );
}
