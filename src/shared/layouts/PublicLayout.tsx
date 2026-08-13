"use client"

import { MobileFloatingCTA } from "@/features/contact/components/MobileFloatingCTA"
import { usePathname } from "@/shared/hooks/usePathname"
import { Footer } from "@/shared/layouts/Footer"
import { Header } from "@/shared/layouts/Header"
import { routes } from "@/shared/routes"
import { BackButton } from "@/shared/ui/BackButton"
import { AnimatePosition, motionVariants } from "@/shared/ui/Framer"

const buttonVariants = motionVariants({
  hidden: { opacity: 0, x: "-40%" },
  show: { opacity: 1, x: 0 },
})

const hiddenPaths = [
  routes.auth.login,
  routes.auth.signup,
  routes.auth.forgotPassword,
  routes.auth.resetPassword,
  routes.dashboard.home,
]

const hide = (path: string) => hiddenPaths.some((p) => path.startsWith(p))

export function PublicLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname()
  if (hide(pathname)) return children

  return (
    <>
      <Header />
      <div className="relative">
        <AnimatePosition
          variants={buttonVariants}
          initial="hidden"
          animate="show"
          className="max-w-7xl z-20 w-full absolute left-1/2 -translate-x-1/2 top-20 pointer-events-none pl-4 pt-4"
        >
          <BackButton variant="primary" className="pointer-events-auto" />
        </AnimatePosition>
        {children}
      </div>
      <Footer />
      <MobileFloatingCTA />
    </>
  )
}
