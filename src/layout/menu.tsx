import { Menu, MenuProps } from 'antd';
import { brytAssets } from "assets";
import { useState } from 'react';
import { FiBell } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";

const MenuAntD = () => {
    type MenuItem = Required<MenuProps>['items'][number];
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items: MenuItem[] = [
        {
            label: 'Navigation One',
            key: 'mail',
        },
        {
            label: 'Navigation Two',
            key: 'mail1',
        },
        {
            label: 'Navigation Three',
            key: 'mail2',
        },
        {
            label: 'Navigation fouth',
            key: 'mail3',
        },
    ]
    return (
        <>
            <div>
                <img src={brytAssets.BrytLogo} alt="Bryt Logo" />
            </div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
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
