import { Divider } from 'antd';
import { default as Button } from 'components/Buttons/Button';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const smartContracts = t('SmartContracts', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
    };

    const { mainHeader, subHeader, exportButton } = smartContracts;

    const dataSource = [
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
        {
            key: '1',
            contractAddress: '0x5bD7123A1F7F5b609489F3edF226b48c947F1B2C',
            contractGroupName: 'Group A',
            dateTime: '31-Dec-2024 | 10:15 AM',
        },
    ];

    const columns = [
        {
            title: 'Contract Address',
            dataIndex: 'contractAddress',
            key: 'contractAddress',
        },
        {
            title: 'Contract/Group Name',
            dataIndex: 'contractGroupName',
            key: 'contractGroupName',
        },
        {
            title: 'Date & Time',
            dataIndex: 'dateTime',
            key: 'dateTime',
        },
    ];

    return (
        <div className='h-[-webkit-fill-available]'>
            <TableHeader mainHeader={mainHeader} subHeader={subHeader} button={<Button
                title={exportButton}
                icon={<FiDownload size={14} />}
                onClick={() => { }}
                iconPosition={'start'}
            />}
            />
            <Divider className='bg-[#EAECF0] my-0' />
            <Table columns={columns} data={dataSource} />
        </div>
    );
}

export default Index;
