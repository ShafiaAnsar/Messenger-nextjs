'use client'
import clsx from "clsx"
import useConversion from "../hooks/useConversation"
import EmptyState from "../components/EmptyState"

const Home=()=>{
    const {isOpen} = useConversion()
    return (
        <div className={clsx(`lg:pl-80 h-full lg:block`,isOpen? 'block':'hidden')}>
            <EmptyState/>
        </div>
    )
}
export default Home