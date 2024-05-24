"use client"
import { IconTriangleInvertedFilled } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Menus({ menuItems }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({ elemId: "", isHovered: false })
    const mouseLeaveHandler = () => setIsSubMenuOpen({ elemId: "", isHovered: false })
    const mouseEnterHandler = ({ target: { id } }) => {
        setIsSubMenuOpen({ elemId: id, isHovered: true })
    }
    return (
        menuItems.map(({ id, title, subMenus }) => {
            return <div id={id} className="relative w-fit" onMouseEnter={(event) => { subMenus && mouseEnterHandler(event) }} >
                <Link id={id} href="/">
                    <div id={id} className={`custom-transition ${subMenus ? null : "hover:translate-y-2"} flex items-center lg:gap-3 gap-1`} >
                        <p id={id} className="nav-item xl:text-[16px] text-[15px] text-nowrap custom-transition hover:text-gray-500 ">{title}</p>
                        {subMenus ?
                            <IconTriangleInvertedFilled id={id} className="text-dark-color" size={11} />
                            : null
                        }
                    </div>
                </Link>
                {subMenus && <div id={id} onMouseLeave={mouseLeaveHandler} className={`absolute w-full py-20 top-0 ${isSubMenuOpen.elemId == id && isSubMenuOpen.isHovered ? "block" : "hidden"}`}>
                    <div id={id} className={`absolute  w-full z-10 top-10 shadow drop-shadow-2xl shadow-black/30 bg-white`}>
                        {subMenus.map(({ title }) => <Link id={id} href="./" >
                            <div id={id} className="w-full py-2 custom-transition bg-white text-dark-color hover:bg-dark-color hover:text-primary-color ">
                                <p id={id} className="pr-3 xl:text-[15px] text-[14px] text-nowrap">{title}</p>
                            </div>
                        </Link>
                        )
                        }
                    </div >
                </div>}
            </div>
        })
    )
}

export default Menus