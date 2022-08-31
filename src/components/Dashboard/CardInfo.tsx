import { FC } from "react";
import Button from "../Button";

interface CardInfoProps {

}

const CardInfo: FC<CardInfoProps> = () => {
    return (
        <>
            <div className="card--info--top flex gap-10 border-b-[1px]">
                <div className="card--info--top--l border-r-[1px] pr-10 pb-5">
                    <h4 className="mb-6 text-slate-800 font-extrabold text-lg">APPROVAL REQUEST</h4>
                    <h3 className="text-slate-400 text-6xl mb-3">26</h3>
                    <p className="my-0 py-0 mb-[40px] capitalize text-slate-400 text-lg">Request waiting to approve</p>
                    <Button classes="w-[170px]" hasIconGo>More</Button>
                </div>
                <div className="card--info--top--r pb-5">
                    <h4 className="mb-6 text-slate-800 font-extrabold text-lg uppercase">Upcoming appoinment</h4>
                    <h3 className="text-slate-400 text-6xl mb-3">14</h3>
                    <p className="my-0 py-0 mb-[40px] capitalize text-slate-400 text-lg">·</p>
                    <Button classes="w-[170px]" hasIconGo>More</Button>
                </div>
            </div>
        </>
    );
}

export default CardInfo;
