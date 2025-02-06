import { Divider } from 'antd';
import { default as Button } from 'components/Buttons/Button';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const kYCCompliance = t('KYCCompliance', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
    };

    const { mainHeader, subHeader, exportButton } = kYCCompliance;

    const dataSource = [
        {
            key: '1',
            userId: '1001',
            kycStatus: 'Verified',
            userType: 'Organizer',
            verificationDate: '25/01/2025',
        },
        {
            key: '1',
            userId: '1001',
            kycStatus: 'Verified',
            userType: 'Organizer',
            verificationDate: '25/01/2025',
        },
        {
            key: '1',
            userId: '1001',
            kycStatus: 'Verified',
            userType: 'Organizer',
            verificationDate: '25/01/2025',
        },
        {
            key: '1',
            userId: '1001',
            kycStatus: 'Verified',
            userType: 'Organizer',
            verificationDate: '25/01/2025',
        },
        {
            key: '1',
            userId: '1001',
            kycStatus: 'Verified',
            userType: 'Organizer',
            verificationDate: '25/01/2025',
        },
    ];

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'KYC Status',
            dataIndex: 'kycStatus',
            key: 'kycStatus',
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'userType',
        },
        {
            title: 'Verification Date',
            dataIndex: 'verificationDate',
            key: 'verificationDate',
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
