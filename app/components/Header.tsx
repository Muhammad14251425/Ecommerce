import Image from 'next/image'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const items = [
    { title: "Home", href: "/home" },
    { title: "Shop", href: "/shop" },
    { title: "Services", href: "/services" },
    { title: "Pricing", href: "/pricing" },
    { title: "Company", href: "company" },
    { title: "Help", href: "help" },
    { title: "Contact Us", href: "contact" },
]
const item = [
    { title: "Home", href: "/home" },
    { title: "Shop", href: "/shop" },
    { title: "Services", href: "/services" },
    { title: "Pricing", href: "/pricing" },
]
const ite = [
    { title: "Home", href: "/home" },
    { title: "Shop", href: "/shop" },
]

const Header = () => {
    return (
        <nav className='h-[8vh] border-b shadow-md sticky top-0  bg-white/95 z-10'>
            <div className='flex items-center justify-between h-full max-w-7xl mx-auto  px-6 sm:px-10 md:px-16 lg:px-16 xl:px-24 2xl:px-0'>
                <div className='flex'>
                    <Image src="/header/hello.svg" alt='Logo' height={132} width={132} className='w-[110px] h-[100px] ' />
                    <div className='2xl:flex items-center gap-x-4 pl-8 text-sm hidden mr-2'>
                        {
                            items.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <h2 className='text-gray-500'>{item.title}</h2>
                                </Link>
                            ))
                        }

                    </div>
                    <div className='thh:flex items-center gap-x-4 pl-8 text-sm hidden 2xl:hidden'>
                        {
                            item.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <h2 className='text-gray-500'>{item.title}</h2>
                                </Link>
                            ))
                        }
                         <DropdownMenu >
                         <DropdownMenuTrigger>
                        <Image  src="/header/plus.svg" width={132} height={132} className='w-4 h-4 animate-pulse' alt='plus' />
                         </DropdownMenuTrigger>
                         <DropdownMenuContent className='mt-5' >
                        <Link href="/company"><DropdownMenuItem className=' pr-20'>Company</DropdownMenuItem></Link>
                        <Link href="/help"><DropdownMenuItem className=' pr-20'>Help</DropdownMenuItem></Link>
                        <Link href="/contact"><DropdownMenuItem className=' pr-20'>Contact Us</DropdownMenuItem></Link>
                         </DropdownMenuContent>
                         </DropdownMenu>
                    </div>
                    <div className=' items-center gap-x-4 pl-8 text-sm hidden tzz:flex thh:hidden'>
                        {
                            ite.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <h2 className='text-gray-500'>{item.title}</h2>
                                </Link>
                            ))
                        }
                         <DropdownMenu >
                         <DropdownMenuTrigger>
                        <Image  src="/header/plus.svg" width={132} height={132} className='w-4 h-4 animate-pulse ' alt='plus' />
                         </DropdownMenuTrigger>
                         <DropdownMenuContent className='mt-5'>
                        <Link href="/services"><DropdownMenuItem className=' pr-20'>Services</DropdownMenuItem></Link>
                        <Link href="/pricing"><DropdownMenuItem className=' pr-20'>Prices</DropdownMenuItem></Link>
                        <Link href="/company"><DropdownMenuItem className=' pr-20'>Company</DropdownMenuItem></Link>
                        <Link href="/help"><DropdownMenuItem className=' pr-20'>Help</DropdownMenuItem></Link>
                        <Link href="/contact"><DropdownMenuItem className=' pr-20'>Contact Us</DropdownMenuItem></Link>
                         </DropdownMenuContent>
                         </DropdownMenu>
                    </div>
                </div>
                <div className='hidden tzz:flex gap-x-3'>

                    <button className='bg-gray-100 hover:bg-gray-200 p-3 rounded-full'><Image src="/header/cart.svg" alt='cart' height={132} width={132} className='h-5 w-5' /></button>
                    <button className='bg-gray-100 hover:bg-gray-200 p-3 rounded-full'><Image src="/header/search.svg" alt='cart' height={132} width={132} className='h-5 w-5' /></button>
                    <div className='flex items-center ml-3' >
                        <Image height={132} width={132} alt='phone' src="/header/phone.svg" className='h-4 w-4' />
                        <p className='text-gray-400 text-sm ml-2'>+92 332 0342041</p>
                    </div>
                </div>
                <div className='hidden tzz:flex gap-x-2'>
                    <DropdownMenu >
                        <DropdownMenuTrigger className='hover:bg-[#B04A68] active:bg-[#B04A68] active:text-white text-[#B04A68] rounded-full px-5 py-2 border-none hover:text-white tracking-tighter flex items-center gap-x-2 font-semibold text-sm '>Muhammad Fawwad
                            <Image src="/header/chevron-down.svg" alt='down' height={132} width={132} className='h-4 w-4 text-yellow-400-700' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuItem className=' pr-20'>Apps</DropdownMenuItem>
                            <DropdownMenuItem className=' pr-20'>My Account</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className=' pr-20'>Profile</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <button className='bg-[#79DfC1] hover:bg-[#79DFC1]/90 rounded-full px-6 py-2 tracking-tighter'>Contact Us</button>
                </div>
                <div className='tzz:hidden flex items-center gap-x-8'>
                    <Image src="/header/cart.svg" alt='cart' width={132} height={132} className='h-4 w-4' />
                    <Sheet>
                        <SheetTrigger>
                            <Image src="/header/menu.svg" alt='menu' height={132} width={132} className='h-8 w-8' />
                        </SheetTrigger>
                        <SheetContent>
                            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                            <SheetDescription >
                                <div className='flex flex-col justify-between h-screen'>
                                    <div>

                                        <div className='flex items-center bg-[#F0F5F4] rounded-full mt-12'>
                                            <input type="text" placeholder='Search...' className=' outline-none bg-[#F0F5F4] rounded-full py-3 px-6 pr-24' />
                                            <Image src="/header/search.svg" width={132} height={132} className='h-5 w-5' alt='search' />
                                        </div>
                                        <div className='flex flex-col gap-y-6 mt-10'>
                                            {
                                                items.map((item, index) => (
                                                    <Link key={index} href={item.href}>
                                                        <h2 className='text-gray-500 text-sm'>{item.title}</h2>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                        <div className='border-b my-6' />
                                        <div className='flex items-center ml-3' >
                                            <Image height={132} width={132} alt='phone' src="/header/phone.svg" className='h-4 w-4' />
                                            <p className='text-gray-400 text-sm ml-2'>+92 332 0342041</p>
                                        </div>
                                    </div>


                                    <div className='mb-12'>

                                        <DropdownMenu >
                                            <DropdownMenuTrigger className='hover:bg-[#B04A68] active:bg-[#B04A68] active:text-white text-[#B04A68] rounded-full px-5 py-3 border-none hover:text-white tracking-tighter flex items-center justify-between w-full ro font-semibold text-sm '>Muhammad Fawwad
                                                <Image src="/header/chevron-down.svg" alt='down' height={132} width={132} className='h-4 w-4 text-yellow-400-700 rotate-180' />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent  >
                                                <DropdownMenuItem className=' pr-64'>Apps</DropdownMenuItem>
                                                <DropdownMenuItem className=' pr-64'>My Account</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className=' pr-64'>Profile</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <button className='bg-[#79DfC1] mt-6 hover:bg-[#79DFC1]/90 rounded-full px-6 py-3 tracking-tighter w-full text-black'>Contact Us</button>
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </nav>
    )
}

export default Header