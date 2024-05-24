import { IconLogin, IconLogin2, IconPhone, IconTriangleInvertedFilled } from "@tabler/icons-react"
import Link from "next/link"
import { getCategories, getMenus } from "../../../app/utils"
import Courses from "../courses/Courses"
import Menus from "../menus/Menus"

async function Navbar() {
  const menuItems = await getMenus()
  const categories = await getCategories()
  return (
    <section>
      <div className="md:flex hidden justify-between p-7">
        <div className="flex w-full justify-between gap-1 lg:pl-20 pl-9 items-center">
          <div >
            <Courses categoryItems={categories} />
          </div>
          <Menus menuItems={menuItems} />
        </div >
        <div className="flex justify-end gap-5 items-center ">
          <div className="items-stretch xl:flex hidden text-dark-color custom-transition hover:cursor-pointer hover:text-primary-color">
            <p className="font-bold  text-[16px] text-inherit font-outline-2">تلفن:09309354294</p>
            <IconPhone size={18} className="font-bold text-inherit translate-y-[3px] font-outline-2" />
          </div>
          <div className="md:block hidden">
            <Link href="./login">
              <div className=' md:w-fit rounded-3xl btn-primary'>
                <div className='flex-center  lg:px-4 lg:h-9 px-2 h-9 '>
                  <p className='lg:text-base font-bold text-[11px] text-nowrap mr-1' >ورود/ثبت نام</p>
                  <IconLogin className='w-[20px]' />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div >
    </section>
  )
}

export default Navbar