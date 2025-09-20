import { Typography } from 'antd'
import React from 'react'



const MainContent = () => {

    const { Text } = Typography;
    return (
        <div style={{
            background: 'white',
            minHeight: '100%',
            padding: '24px'
        }}>
            <Text style={{ fontSize: '14px', fontWeight: '600', }}>eCommerce</Text>
        </div>
    )
}

export default MainContent