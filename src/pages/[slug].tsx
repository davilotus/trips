import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // Retorna um lodind ou qualquer coisa enquanto está sendo criado
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

// gera as urls em build time
export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug } // slug é o valor que vai gerar o slug da página, por isso dá nome ao arquivo
  }))

  return { paths, fallback: true }
}

// gera o contéudo da página em build tim
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths => serve para gerar as url das páginas (build time) /about /trip/belo-horizonte
// getStaticProps => serve para buscar os dados da página (props) - build time porque é um estático
// getServerSideProps => server para buscar os dados da página - runtime, poqeue roda em toda a requisição (bundle fica no server)
// getInitialProps => server para buscar os dados da página - runtime, poqeue roda em toda a requisição (bundle também vem para o client) - hydrate (mas está caindo em desuso e o next não mais recomenda)
