
import ReactPlayer from 'react-player'

export const VideoPlayer = () => {
    return  (
        <div className='w-full bg-zinc-950 aspect-video' >
            <ReactPlayer
                width='100%'
                height='100%'
                constrols
                url='https://www.youtube.com/watch?v=bbkBuqC1rU4'
            />
        </div>
    )
}