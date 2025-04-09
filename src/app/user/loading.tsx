import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'



export default function Loading() {
    
    return (
        <div className="min-h-screen w-full flex justify-evenly bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100%">
            <div className='mt-60 flex justify-center'>
                <Hourglass size="60" color="#047857"
                speed="1.75" bg-opacity="0.1"/>
            </div>
        </div>
    );
  }