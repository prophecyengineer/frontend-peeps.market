
import FeaturedPeeps from "@modules/home/components/featured-peeps"




import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import CollectionTemplate from "@modules/collections/templates"
import { useCollections } from "medusa-react"
import CollectionPreview from "@modules/collections/preview"
import Footer from "@modules/layout/templates/footer"

const Home: NextPageWithLayout = () => {
  const { collections } = useCollections()
  return (
    <>
      <Head
        title="SnooperMarketplace"
        description="Shop all available"
      />
      <Hero />
      {/* {collections && collections.map(collection => {
        return (
          <CollectionTemplate
            key={collection.id}
            collection={{
            id: collection.id,
              title: collection.title,
             videoUrl: String(collection?.metadata?.videoUrl)
    
          }} />
        )
      })} */}

     
    


      {/* <CollectionPreview collection={{
        id:  "pcol_01GNZSX4E78BQBD72T435W2JYQ",
        title: "DoggyStyle"

      }} /> */}
<CollectionPreview collection={{
        id: "pcol_01GP1QX742ZVADHYKBK548H83F",
        title: "DoggyStyle"

      }} />
   
         <CollectionPreview collection={{
        id: "pcol_01GP1QVFD8VP4HEAFFHYQAV07T",
        title: "King Ice"

      }} />
      <CollectionPreview collection={{
        id: "pcol_01GP1QXQFEP6W5H7VZ3HH3FTVB",
        title: "Christmas Collection"

      }} />
      <CollectionPreview collection={{
        id: "pcol_01GP1QYAXK2QN49WSFZ4430HEJ",
        title: "Featured Peeps"

      }} />


      {/* <FeaturedPeeps /> */}
      
     
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home



