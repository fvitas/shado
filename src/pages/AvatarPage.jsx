import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'

export function AvatarPage() {
  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Avatar</h1>

      <PreviewWrapper>
        <div className="flex flex-col flex-wrap items-start gap-10">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
            <AvatarFallback>FV</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/non-existing" alt="" />
            <AvatarFallback>FV</AvatarFallback>
          </Avatar>

          {/* avatar group */}
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </AvatarGroup>

          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/non-existing" alt="" />
            <AvatarFallback>FV</AvatarFallback>
            <span className="absolute right-0 bottom-0 size-2 rounded-full bg-green-500 ring-1 ring-white"></span>
          </Avatar>
        </div>
      </PreviewWrapper>
    </div>
  )
}
