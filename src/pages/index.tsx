
import FeaturedPeeps from "@modules/home/components/featured-peeps"




import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import CollectionTemplate from "@modules/collections/templates"
import { useCollections } from "medusa-react"

const Home: NextPageWithLayout = () => {
  const { collections } = useCollections()
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      {collections && collections.map(collection => {
        return (
          <CollectionTemplate
            key={collection.id}
            collection={{
            id: collection.id,
            title: collection.title
    
          }} />
        )
      })}
{/*    
         <CollectionTemplate collection={{
        id: "pcol_01GNZSTKFFDHWNR10ARZQG5RWB",
        title: "King Ice"

      }} />
      <CollectionTemplate collection={{
        id: "pcol_01GNZSW7CZAASQCSVTRSMSF0YA",
        title: "Christmas Collection"

      }} />
      <CollectionTemplate collection={{
        id: "pcol_01GNZSY1XMXXJQ77V8P4KEBGVS",
        title: "Featured Peeps"

      }} /> */}


          {/* <FeaturedPeeps /> */}
     
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home