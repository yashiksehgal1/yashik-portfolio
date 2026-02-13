import { useState } from "react";
import { MdHexagon } from "react-icons/md";

const KDMSExp = () => {

    const kdmsTabs = [
  {
    id: "product-setup",
    title: "Product Setup",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Added new products to the website with detailed descriptions, retail pricing, specifications, size variations, and quantity details.</li>
        <li className="flex items-center gap-2"><MdHexagon />Uploaded and optimized product images to maintain consistency and visual quality.</li>
        <li className="flex items-center gap-2"><MdHexagon />Ensured accurate product data entry aligned with catalog standards.</li>
      </ul>
    ),
  },
  {
    id: "product-updates",
    title: "Product Updates",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Updated product descriptions, pricing, and stock availability (In Stock / Out of Stock).</li>
        <li className="flex items-center gap-2"><MdHexagon />Maintained real-time accuracy of product catalog information.</li>
        <li className="flex items-center gap-2"><MdHexagon />Ensured seamless coordination between inventory and website listings.</li>
      </ul>
    ),
  },
  {
    id: "navigation",
    title: "Navigation Management",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Modified top and left navigation menus by adding, removing, and restructuring product categories.</li>
        <li className="flex items-center gap-2"><MdHexagon />Integrated featured images within navigation to enhance visual appeal.</li>
        <li className="flex items-center gap-2"><MdHexagon />Improved overall user navigation flow and accessibility.</li>
      </ul>
    ),
  },
  {
    id: "content",
    title: "Website Content Handling",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Managed product categorization to ensure correct mapping based on form and description.</li>
        <li className="flex items-center gap-2"><MdHexagon />Updated homepage banners and promotional tiles for featured products and seasonal campaigns.</li>
        <li className="flex items-center gap-2"><MdHexagon />Maintained and updated footer links, contact details, and informational pages.</li>
      </ul>
    ),
  },
  {
    id: "promotions",
    title: "Promotions & Offers",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Created and configured special offers and discount campaigns for the product catalog.</li>
        <li className="flex items-center gap-2"><MdHexagon />Set up targeted promotional offers for specific users or segments.</li>
        <li className="flex items-center gap-2"><MdHexagon />Ensured promotional rules were accurately applied and tested before going live.</li>
      </ul>
    ),
  },
  {
    id: "testing",
    title: "Website Testing & QA",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Performed daily website health checks to ensure all critical pages functioned correctly.</li>
        <li className="flex items-center gap-2"><MdHexagon />Tested product search, cart functionality, and checkout workflow.</li>
        <li className="flex items-center gap-2"><MdHexagon />Identified broken links, inconsistencies, and usability issues to maintain smooth user experience.</li>
      </ul>
    ),
  },
  {
    id: "blog-database",
    title: "Blog Management & Reporting",
    content: (
      <ul className="flex flex-col gap-2 list-disc text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Managed blog content using WordPress, including adding new pages and updating internal links.</li>
        <li className="flex items-center gap-2"><MdHexagon />Reviewed and updated existing blog posts to maintain content relevance.</li>
        <li className="flex items-center gap-2"><MdHexagon />Organized blog categories for structured navigation.</li>
        <li className="flex items-center gap-2"><MdHexagon />Generated and analyzed important internal reports using database systems to support business operations.</li>
      </ul>
    ),
  },
];

const [kdmsactiveTab, setKDMSActiveTab] = useState('product-setup')

const kdmstabContent = kdmsTabs.find((tab) => {
              return tab.id === kdmsactiveTab
                  })



  return (
    <>
      <a href='https://www.kinerkdirect.com/' target="_blank"><img src='kdms.png' className="w-40 md:w-50 mb-2" /></a>

        <span className="inline-block my-5 text-blue-400 text-xl md:text-2xl font-semibold">Web Administrator <br /> <span className="text-white/80">July 2019 - July 2024</span></span>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {
            kdmsTabs.map((tab) => {
              return (
                <button key={tab.id} onClick={() => setKDMSActiveTab(tab.id)}
                        className={`px-2 py-3 sm:p-4 rounded-xl cursor-pointer text-md sm:text-lg font-semibold transition-all duration-200 ease-in-out
                        ${ tab.id === kdmsactiveTab
                            ? "bg-blue-500 text-white scale-105"
                            : "bg-white/10 hover:bg-blue-400 hover:text-white hover:scale-105"
                        }`}
                        >
                        {tab.title}
                        </button>
              )
            })
          }
        </div>

        <div className="py-5 text-white/90">{ kdmstabContent.content }</div>
    </>
  )
}

export default KDMSExp


