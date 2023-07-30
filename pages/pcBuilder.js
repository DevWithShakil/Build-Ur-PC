/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse, theme } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { ItemContext } from './_app';
import Image from 'next/image';

const getItems = (panelStyle) => [

    {
        key: '1',
        label: 'PROCESSOR',
        children: <Link href="/category/Processor" className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'MOTHERBOARD',
        children: <Link href="/category/Motherboard" className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '3',
        label: 'POWER SUPPLY',
        children: <Link
            href={"/category/PowerSupply"}
            className="mr-5 hover:text-gray-900"
        >
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '4',
        label: 'STORAGE DEVICE',
        children: <Link href={"/category/Storage"} className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '5',
        label: 'MONITOR',
        children: <Link href={"/category/Monitors"} className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '5',
        label: 'OTHERS',
        children: <Link href={"/category/GraphicsCard"} className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },

];

const pcBuilder = () => {

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 36,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'circle',
    };

    const { PcComponent } = useContext(ItemContext)
    const handleDisable = () => {
        if (PcComponent.length < 5) {
            return true
        } else {
            return false
        }
    }
    return (

        <>
            <div>
                <h1 className='text-2xl font-extrabold text-center mt-12'>BUILD YOU OWN PC</h1>
            </div>
            <div className='flex justify-between'>

                <div className='m-12 mb-6'>

                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,

                        }}
                        items={getItems(panelStyle)}
                    />
                </div>

                <div className='mr-7 p-8'>
                    {PcComponent.map((item, index) => (
                        <div key={index}>
                            <div className="max-w-xl flex mb-2 justify-between items-center w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className='w-[100px] h-[100px] p-2 border-r'>
                                    <Image
                                        height={100}
                                        width={100}
                                        alt=""
                                        className=""
                                        src={item.image}
                                    />
                                </div>
                                <div className="p-4">
                                    <p className=" font-semibold mb-2">{item.title}</p>
                                    <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                    <p className="text-green-600 text-lg font-semibold">${item.price}</p>
                                </div>
                            </div>
                        </div>

                    ))}

                    <div>
                        <button disabled={handleDisable()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Complete Build
                        </button>
                    </div>


                </div>

            </div >

        </>
    );
};

export default pcBuilder;
