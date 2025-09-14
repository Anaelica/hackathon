"use client";

import Sidebar from "@/app/dekstop/components/SideBar";
import Header from "@/app/dekstop/components/Header";
import HeroBanner from "@/app/dekstop/components/HeroBanner";
import HireCards from "@/app/dekstop/components/HireCards";
import RecruitmentTable from "@/app/dekstop/components/RecruitmentTable";
import Rightbar from "@/app/dekstop/components/Rightbar";

export default function HomePage() {
  return (
    <div className="bg-[#e9e7ff] flex items-center justify-center text-gray-700">
      <div className="w-full rounded-2xl shadow-2xl bg-white/90 backdrop-blur-lg overflow-hidden flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 p-6">
          <Header />
          <HeroBanner />
          <HireCards />
          <RecruitmentTable />
        </main>

        {/* Rightbar */}
        <Rightbar />
      </div>
    </div>
  );
}
