import { useParams } from "react-router-dom"

export default function Resurrs(){
    const {slug} = useParams()
    return(
        <h1>{slug}</h1>
    )
}