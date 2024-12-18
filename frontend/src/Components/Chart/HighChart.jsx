import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { EuiBasicTable, EuiText } from "@elastic/eui";

const HighChart = () => {
  const chartRef = useRef(null);

  const data = [
    { term: "Kỳ 1", subjects: { Toán: 8, Lý: 6, Hóa: 7 } },
    { term: "Kỳ 2", subjects: { Toán: 9, Lý: 8, Hóa: 8.5 } },
    { term: "Kỳ 3", subjects: { Toán: 9.5, Lý: 8.5, Hóa: 9 } },
  ];

  useEffect(() => {
    const chart = chartRef.current.chart;

    chart.tooltip.options.formatter = function () {
      const containerId = "tooltip-container";
      
      setTimeout(() => {
        const tooltipEl = document.getElementById(containerId);

        if (tooltipEl) {
          const subjects = Object.entries(data[this.point.index].subjects).map(
            ([subject, score]) => ({
              subject,
              score,
            })
          );
          const avgScore =
          subjects.reduce((acc, curr) => acc + curr.score, 0) / subjects.length;

          ReactDOM.render(
            <div>
              <EuiText style={{ fontWeight: "bold" }}>
                Điểm trung bình: {avgScore.toFixed(2)}
              </EuiText>
                <EuiBasicTable
                  items={subjects}
                  columns={[
                    { field: "subject", name: "Môn học" },
                    { field: "score", name: "Điểm" },
                  ]}
                />
            </div>,
            tooltipEl
          );
        }
      }, 0);

      return `<div id="${containerId}" style="min-width: 150px;"></div>`;
    };

    chart.tooltip.options.hideDelay = 100;
  }, []);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: data.map((item) => item.term),
      title: {
        text: "Thời gian các kỳ",
      },
    },
    yAxis: {
      title: {
        text: "Thang điểm",
      },
      min: 0,
      max: 10,
    },
    tooltip: {
      useHTML: true,
      hideDelay: 0,
    },
    series: [
      {
        name: "Điểm trung bình",
        data: data.map((item) =>
          Object.values(item.subjects).reduce((acc, curr) => acc + curr, 0) / Object.values(item.subjects).length),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default HighChart;
