import React from "react";
import { motion } from "framer-motion";
import { BsCircleFill, BsUpload } from "react-icons/bs";
import { FaFileUpload, FaDownload, FaRegFilePdf, FaRegFileWord } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoImageOutline, IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineDateRange, MdOutlineDescription } from "react-icons/md";

// --- Tabs Data ---
const mainTabs = [
  { id: 1, label: "সেনাবাহিনী", icon: GiNotebook, color: "#6aa84f" },
  { id: 2, label: "নৌবাহিনী", icon: GiNotebook, color: "#1c4587" },
  { id: 3, label: "বিমানবাহিনী", icon: GiNotebook, color: "#a64d79" },
];

// --- Archive Data ---
const archiveData = {
  column1: [
    { id: 101, label: "Bai 2024", icon: MdOutlineDateRange, status: "active" },
    { id: 102, label: "Intelligence Test", icon: MdOutlineDescription, status: "active" },
    { id: 103, label: "PPDT", icon: MdOutlineDescription, status: "active" },
    { id: 104, label: "Essay Writing", icon: MdOutlineDescription, status: "active" },
  ],
  column2: [
    { id: 201, label: "Group Discussion", icon: GiNotebook, status: "active" },
    { id: 202, label: "Images", icon: IoImageOutline, status: "active" },
    { id: 203, label: "Videos", icon: IoPlayCircleOutline, status: "active" },
  ],
  column3: [
    { id: 301, label: "Planning Exercise", icon: FaFileUpload },
    { id: 302, label: "GTO Viva", icon: FaFileUpload },
  ],
  recentUploads: [
    { id: 401, label: "Project_Report_Final.pdf", date: "2024-03-09", icon: FaRegFilePdf },
    { id: 402, label: "Meeting_Minutes.docx", date: "2024-03-09", icon: FaRegFileWord },
  ],
};

// --- List Item ---
const ArchiveListItem = ({ label, IconComponent, status }) => (
  <motion.li
    className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-green-50 transition"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-2 text-gray-800 font-medium">
      <IconComponent className="text-green-700 text-lg" />
      {label}
    </div>
    {status === "active" && <BsCircleFill className="text-green-500 text-xs" />}
  </motion.li>
);

// --- Recent Upload Item ---
const RecentUploadItem = ({ label, date, IconComponent }) => (
  <motion.div
    className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm mb-2 cursor-pointer hover:shadow-md transition"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-3">
      <IconComponent className="text-green-700 text-xl" />
      <div>
        <p className="text-gray-800 font-medium">{label}</p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </div>
    <FaDownload className="text-gray-600 hover:text-green-700 transition" />
  </motion.div>
);

// --- Main Component ---
const Archive = () => {
  return (
    <section className="w-full px-4 py-16 bg-gray-50">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Archive
      </motion.h1>
      <motion.div className="w-24 h-1 bg-green-900 mx-auto mb-8" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 0.8 }} />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {mainTabs.map((tab) => (
          <motion.div
            key={tab.id}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold cursor-pointer shadow-md"
            style={{ backgroundColor: tab.color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon className="text-lg" />
            {tab.label}
          </motion.div>
        ))}
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-green-800 mb-3">Year</h3>
          <ul className="space-y-2">
            {archiveData.column1.map((item) => (
              <ArchiveListItem key={item.id} label={item.label} IconComponent={item.icon} status={item.status} />
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-green-800 mb-3">Category</h3>
          <ul className="space-y-2">
            {archiveData.column2.map((item) => (
              <ArchiveListItem key={item.id} label={item.label} IconComponent={item.icon} status={item.status} />
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-green-800 mb-3">Recent Uploads</h3>
          <ul className="space-y-2 mb-4">
            {archiveData.column3.map((item) => (
              <ArchiveListItem key={item.id} label={item.label} IconComponent={item.icon} />
            ))}
          </ul>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-green-900 font-semibold">
              <BsUpload />
              Recent Uploads
            </div>
            {archiveData.recentUploads.map((file) => (
              <RecentUploadItem key={file.id} label={file.label} date={file.date} IconComponent={file.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
