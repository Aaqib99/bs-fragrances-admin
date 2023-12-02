import React, { useState, useEffect } from "react";
import "./profile.css"; // Don't forget to create a corresponding CSS file
import img from "../assets/images/profile.jpg";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  // const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState(null);
  const [gender, setGender] = useState(null);
  const [companyname, setCompanyName] = useState(null);
  const [companywebsite, setCompanyWebsite] = useState(null);
  const [faxnumber, setFaxNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [admin, setAdmin] = useState(null);

  const fetchUserDetails = async (token) => {
    setAuthorized(true);
    console.log("calling fetchUserDetails", token);
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get("http://localhost:8080/api/v1/user/get", { headers: headers })
      .then((response) => {
        console.log("resssssssss", response);
        console.log("firstttt", response.data.data[0].firstName);
        setFirstName(response.data.data[0].firstName);
        setLastName(response.data.data[0].lastName);
        setEmail(response.data.data[0].email);

        setPhoneNumber(response.data.data[0].phoneNumber);
        setGender(response.data.data[0].gender);
        setCompanyName(response.data.data[0].company.name);
        setCompanyWebsite(response.data.data[0].company.website);
        setFaxNumber(response.data.data[0].company.faxNumber);
        setAddress(response.data.data[0].address.address1);
        setAdmin(response.data.data[0].role);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    if (authorized) {
      const token = localStorage.getItem("token");
      fetchUserDetails(token);
    }
  }, [authorized]);
  return (
    <div className="profile-container">
      <h2>User Information</h2>
      <div className="profile-info">
        <div className="profile-avatar">
          <img alt="user-avatar" src={img} />
        </div>
        <div className="profile-details">
          <p>
            <strong style={{ fontWeight: "bold", color: "blue" }}>
              Role : {admin}
            </strong>
          </p>
          <p>
            <strong>Name : </strong>
            {firstname} {lastname}
          </p>
          <p>
            <strong>Email : </strong> {email}
          </p>
          <p>
            <strong>Mobile Number : </strong>
            {phoneNumber}
          </p>
          <p>
            <strong>Gender : </strong> {gender}
          </p>
          <p>
            <strong>Company Name : </strong>
            {companyname}
          </p>
          <p>
            <strong>Website : </strong> {companywebsite}
          </p>
          <p>
            <strong>Fax No : </strong> {faxnumber}
          </p>
          <p>
            <strong>Address : </strong> {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
