import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import Person4Icon from '@mui/icons-material/Person4';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Total Centers",
        count:'25',
        isMoney: false,
        link: "MONTH OVER MONTH 3%",
        icon: (
          <AccountBalanceRoundedIcon
            className="icon"
            style={{
              color: "#CF8DA8",
              backgroundColor: "#974062",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Total Batches",
        count:'32',
        isMoney: false,
        link: "MONTH OVER MONTH 3%",
        icon: (
          <GroupsIcon
            className="icon"
            style={{
              backgroundColor: "#F3476D",
              color: "#FAACBC",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Total Staffs",
        count:'66',
        isMoney: true,
        link: "MONTH OVER MONTH 3%",
        icon: (
          <Person4Icon
            className="icon"
            style={{ backgroundColor: "#FF9678", color: "#FED2C5" }}
          />
        ),
      };
      break;
    // case "balance":
    //   data = {
    //     title: "BALANCE",
    //     isMoney: true,
    //     link: "See details",
    //     icon: (
    //       <AccountBalanceWalletOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(128, 0, 128, 0.2)",
    //           color: "purple",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="top">
      <div className="left">
        {/* <span className="title">{data.title}</span> */}
        <span className="counter">
       
        {data.icon}
        
        </span>
        
      </div>
      <div className="right">
      <span className="title">{data.title}</span>
      <div className="count">
      {data.count}
      </div>
         
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {/* {data.icon} */}
      </div>
      </div>
      <div className="end">
      <span className="link">{data.link}</span>
      <div className="arrow"><ArrowUpwardRoundedIcon fontSize="30"/></div>
      
      </div>
      
    </div>
  );
};

export default Widget;
