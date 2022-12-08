import { Link, useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import type { Projects } from '~/models/projects'
import { getProjects } from '~/queries/projects'
import { Banner } from '~/components/banner/banner'

type LoaderData = {
  projects: Projects;
}

export const loader: LoaderFunction = async () => {
  const projects = await getProjects()
  return { projects }
}

export default function Index() {
  const { projects } = useLoaderData<LoaderData>()

  return (
    <main className='container'>
      <Banner />
      <section className='my-10'>
        <h2></h2>
        <ul>
          {projects?.map((project) => (
            <li key={project.slug}>
              <Link to={`/experiments/${project.slug}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
