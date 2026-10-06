import React from 'react';

export const DoughnutChart = ({ data }) => {
  const labels = data?.labels ?? [];
  const values = data?.datasets?.[0]?.data ?? [];
  const total = values.reduce((sum, value) => sum + Number(value || 0), 0) || 1;

  return (
    <div className="chart-placeholder">
      {labels.map((label, index) => {
        const value = Number(values[index] || 0);
        const percent = total === 0 ? 0 : (value / total) * 100;

        return (
          <div key={label} style={{ marginBottom: '8px' }}>
            <strong>{label}</strong>: {value} ({percent.toFixed(1)}%)
          </div>
        );
      })}
    </div>
  );
};
