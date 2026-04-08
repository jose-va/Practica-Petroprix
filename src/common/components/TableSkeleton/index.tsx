import { Skeleton, Space, Divider } from 'antd';

const TableSkeleton = () => (
  <div style={{ padding: '20px' }}>
    <Space split={<Divider type="vertical" />} style={{ marginBottom: 20 }}>
      <Skeleton.Button active size="small" style={{ width: 100 }} />
      <Skeleton.Button active size="small" style={{ width: 150 }} />
      <Skeleton.Button active size="small" style={{ width: 200 }} />
    </Space>

    {[...Array(6)].map((_, index) => (
      <div key={index} style={{ marginBottom: 16 }}>
        <Skeleton 
          active 
          title={false} 
          paragraph={{ rows: 1, width: '100%' }} 
        />
      </div>
    ))}
  </div>
)

export default TableSkeleton