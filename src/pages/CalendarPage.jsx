import { Button } from '@/components/ui/button.jsx'
import { Calendar } from '@/components/ui/calendar.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.jsx'
import { PreviewWrapper } from '@/pages/PreviewWrapper.jsx'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

function DateOfBirthForm() {
  const [date, setDate] = useState(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : 'Select date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            weekStartsOn={1}
            selected={date}
            captionLayout="dropdown"
            onSelect={date => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

function DateAndTimeForm() {
  const [date, setDate] = useState(null)
  const [open, setOpen] = useState(false)

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
              {date ? date.toLocaleDateString() : 'Select date'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              weekStartsOn={1}
              selected={date}
              captionLayout="dropdown"
              onSelect={date => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>

        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  )
}

export function CalendarPage() {
  const [date, setDate] = useState(new Date())

  const [dateRange, setDateRange] = useState({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  })

  return (
    <div className="flex h-full w-full flex-col lg:w-2xl">
      <h1 className="text-foreground mb-4 text-4xl font-bold">Calendar</h1>

      <PreviewWrapper>
        <div className="flex flex-col justify-center gap-4 p-4">
          <div>Simple calendar</div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
            captionLayout="dropdown"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 p-4">
          <div>Range calendar</div>
          <Calendar
            showOutsideDays={false}
            mode="range"
            numberOfMonths={2}
            weekStartsOn={1}
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            className="rounded-lg border"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 p-4">
          <div>Disable dates in the past</div>
          <Calendar
            mode="single"
            weekStartsOn={1}
            disabled={{ before: new Date() }}
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 p-4">
          <div>Disable weekends</div>
          <Calendar
            mode="single"
            weekStartsOn={1}
            disabled={{ dayOfWeek: [0, 6] }}
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <DateOfBirthForm />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div>Form date and time picker</div>

          <DateAndTimeForm />
        </div>
      </PreviewWrapper>
    </div>
  )
}
