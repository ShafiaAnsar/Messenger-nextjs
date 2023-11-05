import { useParams } from "next/navigation"
import { useMemo } from "react"

 const useConversion = ()=>{
    const params = useParams()

    const conversationId = useMemo(()=>{
        if(!params?.conversionId){
            return ''
        }
        return params.conversionId as string

    },[params?.conversionId])
    const isOpen = useMemo(()=> !!conversationId ,[conversationId])
    return useMemo(()=>({
        isOpen,
        conversationId
    }),[isOpen,conversationId])
}
export default useConversion