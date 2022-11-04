
import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Ground from './components/Ground'
import Player from './components/Player'
import Camera from './components/Camera'
import Cubes from './components/Cubes'
import CubeSelector from './components/CubeSelector'
import HelpText from './components/HelpText'
import Menu from './components/Menu'

function App() {


  return (
    <>
      <Canvas>
        <Sky sunPosition={[ 100, 100, 20 ]} />

        <ambientLight intensity={0.5} />

        <Camera />

        <Physics>
          <Player />

          <Cubes />

          <Ground />
        </Physics>
      </Canvas>

      <div className='absolute centered cursor'>+</div>

      <CubeSelector />

      <HelpText />

      <Menu />
    </>
  )

}

export default App
