import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'

type DropdownItem = { label: string; to: string }
type DropdownConfig = {
  type: 'dropdown'
  label: string
  icon?: React.ComponentType<{ className?: string }>
  // accept mutable or readonly array
  children: readonly DropdownItem[]
}

export function NavDropdown({
  item,
  activePath
}: {
  item: DropdownConfig
  activePath: string
}) {
  const Icon = item.icon
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button variant='ghost' size='sm' className='gap-2'>
          {Icon && <Icon className='h-4 w-4' />}
          {item.label}
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content
        sideOffset={6}
        className='min-w-40 rounded-md border bg-popover p-1 shadow-md'
      >
        {item.children.map((c) => (
          <Dropdown.Item key={c.to} asChild>
            <Link
              to={c.to}
              className={
                'flex items-center px-2 py-1.5 rounded text-sm hover:bg-accent ' +
                (activePath === c.to ? 'bg-accent font-medium' : '')
              }
            >
              {c.label}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
