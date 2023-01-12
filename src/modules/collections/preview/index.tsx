import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { fetchCollectionProducts } from "@pages/collections/[id]"
import { useCart } from "medusa-react"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "react-query"
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

type CollectionPreviewProps = {
  collection: {
    id: string
    title: string
   
  },

}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  collection
}) => {
  const { cart } = useCart()
  const { ref, inView } = useInView()
  const {
    data: infiniteData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery(
    [`get_collection_products`, collection.id, cart?.id],
    ({ pageParam }) =>
      fetchCollectionProducts({
        pageParam,
        id: collection.id,
        cartId: cart?.id,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const previews = usePreviews({
    pages: infiniteData?.pages,
    region: cart?.region,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <div className="collectionCard">
      
      <div className="carouselTitle">
        <h1>{collection.title}</h1>
      </div>
      {/* <ul className="grid grid-cols-2 small:grid-cols-4 medium:grid-cols-4 gap-x-4 gap-y-8"> */}
      <Swiper
          spaceBetween={30}
          
         slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper carousel"
            >
             
        {previews.map((p) => (

          <SwiperSlide key={p.id}>
        
            
            
<ProductPreview  {...p} />
</SwiperSlide>
          
        
        ))}
              </Swiper>
        {isLoading &&
          !previews.length &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(infiniteData?.pages)).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}

              
        

     
    
    
      {/* </ul> */}
      <div
        className="py-16 flex justify-center items-center text-small-regular text-gray-700"
        ref={ref}
      >
        <span ref={ref}></span>
      </div>
   
      </div>
  )
}

export default CollectionPreview
