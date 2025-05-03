import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const Navbar = () => {
  return (
    <nav className='h-20 flex border-b justify-center font-medium bg-white'>
      <Link href={'/'} className="pl-6 flex items-center">
        <span className={cn('font-semibold text-5xl', poppins.className)}>funroad</span>
      </Link>
    </nav>
  )
}

export default Navbar
