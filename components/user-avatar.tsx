import React from 'react'
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type UserAvatarProps = {
  name: string;
  image: string;
  className?: string;
}

export default function UserAvatar({ name, image, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      {image && (
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback>
        {name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}