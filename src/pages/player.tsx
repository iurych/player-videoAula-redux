import { MessageCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { VideoPlayer } from '../components/VideoPlayer'
import { Module } from '../components/Module'


export const Player = () => {
    return (
        <div className='h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center' >
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between" >
                    
                     <Header />

                    <button type='submit' className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-600 duration-300' >
                        
                        <MessageCircle className='w-4 h-4' /> 
                        Deixar feedback

                    </button>

                </div>


                <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80' >
                   
                    <div className='flex-1' >

                       <VideoPlayer />

                    </div>
                   
                    <aside className='w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800' >
               
                        <Module />
                        <Module />
                        <Module />
                        
                    </aside>
                    
                </main>
            
                
            </div>            
            
        </div>
    )
}