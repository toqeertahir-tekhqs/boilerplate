import { Divider } from 'antd';
import { brytAssets } from 'assets';
import { default as Button } from 'components/Buttons/Button';
import ConfirmModal from 'components/modal/ModalConfirm';
import Table from 'components/Table/index';
import { useState } from 'react';
import { FiDownload } from "react-icons/fi";

const Index = () => {

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
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
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
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
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
            <div className='flex justify-between items-center min-h-[83px] px-5'>
                <div>
                    <div>KYC & AML Compliance</div>
                    <div>Keep track of all the KYCs.</div>
                </div>
                <div>
                    <Button
                        title='Export'
                        icon={<FiDownload size={14} />}
                        onClick={() => { }}
                        iconPosition={'start'}
                    />
                </div>
            </div>
            <Divider className='bg-[#EAECF0] my-0' />
            <div className='flex justify-between items-center min-h-[83px] px-5'>
                <div>
                    <div>KYC & AML Compliance</div>
                    <div>Keep track of all the KYCs.</div>
                </div>
                <div>
                    <Button
                        onClick={() => setIsConfirmModalOpen(true)} title='Show Confirm Modal'
                    />
                </div>
            </div>
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
