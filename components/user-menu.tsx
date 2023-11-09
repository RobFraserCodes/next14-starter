import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"  
import UserAvatar from './user-avatar'
import { Session } from 'next-auth'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

export default function UserMenu( { session } : { session: Session | null }) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name={session?.user?.name} image={session?.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button variant={"ghost"} onClick={() => signOut()}>
                Sign Out
              </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
