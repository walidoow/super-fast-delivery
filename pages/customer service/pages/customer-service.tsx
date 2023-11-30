"use client";
//Pages imports
import { ReturnRefundOrder } from "./return-refunds";
import { CancelOrder } from "./cancel-order";
import { ManageAccount } from "./manage-account";
import { OpenCSSession } from "./open-cs-case";

//Sidebar imports
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//shadcn imports
import { Separator } from "@/components/ui/separator";
import { OpenCases } from "./open-cases";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "./css/sidebar.css";

//Content to pages
const HomePage = () => <div>{ManageAccount()}</div>;
const ReturnRefund = () => <div>{ReturnRefundOrder()}</div>;
const Cancel = () => <div>{CancelOrder()}</div>;
const OpenSession = () => <div>{OpenCSSession()}</div>;

export default function CustomerService() {
  const sidebarLinkHoverStyle = {
    borderRadius: "6px",
    padding: "10px",
  };

  return (
    <div style={{ backgroundColor: "#EDEEC9" }}>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 space-y-1">
          Customer Service
        </h2>
      </div>
      <div style={{ width: "50px", margin: "auto" }}>
        <Separator className="my-5"></Separator>
      </div>
      <div
        style={{
          backgroundColor: "#9DCBBA",
          paddingTop: "25px",
          paddingBottom: "25px",
          paddingRight: "35px",
          paddingLeft: "35px",
        }}
      >
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight marginBottom my-3">
          Your open Customer Service cases
        </h3>
        {OpenCases()}
      </div>
      <div className="mt-16 mx-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          All help topics
        </h3>
        <div className="flex">
          <Input placeholder="Search our help library" />
          <Button className="mx-3">Search</Button>
        </div>
        <Separator className="mt-6 justify-center"></Separator>
      </div>
      <Router>
        <div className="flex mt-6">
          <div className="sidebar" style={{ width: "320px" }}>
            <ul className="nav">
              <li className="mb-8 mt-5 mx-11">
                <Link to="/" style={sidebarLinkHoverStyle}>
                  Manage Account
                </Link>
              </li>
              <li className="page my-8 mx-11">
                <Link
                  to="/customer service/pages/open-cs-case"
                  style={sidebarLinkHoverStyle}
                >
                  Open CS Session
                </Link>
              </li>
              <li className="page my-8 mx-11">
                <Link
                  to="/customer service/pages/return-refunds"
                  style={sidebarLinkHoverStyle}
                >
                  Returns and Refunds
                </Link>
              </li>
              <li className="page my-8 mx-11">
                <Link to="/" style={sidebarLinkHoverStyle}>
                  Track Order
                </Link>
              </li>
              <li className="page my-8 mx-11">
                <Link
                  to="/customer service/pages/cancel-order"
                  style={sidebarLinkHoverStyle}
                >
                  Cancel Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/customer service/pages/cancel-order"
                element={<Cancel />}
              />
              <Route
                path="/customer service/pages/return-refunds"
                element={<ReturnRefund />}
              />
              <Route
                path="/customer service/pages/open-cs-case"
                element={<OpenSession />}
              />
            </Routes>
          </div>
        </div>
      </Router>
      <div style={{ marginTop: "130px" }}></div>
    </div>
  );
}
