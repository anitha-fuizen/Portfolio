import { RiGithubFill ,RiLinkedinFill} from "react-icons/ri"
import Link from "next/link"

const Icons=[
  {
    path:'https://github.com/anitha-fuizen',
    name:<RiGithubFill/>
  },
  {
    path:'https://www.linkedin.com/in/your-linkedin-Anitha Yeruva',
    name:<RiLinkedinFill/>
  }
]
const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
     {Icons.map((icon,index)=>{
         return(
          <Link href={icon.path} key={index} target="blank">
          <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
         )
     })}
    </div>
  )
}

export default Socials