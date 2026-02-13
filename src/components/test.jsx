import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("product");

  const tabs = [
    {
      id: "product",
      title: "Product Management",
      content: (
        <ul className="space-y-2">
          <li>Managed product setup including pricing, stock, images and descriptions.</li>
          <li>Updated product availability (In Stock / Out of Stock).</li>
          <li>Ensured accurate product categorization.</li>
        </ul>
      ),
    },
    {
      id: "navigation",
      title: "Navigation Updates",
      content: (
        <ul className="space-y-2">
          <li>Modified top and side navigation menus.</li>
          <li>Added featured images for improved UI.</li>
          <li>Enhanced user navigation experience.</li>
        </ul>
      ),
    },
    {
      id: "testing",
      title: "Website Testing",
      content: (
        <ul className="space-y-2">
          <li>Performed daily QA testing.</li>
          <li>Tested cart and checkout functionality.</li>
          <li>Identified and reported broken links.</li>
        </ul>
      ),
    },
    {
      id: "blog",
      title: "Blog Management",
      content: (
        <ul className="space-y-2">
          <li>Managed WordPress blog content.</li>
          <li>Added and updated blog posts.</li>
          <li>Organized blog categories.</li>
        </ul>
      ),
    },
    {
      id: "reports",
      title: "Database Reports",
      content: (
        <ul className="space-y-2">
          <li>Generated internal operational reports.</li>
          <li>Worked with database queries.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-black">
      
      {/* Left Side Tabs */}
      <div className="flex flex-col space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-left px-4 py-3 rounded-lg transition-all duration-200 
              ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Right Side Content */}
      <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-sm">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
export default Experience