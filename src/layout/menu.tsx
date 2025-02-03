import { brytAssets } from "assets";
import { FiBell } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";

const MenuAntD = () => {

    return (
        <>
            <div>
                <img src={brytAssets.BrytLogo} alt="Bryt Logo" />
            </div>
            <div className="text-[#000000] flex gap-5">
                <div className="menu-selected px-3 py-3 ">Dashboard</div>
                <div className="menu-selected px-3 py-3 ">Chit Fund Group</div>
                <div className="menu-selected px-3 py-3 ">Transactions</div>
                <div className="menu-selected px-3 py-3 ">Smart Contracts</div>
                <div className="menu-selected px-3 py-3 ">KYC/AML Compliance</div>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <LuSettings size={20} />
                </div>
                <div>
                    <FiBell size={20} />
                </div>
                <div>
                    <img src={brytAssets.Avatar} alt="Avatar" />
                </div>
            </div>
        </>
    );
}

export default MenuAntD;
