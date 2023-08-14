import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { useMediaQuery } from 'react-responsive'

interface BackgroundProps {
    enableConsent?:boolean
}

const BG: React.FC<BackgroundProps> = (props) => {
	const {enableConsent} = props;
	const opacity = enableConsent? .1 : .3;
  
	const isDesktopOrLaptop = useMediaQuery({
	  query: '(min-device-width: 1224px)'
	})
  
	return (
    <>
      {isDesktopOrLaptop ? (
        <Particles
          params={{
            fullScreen: {
              enable: true,
            },
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      ) : null}
    </>
  )
  }
 
  export default BG