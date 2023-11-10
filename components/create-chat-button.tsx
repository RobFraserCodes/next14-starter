import React from 'react'
import { Button } from './ui/button'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function CreateChatButton() {
  return (
    <Button variant={"ghost"}>
        <span className='sr-only'>Create a new chat</span>
        <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
    </Button>
  )
}
