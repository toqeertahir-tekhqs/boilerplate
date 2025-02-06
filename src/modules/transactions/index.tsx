import { Divider } from 'antd';
import { default as Button } from 'components/Buttons/Button';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import Tag from 'components/Tag';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const transactions = t('Transactions', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
        tagTitle: string;
    };

    const { mainHeader, subHeader, exportButton, tagTitle } = transactions;

    const dataSource = [
        {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        },
        {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        }, {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        }, {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        },
        {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        },

        {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        },

        {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        },
        {
            key: '1',
            transactionId: "TXN-001234",
            walletAddress: "TXN-001234",
            transactionType: "TXN-001234",
            receiverName: "TXN-001234",
            amount: "TXN-001234",
            status: "TXN-001234",
            dateTime: "TXN-001234",
        },
    ];

    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Wallet Address',
            dataIndex: 'walletAddress',
            key: 'walletAddress',
        },
        {
            title: 'Transaction Type',
            dataIndex: 'transactionType',
            key: 'transactionType',
        },
        {
            title: 'Receiver Name',
            dataIndex: 'receiverName',
            key: 'receiverName',
        }, {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
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
                tag={<Tag color="#DFF8FF" title={tagTitle} />}
            />
            <Divider className='bg-[#EAECF0] my-0' />
            <Table columns={columns} data={dataSource} />
        </div>
    );
}

export default Index;
