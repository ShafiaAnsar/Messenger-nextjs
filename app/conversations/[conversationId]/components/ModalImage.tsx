'use client'

import Modal from "@/app/components/Modal"
import Image from 'next/image'
interface ModalImageProps{
    isOpen?:boolean
    onClose:()=> void
    src?:string|null
}

const ModalImage:React.FC<ModalImageProps> = ({onClose,isOpen,src}) => {
    if(!src){
        return null
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}  >
        <div className="w-80 h-80">
            <Image fill src={src} alt="Image" className="object-cover"
            />
        </div>
    </Modal>
  )
}

export default ModalImage