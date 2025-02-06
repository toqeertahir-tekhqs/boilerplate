import { Divider } from 'antd';
import { default as Button } from 'components/Buttons/Button';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const disputeResolution = t('DisputeResolution', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
    };

    const { mainHeader, subHeader, exportButton } = disputeResolution;

    const dataSource = [
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },

        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },
        {
            key: '1',
            disputeId: 'COMPLIANCE202501',
            userName: 'John Iqbal',
            disputeType: 'Payment Dispute',
            status: 'Pending',
            dateRaised: '30/01/2025',
            assignedTo: 'Admin Saad',
            resolutionDeadline: '05/02/2025',
        },

    ];

    const columns = [
        {
            title: 'Dispute ID',
            dataIndex: 'disputeId',
            key: 'disputeId',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Dispute Type',
            dataIndex: 'disputeType',
            key: 'disputeType',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Date Raised',
            dataIndex: 'dateRaised',
            key: 'dateRaised',
        },
        {
            title: 'Assigned To',
            dataIndex: 'assignedTo',
            key: 'assignedTo',
        },
        {
            title: 'Resolution Deadline',
            dataIndex: 'resolutionDeadline',
            key: 'resolutionDeadline',
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
