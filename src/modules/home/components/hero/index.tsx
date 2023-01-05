import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative bg-black	">
      <div className="text-white  ">
        <h1 className=" absolute top-24 right-24 mb-4 text-center max-w-[42rem] ">
        Snoop's bringin' the funk, come and sell your stuff
        </h1>
        <p className="text-base-regular  top-64 right-24   max-w-[24rem] absolute   drop-shadow-md shadow-black">
        Sellin' my stuff, and I'm bringin' my fans along
Join me on my marketplace, let's make this thing strong
          <br />
          <br/>
{/* Bring your art, bring your merch, let's make this marketplace burst
with creativity and style, let's go the extra mile
          <br />
          <br/> */}
You and me can sell our stuff together and make some dough
Sell your crafts, let your creativity flow
<br/>
          <br/>
Together we can build an ecosystem of trade
And make some passive income, ain't that great?

        </p>
        
     





      </div>
      <Image
        src="/snoop.png"
        layout="fill"
        loading="eager"
        priority={true}
        quality={100}
        objectFit="cover"
     
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0 "
        draggable="false"
      />
    </div>
  )
}

export default Hero
