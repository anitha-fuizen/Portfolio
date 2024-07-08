import Image from "next/image"


const Devimg = ({containerStyles,imgSrc,imageStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc}  priority alt="" className={imageStyles} width={420} height={390}/>
    </div>
  )
}

export default Devimg