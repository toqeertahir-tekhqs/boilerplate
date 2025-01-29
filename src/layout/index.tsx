import {
    AppstoreOutlined,
    CalendarOutlined,
    CloseCircleOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type { GetProp, MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    type MenuItem = GetProp<MenuProps, 'items'>[number];
    const [sidebarOpenClose, setSidebarOpenClose] = useState<boolean>(window.innerWidth < 640)
    const items: MenuItem[] = [
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        }, {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        }, {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        }, {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        }, {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        }, {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '1',
            icon: <MailOutlined />,
            label: 'Navigation One',
        },
        {
            key: '2',
            icon: <CalendarOutlined />,
            label: 'Navigation Two',
        },
        {
            key: 'sub1',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                { key: '3', label: 'Option 3' },
                { key: '4', label: 'Option 4' },
                {
                    key: 'sub1-2',
                    label: 'Submenu',
                    children: [
                        { key: '5', label: 'Option 5' },
                        { key: '6', label: 'Option 6' },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Three',
            icon: <SettingOutlined />,
            children: [
                { key: '7', label: 'Option 7' },
                { key: '8', label: 'Option 8' },
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
            ],
        },
        {
            key: 'link',
            icon: <LinkOutlined />,
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Ant Design
                </a>
            ),
        },
    ];
    return (
        <div className='flex relative'>
            <div className={`h-[100vh] z-50 bg-red-100 ${sidebarOpenClose ? 'max-sm:hidden' : ''} max-sm:absolute`}
                style={{
                    scrollbarWidth: 'none', scrollbarColor: 'red #41d1ff'
                }}
            >
                <div>
                    <div className='h-20'>Logo + App Name</div>
                    <div className='h-[calc(100vh-164px)] overflow-y-auto
                    border-solid border-[2px] border-[red]
                    ' style={{
                            scrollbarWidth: 'none',
                        }}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={'inline'}
                            theme={'light'}
                            items={items}
                        // inlineCollapsed={sidebarOpenClose}
                        />
                    </div>
                    <div className='h-20'>Logo + App Name</div>

                </div>
            </div>
            <div className='sm:hidden absolute top-12 z-50 ' onClick={() => {
                setSidebarOpenClose(!sidebarOpenClose)
            }}><CloseCircleOutlined />
            </div>
            <div className='w-full'>
                <div className='static h-20 bg-black'>
                    <div>Breadcrum</div>
                    <div>Breadcrum1</div>
                </div>
                <div className='h-[calc(100vh-188px)] overflow-y-auto m-2 border-solid border-[6px] border-[#fef2f2]'
                    style={{
                        scrollbarWidth: 'none', scrollbarColor: 'red #41d1ff'
                    }}
                >

                    <div className='bg-red-50'>
                        {children}
                        {children}

                    </div>
                </div>
                <div className='static h-20 bg-black'>
                    <div>Breadcrum</div>
                    <div>Breadcrum1</div>
                </div>
            </div>

        </div >
    );
}

export default Layout;
