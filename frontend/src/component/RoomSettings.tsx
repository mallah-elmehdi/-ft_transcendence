import React, {useEffect} from 'react'

type Props = {
  toggleSettings: ()=> void,
}

const RoomSettings = ({toggleSettings}:Props)=> {
    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleSettings()
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    },);
  return (
    <div>ChannelSettings</div>
  )
}

export default RoomSettings;