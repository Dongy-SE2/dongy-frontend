import {MoonLoader} from 'react-spinners'

export default function Loading() {
    return (
        <div className="min-h-screen w-full flex justify-evenly bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100%">
            <div className='mt-12 flex justify-center'>
                <MoonLoader size={60} color="#047857"
                speedMultiplier={2}/>
            </div>
        </div>
    );
  }