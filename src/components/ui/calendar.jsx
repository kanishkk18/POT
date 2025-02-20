import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("justify-center items-center rounded-[14px] w-[100%]  ", className)}
      classNames={{
        months: "flex flex-col w-[100%] sm:flex-row space-y-4  sm:space-x-4 sm:space-y-0",
        month: "space-y-4 min-w-full",
        caption: "flex justify-center pt-1 relative items-center ",
        caption_label: "text-sm font-medium text-[#2647eb] ",
        nav: "space-x-1 flex items-center  ",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 p-0  border border-[#2647eb] text-[#2647eb] bg-transaparent hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "min-w-[100%] border-collapse space-y-1 min-w-full",
        head_row: "flex min-w-full justify-between",
        head_cell:
          "text-muted-foreground rounded-md w-6 font-normal text-[0.8rem] ",
        row: "flex mt-2 text-white",
        cell: cn(
          "relative p-0 text-center text-sm w-[100%] focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 "
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-blue-600 text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
