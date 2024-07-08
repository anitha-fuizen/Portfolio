import { Form } from "@/components/Form"
import { HomeIcon, MailIcon, Phone } from "lucide-react"


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div  className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary "></span>
              Say Hello
              </div>
              <h1 className="h1 mx-w-md mb-8">Contact me here</h1>
              <p className="subtitle mx-w-[400px]">
              Have something to share? I'd love to hear your suggestions or feedback
              </p>

            
          </div>
          <div className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-no-repeat">
           
            </div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            {/* {info text} */}
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary"/>
                <div>anitha.yeruva961@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary"/>
                <div>Vinukonda</div>
              </div>
              <div className="flex items-center gap-x-8">
                <Phone size={18} className="text-primary"/>
                <div>1234567890</div>
              </div>
            </div>
            <Form/>
          </div>
      </div>
    </section>
  )
}

export default Contact