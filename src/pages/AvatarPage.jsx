import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

export function AvatarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Avatar</h1>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>

            <Avatar className="rounded-full border border-gray-500">
              <AvatarImage src="https://avatars.githubusercontent.com/u/9720597?v=4&size=64" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/non-existing" alt="" />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>

            {/* avatar group */}
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
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
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
