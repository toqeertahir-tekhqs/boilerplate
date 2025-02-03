import { Divider } from 'antd';
import Button from 'components/Buttons/Button';
import ModelGeneric from 'components/modal/ModelGeneric';
import Table from 'components/Table/index';
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
    const modalBody = () => (
        <>ssas</>
    )
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
                        title='Export'
                        icon={<FiDownload size={14} />}
                        onClick={() => { }}
                        iconPosition={'start'}
                    />
                </div>
            </div>
            <Divider className='bg-[#EAECF0] my-0' />

            <Table columns={columns} data={dataSource} />
            <ModelGeneric
                title="sss"
                width={1500}
                body={modalBody}
                onCancel={() => { }}
                onSubmit={() => { }}
            />
        </div>
    );
}

export default Index;
