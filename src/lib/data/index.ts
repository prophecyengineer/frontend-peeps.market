import { medusaClient } from "@lib/config"
import { Product, StoreGetProductsParams } from "@medusajs/medusa"
// import { useRouter } from "next/router"

const COL_LIMIT = 15

const pathLookUpTable = [
  {
      "id": "ptag_01GJBHT10MYRKQV7ABAAFH9ZNT",
      "created_at": "2022-11-20T22:16:12.000Z",
      "updated_at": "2022-11-20T22:16:12.000Z",
      "value": "featured_emma"
  },
  {
      "id": "ptag_01GJBH4R5DFD3N8XC9WT0QGR8D",
      "created_at": "2022-11-20T22:04:34.000Z",
      "updated_at": "2022-11-20T22:04:34.000Z",
      "value": "original_emma"
  },
  {
      "id": "ptag_01GJBEHKJKKPP0V18BDZEGYTCW",
      "created_at": "2022-11-20T21:19:10.000Z",
      "updated_at": "2022-11-20T21:19:10.000Z",
      "value": "faved_beast"
  },
  {
      "id": "ptag_01GJBEGKSFHVGCHRZ0AAME66SC",
      "created_at": "2022-11-20T21:18:37.000Z",
      "updated_at": "2022-11-20T21:18:37.000Z",
      "value": "featured_beast"
  },
  {
      "id": "ptag_01GJBEF6WC8MDE7WMFQBBERKAY",
      "created_at": "2022-11-20T21:17:51.000Z",
      "updated_at": "2022-11-20T21:17:51.000Z",
      "value": "original_beast"
  },
  {
      "id": "ptag_01GJ8SPYTH2PCRHR937JQF4CP5",
      "created_at": "2022-11-19T20:36:36.000Z",
      "updated_at": "2022-11-19T20:36:36.000Z",
      "value": "beast"
  }
]
const getFeaturedProducts = async (): Promise<Product[]> => {
  const payload = {} as Record<string, unknown>

  if (process.env.FEATURED_PRODUCTS) {
    payload.id = process.env.FEATURED_PRODUCTS as string
  } else {
    payload.limit = 3
  }
  const products = await medusaClient.products
    .list(payload)
    .then(({ products }) => products)
    .catch((_) => [])

  return products
}

// get global data used in header and footer
const getGlobalData = async () => {
  let totalCount = 0

  const collections = await medusaClient.collections
    .list({ limit: COL_LIMIT })
    .then(({ collections, count }) => {
      totalCount = count
      return collections
    })
    .catch((_) => undefined)

  const featuredProducts = await getFeaturedProducts()

  return {
    navData: {
      hasMoreCollections: totalCount > COL_LIMIT,
      collections:
        collections?.map((c) => ({ id: c.id, title: c.title })) || [],
      featuredProducts,
    },
  }
}

export const getSiteData = async () => {
  const globalData = await getGlobalData()

  return {
    site: globalData,
  }
}

// get data for a specific product, as well as global data
export const getProductData = async (handle: string) => {
  const data = await medusaClient.products
    .list({ handle })
    .then(({ products }) => products)

  const product = data[0]

  if (!product) {
    throw new Error(`Product with handle ${handle} not found`)
  }

  return {
    page: {
      data: product,
    },
  }
}

const getInitialProducts = async (collectionId: string) => {
  const result = await medusaClient.products
    .list({ collection_id: [collectionId], limit: 10 })
    .then(({ products, count }) => {
      return {
        initialProducts: products,
        count: count,
        hasMore: count > 10,
      }
    })
    .catch((_) => ({ initialProducts: [], count: 0, hasMore: false }))
    console.log("result", {result})

  return result
}

// get data for a specific collection, as well as global data
export const getCollectionData = async (id: string) => {
  const siteData = await getGlobalData()

  const data = await medusaClient.collections
    .retrieve(id)
    .then(({ collection }) => collection)
    .catch(() => undefined)

  if (!data) {
    throw new Error(`Collection with handle ${id} not found`)
  }

  const additionalData = await getInitialProducts(id)

  return {
    page: {
      data,
      additionalData,
    },
    site: siteData,
  }
}

type FetchProductListParams = {
  pageParam?: number
  queryParams: StoreGetProductsParams
  type?: string 
  user?: string 
}

export const fetchProductsList = async ({
  pageParam = 0,
  queryParams,
  type = 'featured',
  user = '',
  ...rest

}: FetchProductListParams) => {

  // const  productTags =  await medusaClient.admin.products.listTags()

  const tags = (userHandle: string) => {
    return pathLookUpTable
      .filter(user => user.value.includes(type))
      .filter(user => user.value.includes(userHandle.replace("/", "")))
      .map(e => e.id)
  }

  const tagsList = tags(user)

  const { products, count, offset } = await medusaClient.products.list({
    limit: 12,
  
    offset: pageParam,
    ...queryParams,
    tags: tagsList,
  })
  // ["ptag_01GJ8SPYTH2PCRHR937JQF4CP5"]


  console.log("products fetchProductsList", {products, rest, 'tags(rest?.user)':tags(user), type})

  return {
    response: { products, count },
    nextPage: count > offset + 12 ? offset + 12 : null,
  }
}
