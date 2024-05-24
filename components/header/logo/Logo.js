import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/images/apple-logo.svg"
function Logo({ isLink }) {
    return (
        <div className='flex relative px-8 py-3 select-none'>
            {
                isLink ?
                    <Link href="./">
                        <div className=' md:w-[95px] w-[80px]'>
                            <Image src={logo} alt='apple' priority />
                        </div>
                    </Link>
                    : <div className=' md:w-[95px] w-[80px]'>
                        <Image src={logo} alt='apple' />
                    </div>
            }

            <div className='flex justify-center flex-col translate-y-2 mr-2'>
                <h1 className='md:text-2xl text-[17px] text font-bold'>
                    اپل
                </h1>
                <h3 className='md:text-lg text-nowrap text-[12px] pt-2'>
                    اموزشگاه تخصصی
                </h3>
            </div>
        </div>
    )
}

export default Logo