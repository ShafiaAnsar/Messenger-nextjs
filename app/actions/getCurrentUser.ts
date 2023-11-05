import prisma from '@/app/libs/prismadb'
import getSession from './getSession'
import { redirect } from 'next/navigation'
 

const getCurrentUser =async () => {
    try {
        const session = await getSession()
        if(!session?.user?.email){
            return null 
            
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email:session.user.email as string
            }
           
        })
        if(!currentUser){
            console.log('no current user')
            return null
        }
        return currentUser
    } catch (error) {
        return null
    }
    
}

export default getCurrentUser