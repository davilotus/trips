import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter()

  // Retorna um loadind ou qualquer coisa enquanto está sendo criado
  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

// gera as urls em build time
export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3 // gera apenas as 3 primeiras páginas
  })

  const paths = places.map(({ slug }) => ({
    params: { slug } // slug é o valor que vai gerar o slug da página, por isso dá nome ao arquivo
  }))

  return { paths, fallback: true }
}

// gera o contéudo da página em build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true } // Caso a ppágina não exista retorna 404

  return {
    revalidate: 5,
    props: {
      place
    }
  }
}
