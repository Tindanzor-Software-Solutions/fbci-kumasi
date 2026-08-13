import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"

type PaymentFormProps = ComponentProps<"iframe">

export function PaymentForm({
  title,
  className,
  src,
  ...props
}: PaymentFormProps) {
  if (!src) return null

  return (
    <iframe
      {...props}
      src={src}
      className={cn("h-350 sm:h-250 w-full", className)}
    />
  )
}
