import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to know more about Shashwat?
            </h2>
            <p className='text-gray-500 my-2'>
                Visit Shashwat's Portfolio Website 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none' onClick={()=>{ window.location.href = "https://shashwat-port-folio.vercel.app/" }}>
                Portfolio
            </Button>

        </div>
        <div className="p-7 flex-1">
            <img src="https://avatars.githubusercontent.com/u/130957079?v=4" />
        </div>
    </div>
  )
}