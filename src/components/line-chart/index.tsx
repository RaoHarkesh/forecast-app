"use client";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#2B465E",
      },
      ticks: {
        color: "#2B465E",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "CONSUMPTIONS (FT, THOUSANDS)",
        color: "#2B465E",
        font: {
          size: 14,
          weight: "bold",
        },
      },
      ticks: {
        color: "#2B465E",
      },
    },
  },
};

interface props {
  data: {
    labels: Array<string>;
    datasets: Array<{
      label: string;
      data: Array<number | null>;
      borderColor: string;
      backgroundColor: string;
      borderWidth: number;
      tension: number;
      borderDash?: Array<number>;
    }>;
  };
}

export default function LineChart({ data }: props) {
  return <Line data={data} options={options} />;
}
