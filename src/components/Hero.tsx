import { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { easeCubicOut } from 'd3-ease'
import useTextAnimation from '../hooks/useTextAnimation'

function Hero() {
  const [styles, api] = useSpring(() => ({
    from: { transform: 'translateX(100%)', opacity: '0%' },
    to: { transform: 'translateX(0%)', opacity: '100%' },
    config: { duration: 1000, easing: easeCubicOut },
    delay: 300,
  }))
  const [line1, line2, line3] = useTextAnimation()

  useEffect(() => {
    api.start()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (() => api.stop()) as any
  }, [api])

  return (
    <div className='flex justify-between px-16 items-center overflow-x-hidden flex-wrap'>
      <h1 className='text-[84px] leading-none font-bold'>
        <animated.div style={line1}>
          <span className='text-primary'>Ibrahima Sylla</span> —
        </animated.div>
        <animated.div style={line2}>Web Developer</animated.div>
        <animated.div style={line3}>Flutter Engineer</animated.div>
      </h1>
      <animated.img
        style={styles}
        src='/coder-illustration.svg'
        alt='Coder illustration'
        width={500}
      />
    </div>
  )
}

export default Hero
