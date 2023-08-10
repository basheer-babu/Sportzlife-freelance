import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import TopBox from "../../components/topBox/TopBox";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import PieChartEx from "../../components/pieChart/PieChart";
let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

const Home = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="subti">
          <h3>STATISTICS</h3>
        </div>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          {/* <Widget type="balance" /> */}

          <div className="box box4">
            <TopBox />
          </div>
          <div className="box box5">
            <h3 style={{ color: "white" }}>hai</h3>
          </div>
          <div className=" box6">
            <div className="left">
              <PieChartEx/>
            </div>
            <div className="right">
              <div >
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
          </div>
          <div className="box chartBox7">
            <div className="charts">
              {/* <Featured /> */}
              <Chart title="HEADCOUNT TREND" aspect={2 / 1} />
            </div>
          </div>
          <div className="box box4">
            <TopBox />
          </div>
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
