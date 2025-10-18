import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '~/lib/utils'

const NavigationMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
NavigationMenu.displayName = 'NavigationMenu'

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  >
    {children}
  </ul>
))
NavigationMenuList.displayName = 'NavigationMenuList'

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li ref={ref} className={cn('relative', className)} {...props}>
    {children}
  </li>
))
NavigationMenuItem.displayName = 'NavigationMenuItem'

interface NavigationMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean
}

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerProps
>(({ className, children, isOpen = false, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
      isOpen &&
        'text-accent-foreground bg-accent/50 hover:bg-accent focus:bg-accent',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown
      className={cn(
        'relative top-[1px] ml-1 h-3 w-3 transition duration-300',
        isOpen && 'rotate-180'
      )}
      aria-hidden='true'
    />
  </button>
))
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-popover text-popover-foreground absolute top-full left-0 mt-1.5 w-max overflow-hidden rounded-md border p-4 shadow-md transition-all duration-200 ease-in-out',
      isOpen
        ? 'scale-100 opacity-100'
        : 'pointer-events-none scale-95 opacity-0',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
NavigationMenuContent.displayName = 'NavigationMenuContent'

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
      className
    )}
    {...props}
  >
    {children}
  </a>
))
NavigationMenuLink.displayName = 'NavigationMenuLink'

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
}
