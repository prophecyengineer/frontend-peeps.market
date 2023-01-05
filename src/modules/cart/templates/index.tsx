 // @ts-nocheck
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import DiscountCode from "@modules/checkout/components/discount-code"
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page"
import { useCart, useMeCustomer } from "medusa-react"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import ItemsTemplate from "./items"
import Summary from "./summary"

const CartTemplate = () => {
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />
  }

  console.log('items', items)
  const newCarts = {}

  items && items.map(item => {
    const seller = item.variant.product?.tags?.filter(tag => tag?.value?.includes("original_"))[0]?.value?.replace("original_", '') || "**not assigned to seller product**"
    newCarts[seller] = {
      ...cart,
      items: !newCarts[seller]?.items ? [item] : [...newCarts[seller]?.items, item],
      total: item.original_total + newCarts[seller]?.total | 0,
      subtotal: item.original_total + newCarts[seller]?.subtotal | 0
    }
    newCarts[seller].total = newCarts[seller].items.reduce((acc, value) => acc + value.total, 0)
    newCarts[seller].subtotal = newCarts[seller].items.reduce((acc, value) => acc+  value.total , 0)

    console.log("newCarts[seller]", newCarts[seller])

    // delete newCarts[seller].items
    // const sellersItem = item.variant.product.tags.filter(tag => tag.value.includes(seller)).length > 0
    // console.log("sellersItem",{sellersItem, tags: item.variant.product.tags})
    // console.log("seller", { [seller]:{...cart, items: [sellersItem]} })

    // newCarts[seller].items =  newCarts[seller].items.filter(item => item.variant.product?.tags?.some(tag => tag?.value?.includes(seller)))
    // newCarts[seller] = {...newCarts[seller], items: items.variant.product.tags.filter(tag => tag.value.includes(seller)), }
  })

  const cartSort = () => {
    return 
  }
  console.log("itemsitems", {  newCarts, items })


  return (
    <div className="bg-gray-50 py-12">

      {Object.keys(newCarts).map(key => {
        console.log("newCarts[key]",newCarts[key])
        // const sellerCartItem = newCarts[key].items.map.variant.product?.tags?.filter(tag => tag.value.includes("original_"))[0].value.replace("original_", '')
        
        return (
          <div key={key} className="content-container">
            {/* {key} Checkout */}
          {cart.items.length ? (
            <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8">
              <div className="flex flex-col bg-white p-6 gap-y-6">
                {/* {!customer && <SignInPrompt />} */}
                <ItemsTemplate region={newCarts[key]?.region} items={newCarts[key].items} />
              </div>
                <div  className="relative">
                <div className="flex flex-col gap-y-8 sticky top-12">
                  {newCarts[key] && cart.region && (
                    <>
                      <div className="bg-white p-6">
                        <Summary cart={newCarts[key]} />
                      </div>
                      <div className="bg-white p-6">
                        <DiscountCode cart={newCarts[key]} />
                      </div>
                    </>
                  )}
                  
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* {!customer && <SignInPrompt />} */}
              <EmptyCartMessage />
            </div>
          )}
          
        </div>

        )
      })}
     
  
    </div>
  )
}

export default CartTemplate
