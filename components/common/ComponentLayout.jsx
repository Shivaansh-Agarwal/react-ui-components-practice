import React from "react";
import Layout from "./Layout.jsx";

export default function ComponentLayout({ children, heading }) {
  return (
    <Layout>
      <div className="flex flex-col w-full bg-white p-4">
        <div className="text-2xl font-bold text-gray-800">{heading}</div>
        <div className="flex justify-center mt-16">{children}</div>
      </div>
    </Layout>
  );
}
