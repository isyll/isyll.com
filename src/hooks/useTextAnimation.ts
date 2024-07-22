import { easeCubicOut } from 'd3-ease'
import { useSpring } from 'react-spring'

function useTextAnimation() {
  const line1 = useSpring({
    from: { transform: 'translateY(100%)', opacity: '0%' },
    to: { transform: 'translateY(0%)', opacity: '300%' },
    config: { duration: 1000, easing: easeCubicOut },
    delay: 0,
  })
  const line2 = useSpring({
    from: { transform: 'translateY(100%)', opacity: '0%' },
    to: { transform: 'translateY(0%)', opacity: '300%' },
    config: { duration: 1000, easing: easeCubicOut },
    delay: 300,
  })
  const line3 = useSpring({
    from: { transform: 'translateY(100%)', opacity: '0%' },
    to: { transform: 'translateY(0%)', opacity: '300%' },
    config: { duration: 1000, easing: easeCubicOut },
    delay: 600,
  })

  return [line1, line2, line3]
}

export default useTextAnimation
