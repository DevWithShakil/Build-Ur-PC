import { Button, Result } from 'antd';

const App = () => (
    <Result
        status="404"
        title="404"
        subTitle={<span style={{ color: 'white' }}>Sorry, the page you visited does not exist.</span>}
        extra={<Button type="primary">Back Home</Button>}
    />
);

export default App;
