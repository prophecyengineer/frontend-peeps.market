import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`} >
      <a >
        <div    >
          <div className="transition transform-gpu duration-500 ease-in-out thumbnailImg shadow-lg hover:shadow-lg hover:scale-105 hover:-translate-y-3 p-5">
            <Thumbnail thumbnail={thumbnail} size="full" />
            </div>
          <div className="text-base-regular  mt-2">
            <div className="textTitleBox">
              <span className="textProduct">{title}</span>
              
              </div>
            <div className="flex items-center gap-x-2 mt-1">
              {price ? (
                <>
                  {price.price_type === "sale" && (
                    <span className="line-through text-gray-500">
                      {price.original_price}
                    </span>
                  )}
                  <span
                    className={clsx("font-semibold", {
                      "text-rose-500": price.price_type === "sale",
                    })}
                  >
                    {price.calculated_price}
                  </span>
                </>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
