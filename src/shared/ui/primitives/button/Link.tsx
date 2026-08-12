import NextLink from "next/link"
import { cn } from "@/shared/utils/cn"
import { buttonVariants } from "./constants"
import type { LinkProps } from "./types"

function isExternal(
  href?: string,
  target?: string,
  download?: string | boolean,
): boolean {
  if (target || download) return true
  if (!href) return false
  return (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  )
}

export function Link({
  className,
  isActive,
  href,
  variant,
  size,
  x,
  y,
  target,
  download,
  rel,
  ...props
}: LinkProps) {
  const classes = cn(buttonVariants({ variant, size, y, x, className }))

  if (
    isExternal(
      href,
      target as string | undefined,
      download as string | boolean | undefined,
    )
  ) {
    const externalRel =
      target === "_blank" ? (rel ?? "noopener noreferrer") : rel
    return (
      <a
        href={href}
        className={classes}
        target={target as string | undefined}
        download={download as string | boolean | undefined}
        rel={externalRel}
        {...props}
      />
    )
  }

  return (
    <NextLink
      href={href ?? "#"}
      className={classes}
      target={target as string | undefined}
      download={download as string | boolean | undefined}
      rel={rel}
      {...props}
    />
  )
}
