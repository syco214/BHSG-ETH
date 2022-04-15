import React from 'react'
import particlesconfig from "./particle-config-meta";
import Particles from "react-particles-js"

const ParticleBackgroundMeta = () => {
    return (
        <div style={{backgroundColor: "black"}}>
            <Particles params={particlesconfig}></Particles>
        </div>
    )
}

export default ParticleBackgroundMeta
