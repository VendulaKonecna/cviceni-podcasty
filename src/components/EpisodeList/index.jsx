import { Episode } from "../Episode"

export const EpisodeList = ({ episodes }) =>  {
    return (
    <>
        {episodes.map((episode) => (
            <Episode
            key={episode.num}
            num={episode.num}
            title={episode.title}
            guest={episode.guest} 
            /> 
        ))}  
    </>
)}