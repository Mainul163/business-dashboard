import React from "react";
import { Line } from "@ant-design/plots";
const OrderAnalytics = () => {
  const data = [
    {
      year: "2013",
      value: 554,
      category: "Cement production",
    },
    {
      year: "2013",
      value: 68,
      category: "Gas flarinl",
    },
    {
      year: "2014",
      value: 3280,
      category: "Liquid fuel",
    },
    {
      year: "2014",
      value: 4117,
      category: "Solid fuel",
    },
    {
      year: "2014",
      value: 1823,
      category: "Gas fuel",
    },
    {
      year: "2014",
      value: 1568,
      category: "Cement production",
    },
    {
      year: "2014",
      value: 68,
      category: "Gas flarinl",
    },
  ];
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };
  // test
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold" }}> Order Analytics</h2>
      </div>
      <Line {...config} />
    </div>
  );
};

export default OrderAnalytics;
