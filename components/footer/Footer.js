import React from 'react'
import Logo from '../header/logo/Logo'

function Footer() {
    return (
        <section>
            <div className='mt-24 flex lg:flex-row flex-col justify-between items-center border-t-2 px-4 pt-20 pb-28'>
                <div className='flex-center gap-10'>
                    <div>
                        <h5>
                            متن تستی
                        </h5>
                        <p>
                            تست
                        </p>
                        <p>
                            تست
                        </p>
                        <p>
                            تست
                        </p>
                    </div>
                    <div>
                        <h5>
                            متن تستی
                        </h5>
                        <p>
                            تست
                        </p>
                        <p>
                            تست
                        </p>
                        <p>
                            تست
                        </p>
                    </div>
                    <div>
                        <h5>
                            متن تستی
                        </h5>
                        <p>
                            تست
                        </p>
                        <p>
                            تست
                        </p>
                        <p>
                            تست
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center lg:items-end items-center lg:pt-0 pt-5 '>
                    <div className='w-fit'>
                        <Logo />
                    </div>
                    <div className='text-dark-color mt-8'>
                        <p>
                            <span className='font-bold'>
                                آدرس ساختمان میرعماد:
                            </span>
                            تهران، خیابان مطهری، خیابان میرعماد، کوچه جنتی(۱۳)، پلاک ۳۰
                        </p>
                    </div>
                    <div className='text-dark-color mt-2'>
                        <p>
                            <span className='font-bold'>
                                آدرس ساختمان سنایی:
                            </span>
                            تهران، خیابان سنایی، تقاطع خیابان مطهری، کوچه ۲۱، پلاک ۲
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer