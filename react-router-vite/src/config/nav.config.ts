import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Kanban,
  BarChart3
} from 'lucide-react'

interface BaseNav {
  title: string
  description?: string
  icon: LucideIcon
}

export interface NavLeaf extends BaseNav {
  href: string
  items?: never
}

export interface NavGroup extends Omit<BaseNav, 'icon'> {
  icon?: never
  href?: never
  items: NavLeaf[]
}

export type NavItem = NavLeaf | NavGroup

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    description: 'Overview and main dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Projects',
    items: [
      {
        title: 'Trello Board',
        href: '/trello',
        description: 'Kanban board with drag and drop',
        icon: Kanban
      },
      {
        title: 'Analytics',
        href: '/demo',
        description: 'Charts and data visualization',
        icon: BarChart3
      }
    ]
  },
  {
    title: 'Team',
    items: [
      {
        title: 'Members',
        href: '/team',
        description: 'Team member profiles and roles',
        icon: Users
      },
      {
        title: 'Settings',
        href: '/settings',
        description: 'Application settings and preferences',
        icon: Settings
      }
    ]
  },
  {
    title: 'About',
    href: '/about',
    description: 'Learn more about our platform',
    icon: FileText
  }
]
