import { FC } from "react";
import SidebarItem from "./Sidebar/Item";

interface SidebarProps { }

interface Links {
    title: string,
    icon: any,
}

const Sidebar: FC<SidebarProps> = () => {

    const links: Links[] = [
        {
            title: "Overview",
            icon: <IconGgChart />
        },
        {
            title: "Calendar",
            icon: <IconGgCalendarToday />
        },
        {
            title: "Patients Lists",
            icon: <IconGgUser />
        },
        {
            title: "Messages",
            icon: <IconGgComment />
        },
        {
            title: "Payment information",
            icon: <IconGgDollar />
        },
        {
            title: "Settings",
            icon: <IconGgWebsite />
        }
    ]

    return (
        <>
            <div className="sidebar min-w-[250px] w-[250px] h-screen font-sans inline-flex flex-col">
                <div className="sidebar--top bg-white border-b-[1px] border-b-slate-200 flex justify-between items-center gap-2 px-4 h-[80px]">
                    <div className="sidebar--logo p-2">
                        <img src="/images/logo.png" alt="Logo" className="h-[50px]" />
                    </div>
                    <IconGgMenu className="text-slate-500 cursor-pointer text-xl" />
                </div>
                <div className="sidebar--middler bg-white flex-1 flex flex-col justify-between">
                    <div className="sidebar--middler--list">
                        {
                            links.map((link, index) => <SidebarItem key={index} title={link.title} icon={link.icon} />)
                        }
                    </div>
                    <div className="sidebar--middler--help">
                        <div className="sidebar--middler--item cursor-pointer mb-3 text-slate-400 transition-all ease-in-out hover:bg-slate-800 hover:text-white" data-link="helper">
                            <a href="#" className='flex gap-2 min-h-[60px] items-center px-5'>
                                <IconGgInfo />
                                <span className='font-bold mb-[1px]'>Help ?</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar--bottom pb-6 bg-white border-t-[1px] pt-4 border-t-slate-100 cursor-pointer">
                    <div className="sidebar--bottom--user flex gap-3 px-4 items-center">
                        <div className="sidebar--buttom--image relative">
                            <img src="https://i.pravatar.cc/350?img=11" alt="User" className="max-w-full w-[50px] rounded-full" />
                        </div>
                        <div className="sidebar--button--info flex-1">
                            <h4 className="font-bold text-slate-700">Drg. Adam H.</h4>
                            <p className="mb-0 pb-0 text-slate-400 text-sm">
                                Dentis
                            </p>
                        </div>
                        <div className="sidebar--button--action text-slate-700">
                            <IconGgSelect />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
