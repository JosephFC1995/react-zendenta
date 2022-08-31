import { FC } from "react";
import Button from "@/components/Button";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    return (
        <>
            <header className="header header--page flex w-full justify-between px-8 min-h-[80px] bg-slate-100 items-center border-b-[1px] border-b-slate-200">
                <div className="header--left flex gap-3 items-center">
                    <IconGgChart className="text-blue-700 text-2xl" />
                    <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
                </div>

                <div className="header--right flex items-center gap-4">
                    <div className="header--search">
                        <div className="header--search--container w-[200px] flex gap-2 items-center border-[1.5px] p-2 rounded-full border-slate-300">
                            <IconGgSearch className="text-slate-300 flex-none" />
                            <input type="text" placeholder="Search" className="outline-none w-full text-slate-400 placeholder:text-slate-500 placeholder:font-bold bg-transparent font-bold" />
                        </div>
                    </div>
                    <div className="header--add flex gap-4">
                        <Button icon={<IconGgMathPlus />} rounded color="primary" />
                        <Button icon={<IconGgNotifications />} rounded border color="white" showPointer />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
