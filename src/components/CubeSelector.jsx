
import { useEffect, useState } from "react"
import useKeyboard from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../assets/images/images"

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg,
}


const CubeSelector = () => {

    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()


    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
        }

        const pressedTexture = Object.entries(textures).find(([k, v]) => v)

        if (pressedTexture) {
            console.log('press', pressedTexture)
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log])

    useEffect(() => {
        // const visibilityTimeout = setTimeout(() => {
        //     setVisible(false)
        // }, 2000)
        setVisible(true)

        // return() => {clearTimeout(visibilityTimeout)}
    }, [activeTexture])

    return visible && (
        <div className="absolute cube-selector">
            {
                Object.entries(images).map(([k, src]) => {
                    return (
                        <img key={k} src={src} className={`${k === activeTexture ? 'active' : ''}`} />
                    )
                })
            }
        </div>

        // <div className="absolute centered">
        //     Cube Selector
        // </div>
    )

}

export default CubeSelector