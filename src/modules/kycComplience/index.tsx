import { SmileOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { default as Button } from 'components/Buttons/Button';
import PopOver from 'components/PopOver';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import CustomTimeline from 'components/Timeline';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const kYCCompliance = t('KYCCompliance', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const timeLineItems: any[] = [
        {
            color: 'green',
            children: 'Create a services site 2015-09-01',
        },
        {
            color: 'green',
            children: 'Create a services site 2015-09-01',
        },
        {
            color: 'red',
            children: (
                <>
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </>
            ),
        },
        {
            children: (
                <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </>
            ),
        },
        {
            color: 'gray',
            children: (
                <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </>
            ),
        },
        {
            color: 'gray',
            children: (
                <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </>
            ),
        },
        {
            color: '#00CCFF',
            dot: <SmileOutlined />,
            children: <p>Custom color testing</p>,
        },
    ]

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
            render: (text: string) => (
                <>
                    <PopOver title='title' content={<CustomTimeline items={timeLineItems} />}>{text}</PopOver>
                </>
            )
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
        <div className='h-[-webkit-fill-available]' >
            <TableHeader mainHeader={mainHeader} subHeader={subHeader} button={<Button
                title={exportButton}
                icon={<FiDownload size={14} />}
                onClick={() => { }}
                iconPosition={'start'}
            />}
            />
            <Divider className='bg-[#EAECF0] my-0' />
            <Table columns={columns} data={dataSource} />
        </div >
    );
}

export default Index;
