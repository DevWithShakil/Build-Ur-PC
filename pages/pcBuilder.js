import Link from 'next/link';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
    {
        key: '1',
        label: 'CPU',
        children: <Link href="/category/Processor" className="mr-5 hover:text-gray-900">
            CPU
        </Link>,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'MOTHERBOARD',
        children: <Link href="/category/Motherboard" className="mr-5 hover:text-gray-900">
            MOTHERBOARD
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
            POWER SUPPLY
        </Link>,
        style: panelStyle,
    },
    {
        key: '4',
        label: 'STORAGE DEVICE',
        children: <Link href={"/category/Storage"} className="mr-5 hover:text-gray-900">
            STORAGE DEVICE
        </Link>,
        style: panelStyle,
    },
    {
        key: '5',
        label: 'MONITOR',
        children: <Link href={"/category/Monitors"} className="mr-5 hover:text-gray-900">
            MONITOR
        </Link>,
        style: panelStyle,
    },
    {
        key: '6',
        label: 'OTHERS',
        children: <Link
            href={"/category/GraphicsCard"}
            className="mr-5 hover:text-gray-900"
        >
            OTHERS
        </Link>,
        style: panelStyle,
    },
];

const pcBuilder = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <div>

            <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: token.colorBgContainer,
                    alignContent: 'center',
                    alignItems: 'center'
                }}
                items={getItems(panelStyle)}
            />
        </div>
    );
};

export default pcBuilder;