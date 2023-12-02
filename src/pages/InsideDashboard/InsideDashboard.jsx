import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import "./insidedashboard.css";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import emblem from "../../assets/images/color-emblem.svg";
import customer from "../../assets/images/customer.png";
import perfumeimg from "../../assets/images/perfume-img.jpg";
import excel from "../../assets/images/excel.png";
import profile from "../../assets/images/profile.jpg";
import Typography from "@mui/material/Typography";
import axios from "axios";

function InsideDashboard() {
  const [showPerfumes, setShowPerfumes] = useState(false);
  const [perfumes, setPerfumes] = useState([]);
  const [showCustomers, setShowCustomers] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllPerfumes = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/v1/perfume/all",
        { headers: headers }
      );
      const perfumesData = response.data?.data?.[0] || [];
      setPerfumes(perfumesData);
    } catch (error) {
      console.error("Error fetching perfumes data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCustomers = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/all",
        { headers: headers }
      );
      const customersData = response.data?.data?.[0] || [];
      setCustomers(customersData);
    } catch (error) {
      console.error("Error fetching customers data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showPerfumes) {
      fetchAllPerfumes();
    } else if (showCustomers) {
      fetchAllCustomers();
    }
  }, [showPerfumes, showCustomers]);

  return (
    <>
      <div className="inside-main-area">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
            gap: "40px",
          }}
        >
          {!showPerfumes && !showCustomers && (
            <>
              {/* Perfumes Card */}
              <Card
                style={{
                  width: 300,
                  height: 200,
                  boxShadow: "4px 4px 8px rgba(233, 242, 248, 2)",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Products
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" component="div">
                      All Perfumes
                    </Typography>
                    <img
                      src={emblem}
                      alt="Perfume Emblem"
                      style={{ width: "64px", marginLeft: "45px" }}
                    />
                  </div>
                  <Typography
                    style={{
                      mb: 1.5,
                      fontWeight: "medium",
                      color: "gray",
                    }}
                    color="text.secondary"
                  >
                    Total : 298
                  </Typography>
                  <Typography variant="body2">
                    Discover Exquisite Fragrances
                  </Typography>
                  <Button onClick={() => setShowPerfumes(true)} size="medium">
                    Show All
                  </Button>
                </CardContent>
              </Card>

              {/* Customers Card */}
              <Card
                style={{
                  width: 300,
                  height: 200,
                  boxShadow: "4px 4px 8px rgba(233, 242, 248, 2)",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Visitors
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" component="div">
                      All Customers
                    </Typography>
                    <img
                      src={customer}
                      alt="Perfume Emblem"
                      style={{ width: "64px", marginLeft: "45px" }}
                    />
                  </div>
                  <Typography
                    style={{
                      mb: 1.5,
                      fontWeight: "medium",
                      color: "gray",
                    }}
                    color="text.secondary"
                  >
                    Total : 1027
                  </Typography>
                  <Typography variant="body2">Our Cherished Patrons</Typography>
                  <Button onClick={() => setShowCustomers(true)} size="medium">
                    Show All
                  </Button>
                </CardContent>
              </Card>

              {/* Upload Excel */}
              <Card
                style={{
                  width: 300,
                  height: 200,
                  boxShadow: "4px 4px 8px rgba(233, 242, 248, 2)",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    excel
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" component="div">
                      upload Excel
                    </Typography>
                    <img
                      src={excel}
                      alt="Perfume Emblem"
                      style={{ width: "64px", marginLeft: "45px" }}
                    />
                  </div>
                  <Typography
                    style={{
                      mb: 1.5,
                      fontWeight: "medium",
                      color: "gray",
                    }}
                    color="text.secondary"
                  >
                    Total Uploaded : 13
                  </Typography>
                  <Typography variant="body2">
                    Excel, word or pdf files
                  </Typography>
                  <Button
                    onClick={() => {
                      alert("Working on this component!");
                      // setShowCustomers(true);
                    }}
                    size="medium"
                  >
                    Upload Now
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {showPerfumes && (
          <div style={{ display: "flex", gap: "20px" }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              perfumes.map((perfume) => (
                <Card
                  key={perfume.id}
                  style={{
                    width: 300,
                    height: 200,
                    boxShadow: "4px 4px 8px rgba(233, 242, 248, 2)",
                  }}
                >
                  {/* ... (content for Perfumes Card) */}
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      UPC : {perfume.upc}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="h5" component="div">
                        {perfume.name}
                      </Typography>
                      <img
                        src={perfumeimg}
                        alt="Perfume Emblem"
                        style={{ width: "80px", marginLeft: "75px" }}
                      />
                    </div>
                    <Typography
                      style={{
                        mb: 1.5,
                        fontWeight: "medium",
                        color: "gray",
                      }}
                      color="text.secondary"
                    >
                      Price : {perfume.price}
                    </Typography>
                    <Typography variant="body2">
                      Quatity(l) : {perfume.quantity}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {showCustomers && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              customers.map((customer) => (
                <Card
                  key={customer.id}
                  style={{
                    width: 300,
                    height: 200,
                    boxShadow: "4px 4px 8px rgba(233, 242, 248, 2)",
                  }}
                >
                  {/* ... (content for Customers Card) */}
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Regular Customer
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="h5" component="div">
                        {customer.firstName} {customer.lastName}
                      </Typography>
                      <img
                        src={profile}
                        alt="Perfume Emblem"
                        style={{ width: "80px", marginLeft: "75px" }}
                      />
                    </div>
                    <Typography
                      style={{
                        mb: 1.5,
                        fontWeight: "medium",
                        color: "gray",
                      }}
                      color="text.secondary"
                    >
                      Gender : {customer.gender}
                    </Typography>
                    <Typography variant="body2">
                      Website : {customer.company.website}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default InsideDashboard;
