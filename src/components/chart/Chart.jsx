import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { name: "sunday", Total: 1200, sum:500 },
  { name: "monday", Total: 2100, sum:600 },
  { name: "tuesday", Total: 800, sum:700 },
  { name: "wednesday", Total: 1600, sum:900 },
  { name: "thursday", Total: 900, sum:400 },
  { name: "Friday", Total: 1700, sum:1000 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={150}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F3476D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F3476D" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sum" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF9478" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF9478" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
         
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#F3476D"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="sum"
            stroke="#FF9478"
            fillOpacity={1}
            fill="url(#sum)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
