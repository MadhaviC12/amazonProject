import React, { useEffect, useState } from "react";
import "./AddAnotherAcc.css";

const AddAnotherAcc = () => {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        setAccount(data.data);
      } catch (error) {
        console.error("errr fetch data:", error);
      }
    };
    fetchAccount();
  }, []);

  return (
    <div className="add_anotherUser">
      <h2>AddAnotherAcc</h2>

      <div className="userrr">
        {account.map((account) => (
          <div key={account.id}>
            <img src={account.avatar} alt={" "} />
            <h5>ID: {account.id}</h5>
            <h5>
              Name: {account.first_name} {account.last_name}
            </h5>
            <h5>EMAIL: {account.email}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddAnotherAcc;
