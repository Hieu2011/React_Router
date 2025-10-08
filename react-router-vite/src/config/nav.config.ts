import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Kanban,
  BarChart3,
  BookOpenCheck,
  PawPrint
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
    href: '/Dashboard',
    description: 'Overview and main dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Categories',
    href: '/Categories',
    description: 'Categories management',
    icon: PawPrint
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
        href: '/analytics',
        description: 'Charts and data visualization',
        icon: BarChart3
      },
      {
        title: 'Reports',
        href: '/reports',
        description: 'Generate and view reports',
        icon: FileText
      },
      {
        title: 'Documentation',
        href: '/docs',
        description: 'Project documentation and guides',
        icon: BookOpenCheck
      },
      {
        title: 'Documentation2',
        href: '/docs',
        description: 'Project documentation and guides',
        icon: BookOpenCheck
      },
      {
        title: 'Documentation3',
        href: '/docs',
        description: 'Project documentation and guides',
        icon: BookOpenCheck
      },
      {
        title: 'Documentation4',
        href: '/docs',
        description: 'Project documentation and guides',
        icon: BookOpenCheck
      }
    ]
  },
  {
    title: 'Demo',
    href: '/Demo',
    description: 'Demo management',
    icon: PawPrint
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
