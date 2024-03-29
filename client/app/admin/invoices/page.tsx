"use client";
import React from "react";
import AdminProtected from "../../../app/hooks/adminProtected";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";

import AllInvoices from "../../../app/components/Admin/Order/AllInvoices";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Chainscript-Admin"
          description="Its a platform for students to learn"
          keywords="bitcoin, programming"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHeader />
            <AllInvoices />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
