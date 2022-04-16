import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Trips"
        description="Projeto para exibir as viagens que já fiz ou quero fazer"
        canonical="https://www.davidsonsilva.com.br"
        openGraph={{
          url: 'https://www.davidsonsilva.com.br',
          site_name: 'Trips',
          type: 'website',
          description:
            'Projeto para exibir as viagens que já fiz ou quero fazer',
          images: [
            {
              url: 'https://www.davidsonsilva.com.br/wp-content/uploads/2016/12/notebook-davidson-silva.jpg',
              width: 1920,
              height: 1177,
              alt: 'Trips'
            }
          ]
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size="32" aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
