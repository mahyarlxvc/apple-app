"use client"
import React, { useRef, useState } from 'react'
import Input from '../../../components/forms/input/Input'
import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import { addUser } from '../../utils'

function login() {
    const [action, setAction] = useState("login")
    const usenameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const repeatPasswordRef = useRef()

    const userHandler = () => {
        if (action === "login") {
            console.log("login");
        }
        else {
            addUser({
                username: usenameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                purchased: []
            })
                .then(res => window.alert(res.statusText))
        }
    }
    const clickHandler = () => setAction(action === "login" ? "register" : "login")
    return (
        <div className='h-screen flex-center'>
            <div className='relative sm:w-[460px] w-[90svw] bg-dark-color/15 rounded-3xl flex-center' >
                <Link href="./" >
                    <div className='absolute bottom-2 left-3 flex-center text-dark-color text-sm gap-1'>
                        <p className=''>
                            صفحه اصلی
                        </p>
                        <IconHome size={18} />
                    </div>
                </Link>
                <div className='px-5 py-20 w-full'>
                    <div className='flex-center'>
                        <h1 className='text-4xl font-bold text-black/75'>
                            {
                                action === "login" ? "ورود" : "عضویت"
                            }
                        </h1>
                    </div>
                    <div className='pt-10 flex-center flex-col gap-5'>
                        {
                            action === "login" ?
                                <>
                                    <div className='input-field'>
                                        <Input control={emailRef} placeholder={"ایمیل را وارد کنید"} />
                                    </div>
                                    <div className='input-field' >
                                        <Input control={passwordRef} type="password" placeholder={"رمز ورود را وارد کنید"} />
                                    </div>
                                </>
                                :
                                <>
                                    <div className='input-field'>
                                        <Input control={usenameRef} placeholder={"نام کاربری را انتخاب کنید"} />
                                    </div>
                                    <div className='input-field'>
                                        <Input control={emailRef} type="email" placeholder={"ایمیل را وارد کنید"} />
                                    </div>
                                    <div className='input-field'>
                                        <Input control={passwordRef} placeholder={"یک رمز ورود انتخاب کنید"} />
                                    </div>
                                    <div className='input-field'>
                                        <Input control={repeatPasswordRef} placeholder={"رمز خود را تکرار کنید"} />
                                    </div>
                                </>
                        }
                    </div>
                    <div className='pt-5'>
                        <div className='w-full rounded-3xl bg-primary-color/70 '>
                            <button onClick={userHandler} className='text-center text-lg font-bold py-[10px] w-full'>
                                ادامه
                            </button>
                        </div>
                    </div>
                    <div className='pt-10 select-none'>
                        {
                            action === "login" ?
                                <p className='md:text-2xl text-xl font-bold text-center text-dark-color/75'>
                                    آیا هنوز عضو نیستید؟&ensp;
                                    <span onClick={clickHandler} className='text-black/85 cursor-pointer'>
                                        ثبت نام
                                    </span>
                                </p>
                                :
                                <p className='md:text-2xl text-xl font-bold text-center text-dark-color/75'>
                                    قبلا عضو شدید؟&ensp;
                                    <span onClick={clickHandler} className='text-black/85 cursor-pointer'>
                                        اکنون وارد شوید
                                    </span>
                                </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login