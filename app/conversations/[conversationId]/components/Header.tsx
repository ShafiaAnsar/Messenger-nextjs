'use client'
import Link from 'next/link'
import useOtherUser from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import { useMemo, useState } from "react"
import { HiChevronLeft } from 'react-icons/hi'
import Avatar from '@/app/components/Avatar'
import { HiEllipsisHorizontal } from 'react-icons/hi2'
import ProfileDrawer from './ProfileDrawer'
import AvatarGroup from '@/app/components/AvatarGroup'
import useActiveList from '@/app/hooks/useActiveList'

interface HeaderProps{
    conversation:Conversation &{
        users:User[]
    }
}
const Header:React.FC<HeaderProps> = ({conversation}) => {
    const otherUser = useOtherUser(conversation)
    const [drawerOpen,setDrawerOpen] = useState(false)
    const {members} = useActiveList()
    const isActive = members.indexOf(otherUser?.email!)!== -1
    const statusText = useMemo(() => {
        if(conversation.isGroup){
            return `${conversation.users.length} members`
        }
        return isActive? 'Active' :'offline'
    }, [conversation])
  return (
    <>
    <ProfileDrawer data={conversation} isOpen={drawerOpen} onClose={()=> setDrawerOpen(false)}/>
    <div className="bg-white w-full flex border-b-[1px] py-3 px-4 justify-between items-center lg:px-6 sm:px-4 shadow-sm ">
        <div className="flex gap-3 items-center">
            <Link href='/conversations' className='lg:hidden block text-sky-600 hover:text-sky-500 transition cursor-pointer'>
                <HiChevronLeft size={32}/>
             </Link>
             {conversation.isGroup ? (
                <AvatarGroup users={conversation.users}/>
             ):(<Avatar user={otherUser}/>)}
             
             <div className='flex flex-col'>
                <div className="">
                    {conversation.name || otherUser?.name}
                </div>
                <div className="text-sm font-light text-neutral-500">
                    {statusText}
                </div>
             </div>
        </div>
        <HiEllipsisHorizontal onClick={()=>setDrawerOpen(true)} size={32} className=' text-sky-500 cursor-pointer hover:text-sky-600 transition'/>
    </div>
    </>
  )
}

export default Header