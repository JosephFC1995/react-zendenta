import { FC } from "react";
import slugify from "slugify";

interface SidebarItemProps {
    key?: any,
    title: string,
    icon: any
}

const SidebarItem: FC<SidebarItemProps> = ({ title, icon }) => {
    return (
        <>
            <div className="sidebar--middler--item cursor-pointer transition-all ease-in-out mb-3 text-slate-700 hover:bg-blue-700 hover:text-white" data-link={slugify(title, { lower: true })}>
                <a href="#" className='flex gap-2 min-h-[60px] items-center px-5'>
                    {icon}
                    <span className='font-bold mb-[1px]'>{title}</span>
                </a>
            </div>
        </>
    );
}

export default SidebarItem;
