import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[45vh] w-full relative  ">

    <div className="m-16 flex justify-center items-center mainHero  " role="main">
      <div className="px-16 heroBoxInner ">
        {/* <p className="h-10">🪴 Plant-a-holic</p> */}
        {/* <hr className="w-3/5" /> */}
        <h1
          className="mt-6 text-5xl text-primary font-headline tracking-tight  leading-snug"
          role="heading"
          // aria-level="1"
        >
           Snoop&apos;s bringin&apos; the funk<br /> 
    
          </h1>
          <h1 className="-mt-2  " role="heading" 
            > <span className=" text-5xl text-primary">come and  </span> sell your stuff </h1 >
        <p className="w-3/5 mt-2 text-primary text-lg" >
      
        </p>
        <div className="mt-8 flex  btnBox "  role="button">
          <a
            className="flex items-center justify-center px-8 py-3   rounded-md btn btn-primary shadow uppercase "
            href="/store"
            >See the collection</a
          >
          <a
            className="flex items-center justify-center px-8 py-3 ml-4 rounded-md btn btn-outline shadow uppercase submitBtn"
            href="https://peeps.market/fans"
            >Submit yours</a
          >
        </div>
      </div>
      <div className="mr-40 imgBox" role="img">
     
          
          <img className="imgSnoop border-2 border-tertiary object-cover object-center w-96 " width='400px' height='400px' src="https://media3.giphy.com/media/9E7UurxqZ6d9yyy8ET/giphy.gif?cid=790b76117eb4865ca1e353deb4b0e68bc19a2a3a749a11a2&rid=giphy.gif&ct=g"/>

      </div>
    </div>
 




  
    </div>
  )
}

export default Hero
