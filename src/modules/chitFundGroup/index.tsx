import { MoreOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { default as Button } from 'components/Buttons/Button';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import Tag from 'components/Tag';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const chitFundGroup = t('ChitFundGroup', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
        tagTitle: string;
    };
    const { mainHeader, subHeader, exportButton, tagTitle } = chitFundGroup;
    const dataSource = [
        {
            key: '1',
            groupName: 'Mike',
            status: 'Completed',
            participants: '15/20',
            contributionAmount: '₹ 300/month',
            startDate: '01-Jan-2024',
            endDate: '31-Jan-2024',
            actions: ':'
        },
        {
            key: '1',
            groupName: 'Mike',
            status: 'Completed',
            participants: '15/20',
            contributionAmount: '₹ 300/month',
            startDate: '01-Jan-2024',
            endDate: '31-Jan-2024',
            actions: ':'
        }, {
            key: '1',
            groupName: 'Mike',
            status: 'Completed',
            participants: '15/20',
            contributionAmount: '₹ 300/month',
            startDate: '01-Jan-2024',
            endDate: '31-Jan-2024',
            actions: ':'
        }, {
            key: '1',
            groupName: 'Mike',
            status: 'Completed',
            participants: '15/20',
            contributionAmount: '₹ 300/month',
            startDate: '01-Jan-2024',
            endDate: '31-Jan-2024',
            actions: ':'
        }, {
            key: '1',
            groupName: 'Mike',
            status: 'Completed',
            participants: '15/20',
            contributionAmount: '₹ 300/month',
            startDate: '01-Jan-2024',
            endDate: '31-Jan-2024',
            actions: ':'
        }, {
            key: '1',
            groupName: 'Mike',
            status: 'Completed',
            participants: '15/20',
            contributionAmount: '₹ 300/month',
            startDate: '01-Jan-2024',
            endDate: '31-Jan-2024',
            actions: ':'
        },
    ];

    const columns = [
        {
            title: 'Group Name',
            dataIndex: 'groupName',
            key: 'groupName',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Participants',
            dataIndex: 'participants',
            key: 'participants',
        },
        {
            title: 'Contribution Amount',
            dataIndex: 'contributionAmount',
            key: 'contributionAmount',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <>
                    <MoreOutlined />
                </>
            )
        },
    ];

    // const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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
            {/* <>
                <ConfirmModal
                    open={isConfirmModalOpen}
                    title={<span className='text-[#101828]'>Confirm</span>}
                    okText="OK"
                    okButtonProps={
                        {
                            style: { backgroundColor: '#D92D20', borderColor: '#D92D20', color: '#ffffff' },
                            className: 'custom-ok-button',
                        }
                    }
                    cancelText="Cancel"
                    onCancel={() => setIsConfirmModalOpen(false)}
                    icon={<img src={brytAssets.TrashLogo} alt="trash" />}
                    onOk={() => {
                        console.log('Confirmed action');
                        setIsConfirmModalOpen(false);
                    }}
                    body={<p className='text-[#475467]'>Remove a chit fund along with all its details, including transactions and participant records.</p>}
                />
            </> */}
        </div>
    );
}

export default Index;
