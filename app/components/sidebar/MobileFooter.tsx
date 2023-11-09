'use client'

import useConversation from "@/app/hooks/useConversation"
import useRoutes from "@/app/hooks/useRoute"
import MobileItem from "./MobileItem"

 const MobileFooter = () => {
  const routes = useRoutes()
  const {isOpen} = useConversation()
  if(isOpen){
    return null
  }
   return (
     <div className="
     fixed justify-between w-full bottom-0 flex items-center bg-white border-t-[1px] z-40 lg:hidden
     ">{
      routes.map((route)=>(
        <MobileItem
         key={route.href}
         href={route.href}
         active={route.active}
         icon={route.icon}
        //  onClick={route.onClick}
        />
      ))
     }
      
     </div>
   )
 }
 
 export default MobileFooter