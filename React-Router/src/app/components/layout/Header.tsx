import { Link } from 'react-router'
import { NAV_ITEMS } from '~/components/navigation/nav.config'
import { ThemeToggle } from '~/components/theme/ThemeToggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '~/components/ui/navigation-menu'
import { cn } from '~/lib/utils'

export function Header() {
  return (
    <header className='sticky top-0 z-50 backdrop-blur bg-background/70 border-b'>
      <div className='container mx-auto h-14 flex items-center justify-between'>
        <Link
          to='/'
          className='font-bold text-xl bg-custom-color bg-clip-text text-transparent'
        >
          RouterApp
        </Link>
        <div className='flex items-center space-x-6'>
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
                        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className={cn(
                                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                  )}
                                >
                                  <div className='flex items-center gap-2'>
                                    <subItem.icon className='h-4 w-4' />
                                    <div className='text-sm font-medium leading-none'>
                                      {subItem.title}
                                    </div>
                                  </div>
                                  <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
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
                          'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
