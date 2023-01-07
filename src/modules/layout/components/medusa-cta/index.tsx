import Image from "next/image"

const MedusaCTA = () => {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <div className="content-container flex justify-center flex-2">
        <a href="https://peeps.market" target="_blank" rel="noreferrer">
          <PoweredBy />
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return (
    <div className='poweredBy'>
    powered by
      <Image
            src="/logofull.png"
            alt=""
            
                width="200px"
                height="40px"
            className="absolute "
          />
         
       
      </div>
  )
}

export default MedusaCTA
