import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ params }) => {
  return json({ slug: params.slug })
}

export default function Page() {
  const { slug } = useLoaderData()

  return (
    <main className='mx-auto max-w-4xl'>
      <h1 className='my-6 border-b-2 text-center text-3xl'>
        Some Post {slug}
      </h1>
    </main>
  )
}