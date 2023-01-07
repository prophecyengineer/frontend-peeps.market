import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[70vh] w-full relative border-b-4 border-b	mb-8 mt-16 text-2xl-semi ml-5 mr-5">
      <div className=" ">
        <h1 className=" absolute top-24 right-24 mb-4 text-center max-w-[42rem] ">
        Snoop&apos;s bringin&apos; the funk, come and sell your stuff
        </h1>
        <p className="text-base-regular  top-64 right-24   max-w-[24rem] absolute   drop-shadow-md shadow-black">
        Sellin&apos; my stuff, and I&apos;m bringin&apos; my fans along
Join me on my marketplace, let&apos;s make this thing strong
          <br />
          <br/>
{/* Bring your art, bring your merch, let's make this marketplace burst
with creativity and style, let's go the extra mile
          <br />
          <br/> */}
You and me can sell our stuff together and make some dough
Sell your crafts, let your creativity flow

   
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
        className="absolute inset-0 spreadPicture"
        draggable="false"
      />
    </div>
  )
}

export default Hero
