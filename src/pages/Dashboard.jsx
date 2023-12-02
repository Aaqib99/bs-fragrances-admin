import React from "react";
import DashboardHeader from "../components/DashboardHeader/index.jsx";
// import "./dashboard.css";
// import Box from "@mui/material/Box";
import SideBar from "../components/Sidebar";
import InsideDashboard from "./InsideDashboard/InsideDashboard.jsx";
import sidebar_menu from "../constants/sidebar-menu";
function Dashboard() {
  //   useEffect(() => {
  //     setPagination(calculateRange(all_orders, 5));
  //     setOrders(sliceData(all_orders, page, 5));
  //   }, []);

  //   const __handleSearch = (event) => {
  //     setSearch(event.target.value);
  //     if (event.target.value !== "") {
  //       let search_results = orders.filter(
  //         (item) =>
  //           item.first_name.toLowerCase().includes(search.toLowerCase()) ||
  //           item.last_name.toLowerCase().includes(search.toLowerCase()) ||
  //           item.product.toLowerCase().includes(search.toLowerCase())
  //       );
  //       setOrders(search_results);
  //     } else {
  //       __handleChangePage(1);
  //     }
  //   };

  //   const __handleChangePage = (new_page) => {
  //     setPage(new_page);
  //     setOrders(sliceData(all_orders, new_page, 5));
  //   };
  // const bull = (
  //   <Box
  //     component="span"
  //     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  //   >
  //     •
  //   </Box>
  // );
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <SideBar menu={sidebar_menu} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <DashboardHeader btnText="Admin Dashboard" />
          <InsideDashboard />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
