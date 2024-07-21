import Button from './ui/Button'

function Header() {
  const navLinks = [
    {
      text: 'HOME',
      href: '#home',
    },
    {
      text: 'ABOUT ME',
      href: '#about',
    },
    {
      text: 'SKILLS',
      href: '#skills',
    },
    {
      text: 'MY PROJECTS',
      href: '#projects',
    },
    {
      text: 'CONTACT',
      href: '#contact',
    },
  ]

  return (
    <header className='flex justify-between px-12 py-6 w-full items-center'>
      <h1 className='text-xxl'>Isyll</h1>
      <div className='flex gap-32 items-center'>
        <nav>
          <ul className='list-none flex gap-10'>
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  className='hover:text-primary transition-colors duration-75'
                  href={item.href}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button className='font-[600]'>CV</Button>
      </div>
    </header>
  )
}

export default Header
