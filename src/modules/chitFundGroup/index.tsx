import { Divider } from 'antd';
import { brytAssets } from 'assets';
import { default as Button } from 'components/Buttons/Button';
import ConfirmModal from 'components/modal/ModalConfirm';
import Table from 'components/Table/index';
import TableHeader from 'components/TableHeader';
import Tag from 'components/Tag';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiDownload } from "react-icons/fi";

const Index = () => {
    const { t } = useTranslation();
    const validationSchema = t('ChitFundGroup', { returnObjects: true }) as {
        mainHeader: string;
        subHeader: string;
        exportButton: string;
    };

    const { mainHeader, subHeader, exportButton } = validationSchema;
    console.log(mainHeader);
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    return (
        <div className='h-[-webkit-fill-available]'>
            <TableHeader mainHeader={mainHeader} subHeader={subHeader} button={<Button
                title={exportButton}
                icon={<FiDownload size={14} />}
                onClick={() => { }}
                iconPosition={'start'}
            />}
                tag={<Tag color="#DFF8FF" title='119 Active Chit Funds' />}
            />
            <Divider className='bg-[#EAECF0] my-0' />

            <TableHeader mainHeader={mainHeader} subHeader={subHeader} button={<Button
                onClick={() => setIsConfirmModalOpen(true)} title='Show Confirm Modal'
            />}
                tag={<Tag color="#DFF8FF" title='119 Active Chit Funds' />}
            />
            <Divider className='bg-[#EAECF0] my-0' />

            <Table columns={columns} data={dataSource} />
            <>
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
            </>
        </div>
    );
}

export default Index;
