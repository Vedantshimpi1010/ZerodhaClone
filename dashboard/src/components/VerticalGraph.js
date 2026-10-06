import React from 'react';

export const VerticalGraph = ({ data }) => {
  const labels = data?.labels ?? [];
  const values = data?.datasets?.[0]?.data ?? [];
  const maxValue = Math.max(...values, 1);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '180px', marginTop: '24px' }}>
      {labels.map((label, index) => {
        const value = Number(values[index] || 0);
        const height = `${(value / maxValue) * 100}%`;

        return (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '24px', height: '120px', display: 'flex', alignItems: 'flex-end' }}>
              <div
                style={{
                  width: '100%',
                  height,
                  background: 'linear-gradient(180deg, #4CAF50 0%, #2E7D32 100%)',
                  borderRadius: '6px 6px 0 0',
                }}
              />
            </div>
            <span style={{ fontSize: '12px' }}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalGraph;
