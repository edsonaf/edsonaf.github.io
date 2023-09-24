import "./Dashboard.scss";
import Chart from "../chart/Chart";
import Featured from "../featured/Featured";
import TableList from "../Table/Table";
import Widget from "../Widget/Widget";

const Dashboard = () => {
  return (
    <div>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>

      <div className="charts">
        <Featured />
        <Chart title="A Cool Graph" />
      </div>

      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <TableList />
      </div>
    </div>
  );
};

export default Dashboard;