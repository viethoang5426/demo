import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-apexcharts';
import { EuiBasicTable, EuiText } from '@elastic/eui';

export default function ApexChart({selected}) {
  const data = [
    { term: "Kỳ 1", subjects: { Toán: 8, Lý: 6, Hóa: 7 } },
    { term: "Kỳ 2", subjects: { Toán: 9, Lý: 8, Hóa: 8.5 } },
    { term: "Kỳ 3", subjects: { Toán: 9.5, Lý: 8.5, Hóa: 9 } },
  ];

  const series =selected? 
  [
    {
      name: selected,
      data: data.map((item) => ({
        x: item.term,
        y: item.subjects[selected] || 0,
        subjects: item.subjects[selected],
      })),
    },
  ]
  :
   [
    {
      name: "Điểm trung bình",
      data: data.map((item) => ({
        x: item.term,
        y: Object.values(item.subjects).reduce((acc, score) => acc + score, 0) / Object.values(item.subjects).length,
        subjects: item.subjects,
      })),
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    stroke: {
      width: 2,
    },
    xaxis: {
      type: "category",
      title: {
        text: "",
      },
    },
    yaxis: {
      min: 0,
      max: 10,
      title: {
        text: "",
      },
    },
    legend: {
      position: 'bottom',
      floating: false,
      showForSingleSeries: true,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {

        // Tạo container cho tooltip
        const containerId = "tooltip-container";
        // Render EuiBasicTable vào tooltip
        setTimeout(() => {
          
          let tooltipEl = document.getElementById(containerId);
                if (tooltipEl) {
                  const dataPoint = w.config.series[seriesIndex].data[dataPointIndex];
                  const subjects = dataPoint.subjects
                    ? Object.entries(dataPoint.subjects).map(([subject, score]) => ({
                        subject,
                        score,
                      }))
                    : [];
                  const avgScore =
                  subjects.reduce((acc, curr) => acc + curr.score, 0) / subjects.length;
        
                  ReactDOM.render(
                    selected?
                    <div style={{padding:"5px"}}>
                      Điểm: {dataPoint.subjects}
                    </div>
                    :<div>
                      <EuiText size='s' textAlign='center'>
                        Điểm trung bình: {avgScore.toFixed(2)}
                      </EuiText>
                        <EuiBasicTable
                          items={subjects}
                          columns={[
                            { field: "subject", name: "Môn học" },
                            { field: "score", name: "Điểm" },
                          ]}
                        />
                    </div>
                    ,
                    tooltipEl
                  );
                }
              }, 0);

        // Trả về HTML có container để render EuiBasicTable vào
        return `<div id="${containerId}" style="width: 150px;"></div>`;
      },
    },
  };

  return <Chart options={options} series={series} type="line" height={350}/>;
}
