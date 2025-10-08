import { Menu, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from '~/components/theme/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from '~/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '~/components/ui/sheet'
import { NAV_ITEMS } from '~/config/nav.config'
import { cn } from '~/lib/utils'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      // 768px is the md breakpoint in Tailwind
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Check initial screen size
    handleResize()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <header className='bg-background/70 sticky top-0 z-50 border-b backdrop-blur'>
      <div className='container flex h-15 items-center justify-between'>
        <Link
          to='/'
          className='font-heading bg-primary bg-clip-text text-3xl font-bold text-transparent'
        >
          RouterApp
        </Link>
        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-6 md:flex'>
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className='text-foreground'>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className='grid w-[200px] gap-2 md:w-[300px] md:grid-cols-1 lg:w-[400px]'>
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className={cn(
                                    'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none'
                                  )}
                                >
                                  <div className='flex items-center gap-2'>
                                    <subItem.icon className='h-4 w-4' />
                                    <div className='text-sm leading-none font-medium'>
                                      {subItem.title}
                                    </div>
                                  </div>
                                  <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          'group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                        )}
                      >
                        <div className='flex items-center gap-2'>
                          <item.icon className='h-4 w-4' />
                          {item.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </nav>
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
            <SheetHeader>
              <SheetTitle>
                <Link
                  to='/'
                  className='bg-gradient-primary font-heading bg-clip-text text-2xl font-bold text-transparent'
                  onClick={() => setIsOpen(false)}
                >
                  RouterApp
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className='mt-4 flex h-full flex-col space-y-4'>
              <nav className='mt-4 max-h-[calc(100vh-110px)] max-w-[calc(100vw-100px)] flex-1 overflow-y-auto pr-2'>
                <div className='flex flex-col space-y-2'>
                  {NAV_ITEMS.map((item) => (
                    <div key={item.title}>
                      {item.items ? (
                        <div>
                          <h3 className='text-muted-foreground mb-2 text-sm font-medium tracking-wider uppercase'>
                            {item.title}
                          </h3>
                          <div className='ml-4 space-y-1'>
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.href}
                                className='hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors'
                                onClick={() => setIsOpen(false)}
                              >
                                <subItem.icon className='h-4 w-4' />
                                <div>
                                  <div className='font-medium'>
                                    {subItem.title}
                                  </div>
                                  <div className='text-muted-foreground text-xs'>
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className='hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors'
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className='h-4 w-4' />
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className='relative border-t'>
                    <div className='flex items-center gap-3 px-3 py-2'>
                      <span className='xs:text-sm sm:text-base lg:text-lg 2xl:text-xl'>
                        Chế độ giao diện
                      </span>
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </nav>
              {/* Mobile Avatar */}
            </div>
          </SheetContent>
        </Sheet>
        {/* Avatar Theme*/}
        <div className='width-auto hidden items-center justify-between gap-3 space-x-4 md:flex'>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className='h-8 w-8'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
