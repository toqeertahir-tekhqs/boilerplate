import { MoreOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { brytAssets } from "assets";
import { useState } from 'react';
import { FiBell } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const MenuAntD = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const [current, setCurrent] = useState(location.pathname || '/');
    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items: MenuItem[] = [
        {
            label: 'Dashboard',
            key: '/',
            onClick: () => {
                navigate('/')
            }
        },
        {
            label: 'Chit Fund Group',
            key: '/chit-fund-group',
            onClick: () => {
                navigate('/chit-fund-group')
            }
        },
        {
            label: 'Transactions',
            key: '/transactions',
            onClick: () => {
                navigate('/transactions')
            }
        },
        {
            // label: 'Navigation Three - Submenu',
            key: 'SubMenuitems',
            icon: <MoreOutlined style={{ transform: 'rotate(90deg)', marginTop: '12px' }} />,
            children: [
                {
                    label: 'Smart Contracts',
                    key: '/smart-contracts',
                    onClick: () => {
                        navigate('/smart-contracts')
                    }
                },
                {
                    label: 'KYC/AML Compliance',
                    key: '/kyc-compliance',
                    onClick: () => {
                        navigate('/kyc-compliance')
                    }
                },
                {
                    label: 'Dispute',
                    key: '/dispute',
                    onClick: () => {
                        navigate('/dispute')
                    }
                },
            ],
        },
    ];

    const items_md: MenuItem[] = [

        {
            // label: 'Navigation Three - Submenu',
            key: 'SubMenuitems',
            icon: <MoreOutlined style={{ transform: 'rotate(90deg)', marginTop: '12px' }} />,
            children: [
                {
                    label: 'Dashboard',
                    key: '/',
                    onClick: () => {
                        navigate('/')
                    }
                },
                {
                    label: 'Chit Fund Group',
                    key: '/chit-fund-group',
                    onClick: () => {
                        navigate('/chit-fund-group')
                    }
                },
                {
                    label: 'Transactions',
                    key: '/transactions',
                    onClick: () => {
                        navigate('/transactions')
                    }
                },
                {
                    label: 'Smart Contracts',
                    key: '/smart-contracts',
                    onClick: () => {
                        navigate('/smart-contracts')
                    }
                },
                {
                    label: 'KYC/AML Compliance',
                    key: '/kyc-compliance',
                    onClick: () => {
                        navigate('/kyc-compliance')
                    }
                },
                {
                    label: 'Dispute',
                    key: '/dispute',
                    onClick: () => {
                        navigate('/dispute')
                    }
                },
            ],
        },
    ];
    return (
        <>
            <div>
                <img src={brytAssets.BrytLogo} alt="Bryt Logo" />
            </div>
            <div className='max-md:hidden'>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={window.innerWidth > 768 ? items : items_md}
                    theme="light"
                />
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
