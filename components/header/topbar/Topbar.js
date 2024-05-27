import { IconCalendar, IconLogin, IconShoppingCart } from '@tabler/icons-react'
import Logo from '../logo/Logo'
import Link from 'next/link'
import Search from '../search/Search'
import Sidebar from '../sidebar/Sidebar'
import { getCategories, getMenus } from '../../../app/utils'


async function Topbar() {
    const menuItems = await getMenus()
    const categories = await getCategories()
    return (
        <section>
            <div className='flex justify-between py-6'>
                <div className='w-full flex flex-col justify-center items-start px-3 py-2'>
                    <Logo isLink={true} />
                    <Sidebar categoryItems={categories} menuItems={menuItems} />
                </div>
                <div className='flex md:flex-row flex-col gap-1 items-center justify-evenly  w-full '>
                    <div className=' md:block hidden md:basis-1/2 '>
                        <Search />
                    </div>
                    <Link href="./">
                        <div className='md:w-fit rounded-3xl btn-primary'>
                            <div className='flex-center md:px-5 md:h-11 px-5 h-9'>
                                <p className='md:text-base font-bold text-sm  text-nowrap' >تقویم اموزشی</p>
                                <IconCalendar className='w-[20px]' />

                            </div>
                        </div>
                    </Link>
                    <Link href="./">
                        <div className=' w-fit rounded-3xl md:block hidden  btn-secondary'>
                            <div className='flex-center  md:px-5 md:h-11 px-5 h-9 '>
                                <p className='md:text-base font-bold text-sm  text-nowrap mr-1' >0 تومان</p>
                                <IconShoppingCart className='w-[20px]' />
                            </div>
                        </div>
                    </Link>
                    <Link href="./login">
                        <div className=' md:w-fit  md:hidden rounded-3xl btn-primary'>
                            <div className='flex-center  md:px-5 md:h-11 px-5 h-9 '>
                                <p className='md:text-base font-bold text-sm text-nowrap mr-1' >ورود/ثبت نام</p>
                                <IconLogin className='w-[20px]' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <hr className='w-[98%] m-auto border-b-[1px]  border-b-gray-300' />
        </section>







        // <>
        //     <Container fluid>
        //         <Row className={styles.container}>
        //             <Col >
        //                 <Logo isLink={true} />
        //             </Col>
        //             <Col >
        //                 <Row className={styles["left-container"]}>
        //                     <Col md={7}>{<Search />}</Col>
        //                     <Col md={"auto"} ><Button href="/#" style="primary">تقویم اموزشی</Button></Col>
        //                     <Col md={"auto"}><Button href="/#">0 تومان {<IconShoppingCart size={19} />}</Button></Col>
        //                 </Row>

        //             </Col>
        //         </Row>
        //     </Container>
        // </>
    )
}

export default Topbar