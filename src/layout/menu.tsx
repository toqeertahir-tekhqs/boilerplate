import {
    AppstoreOutlined,
    CalendarOutlined,
    MailOutlined,
    SettingOutlined
} from '@ant-design/icons';
import type { GetProp, MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const MenuAntD = () => {
    type MenuItem = GetProp<MenuProps, 'items'>[number];
    const navigate = useNavigate()
    const items: MenuItem[] = [
        {
            key: '/login',
            icon: <MailOutlined />,
            label: 'Login',
            onClick: () => {
                navigate('/login')
            }
        },
        {
            key: 'page2',
            icon: <CalendarOutlined />,
            label: 'Navigation Two',
            onClick: () => {
                navigate('/page2')
            }
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
    ];
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={'inline'}
            theme={'light'}
            items={items}
        // inlineCollapsed={sidebarOpenClose}
        />
    );
}

export default MenuAntD;
