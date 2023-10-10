import {useState} from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./image-slider.css"
type ImageSliderProps = {
    imageUrls: string[]
}

export function ImageSlider({imageUrls}: ImageSliderProps) {

    const [imageIndex, setImageIndex] = useState(0)
    function changeImg(direction: string) {
        switch (direction) {
            case "left":
                setImageIndex(index => {
                    if (index === 0) {
                        return imageUrls.length - 1
                    } else {return index - 1}
                })
                break;

            case "right":
                setImageIndex(index => {
                    if (index === imageUrls.length - 1) {
                        return 0
                    } else {return index + 1}
                })
                break;

            default:
                break;
        }

    }
    return (
        <>
        <div style={{width:"100%", height:"100%", position:"relative"}}>
            <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
            {imageUrls.map(url => {
                return (
                    <img 
                        key={url} 
                        src={url} 
                        className="img-slider-img"
                        style={{translate: `${-100 * imageIndex}%`}} />
                )
            })}
            </div>
            <button className="img-slider-btn" onClick={() => changeImg("left")} style={{left: 0}}><ArrowBigLeft /></button>
            <button className="img-slider-btn" onClick={() => changeImg("right")} style={{right: 0}}><ArrowBigRight /></button>
            <div style={{
                position: "absolute", 
                left: "50%", 
                translate: "-50%", 
                bottom: "0.5rem",
                display: "flex",
                gap: "0.25rem"}}>
                {imageUrls.map( (_, index)  => {
                    return <button key={index} className="img-slider-dot-btn" onClick={() => setImageIndex(index)}>{index === imageIndex ? <CircleDot /> : <Circle />}</button>
                })}
            </div>
        </div>
        
        </>
    )
}