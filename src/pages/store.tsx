import { StoreGetProductsParams } from "@medusajs/medusa"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { NextPageWithLayout } from "types/global"

const Store: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
      <Head title="Store" description="Explore all of our products." />
      <div className="flex flex-col small:flex-row small:items-start py-6">
        <RefinementList refinementList={params} setRefinementList={setParams} />
        <InfiniteProducts params={params} type={"original"} />
      </div>
      <h1>Peep's Merch</h1>
      <div className="flex flex-col small:flex-row small:items-start py-6">
 
        <RefinementList refinementList={params} setRefinementList={setParams} />
        <InfiniteProducts params={params} type={"featured"} />
      
      </div>
      {/* <h1>Featured Peeps</h1> */}
    </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store