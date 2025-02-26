import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoSlidingCards from "./AutoSlidingCards";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
];

const sections = [
  {
    img: "/images/6.png",
    title: "स्वामी अभयानंद संस्कृत विद्यालय",
    description:
      "स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार हवन, स्वाध्याय, आदि।",
  },
  {
    img: "/images/7.png",
    title: "स्वामी अभयानंद गौशाला समिति",
    description:
      "गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।",
  },
  {
    img: "/images/8.png",
    title: "स्वामी अभयानंद पुस्तकालय",
    description:
      "स्वामी अभयानंद पुस्तकालय अंतर्गत, हमारे सदगुरुदेव भगवान के प्रवचनों का संकलन किया जाता है। अभी तक स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशीत करने की पंक्ति में 30 पुस्तकें प्रकाशित की जा चुकी हैं।",
  },
  {
    img: "/images/9.png",
    title: "दैनिक सत्संग",
    description:
      "इसका कार्य शुद्ध भक्ति जीवन की उन्नति के लिए अनुकूल एक शुद्ध और आध्यात्मिक रूप से सराबोर वातावरण उत्पन्न करना है। यहाँ प्रातः एवं सायं भगवत्नाम संकीर्तन एवं कथा वाचन किया जाता है।",
  },
];

const categories = [
  { icon: "/images/logo2.png", title: "गौशाला" },
  { icon: "/images/logo3.png", title: "संस्कृत विद्यालय" },
  { icon: "/images/logo4.png", title: "संस्कृत विद्यालय" },
  { icon: "/images/logo5.png", title: "सत्संग" },
  { icon: "/images/logo6.png", title: "भगवत आरती" },
];

const cardData = [
  {
    title: "ABOUT",
    description: "About Swami Abhyanand Ji",
    icon: "/images/logo7.png",
    bgColor: "bg-orange-400",
  },
  {
    title: "EVENTS",
    description: "Swami Abhyanand Ji Events",
    icon: "/images/logo8.png",
    bgColor: "bg-red-700",
  },
  {
    title: "BLOG",
    description: "Swami Abhyanand Ji Blog",
    icon: "/images/logo9.png",
    bgColor: "bg-orange-400",
  },
];

const ashrams = [
  {
    name: "LUCKNOW ASHRAM",
    phone: "+91-9956578080",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "MEERUT ASHRAM",
    phone: "+91-9956578080",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "SITAPUR ASHRAM",
    phone: "+91-9956578080",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "HARIDWAR ASHRAM",
    phone: "+91-9956578080",
    email: "info@swamiabhyanand.com",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Handle Previous Image
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle Next Image
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-[#f8f8dc]">
      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-4">
        {/* Left Side - Image Slider (70%) */}
        <div className="w-full md:w-7/10 max-w-xs sm:max-w-sm md:max-w-none relative overflow-hidden">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[600px]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side - Single Image (30%) */}
        <div className="w-full md:w-3/10 max-w-xs sm:max-w-sm md:max-w-none flex justify-center relative">
          <img
            src="/images/baba.jpg"
            alt="Right Image"
            className="w-full h-[250px] sm:h-[300px] md:h-[600px] object-cover shadow-lg"
          />
          <div className="absolute bottom-2 left-0 right-0 text-center text-white text-sm sm:text-base md:text-2xl bg-opacity-50 p-2">
            परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
          </div>
        </div>
      </div>

      {/* Know More Section */}
      <section className="py-2 text-center">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 mb-2"
            />
          </div>
          <h2 className="text-4xl md:text-4xl text-gray-700 mb-4">
            परम पूज्य आचार्य महामंडलेश्वर स्वामी अभियानन्द सरस्वती जी महाराज
          </h2>
          <p className="text-sm md:text-xl font-semibold text-wrap text-gray-800">
            ‘आचार्य मां विजानीयात्’ गुरु को मेरा रूप ही जानो अर्थात् गुरु और
            भगवान में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास रखता है,
            गुरुदेव जिसपर प्रसन्न रहते हैं, उसे कोई विष्ण नहीं घेरते। गुरु
            माता-पिता-पति सब हैं, उनके बिना संसार में कहीं गति नहीं। गुरु
            सर्वशक्तिमान और वांछाकल्पतरू हैं।
          </p>
          <div className="mt-2">
            <button className="px-4 md:px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition">
              Know More
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 mb-2"
            />
          </div>
          <h3 className="text-2xl md:text-3xl text-gray-700">हमारे बारे में</h3>
        </div>
      </section>

      {/* Card Section */}
      <section className="bg-[#f8f8dc] py-4 px-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-50 h-50 mb-4 object-contain"
              />
              <h4 className="text-2xl font-semibold mb-4 text-gray-700">
                {item.title}
              </h4>
              <p className="text-gray-800 text-lg text-center max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#f8f8dc] py-4 px-4">
        <div className="max-w-8xl mx-auto">
          {/* Section Title */}
          <div className="text-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="mx-auto mb-2 w-12"
            />
            <h2 className="text-4xl font-bold text-gray-700">
              Latest From Our Blog
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {/* Left - Blog Image */}
            <div>
              <img
                src="/images/2.jpg"
                alt="Blog"
                className="shadow-md w-full"
              />
            </div>

            {/* Right - Categories */}
            <div className="space-y-4">
              {categories.map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                  <span className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Read All Button */}
          <div className="text-center mt-6">
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg text-lg hover:bg-red-500 hover:text-white transition">
              Read All
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#f8f8dc] py-4 px-4">
        <div className="max-w-8xl mx-auto">
          {/* Section Title */}
          <div className="text-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="mx-auto mb-2 w-12"
            />
            <h2 className="text-3xl font-bold text-gray-700">वीडियो देखें</h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
            {/* Left - YouTube Video */}
            <div className="w-full">
              <iframe
                className="w-full aspect-video rounded-lg shadow-md"
                src="https://www.youtube.com/embed/AjP8FtHExlA"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right - Video Description */}
            <div className="text-center md:text-left h-full px-4">
              <h3 className="text-2xl font-bold text-gray-800">
                श्रीमद्भगवद्गीता अध्याय-9 | भाग-7
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed text-2xl">
                श्रीमद्भगवद्गीता अध्याय-9 (राजविद्याराजगुह्ययोग), भाग-7, अनंत
                श्री विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज
                (श्री पंचायती अखाड़ा महानिर्वाणी) " अध्यक्ष " अखिल भारतीय संत
                समिति उत्तर प्रदेश स्वामी अभयानन्द वेद पाठशाला, पपनामऊ, अनौरा
                कला, फैज़ाबाद रोड, (लखनऊ)
              </p>
            </div>
          </div>

          {/* Button to View All Videos */}
          <div className="text-center mt-6">
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg text-lg hover:bg-red-500 hover:text-white transition">
              सभी वीडियो देखें
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <AutoSlidingCards />
      </section>

      {/* Card Section */}
      <section className="bg-[#f8f8dc] py-2 px-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} text-white flex flex-col items-center justify-center p-6 shadow-lg`}
            >
              {/* Image Icon */}
              <div className="mb-4">
                <img src={card.icon} alt={card.title} className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold">{card.title}</h3>

              {/* Description */}
              <p className="text-center text-lg mt-6">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fdf5cd] py-10 px-4">
        <div className="max-w-8xl mx-auto">
          {/* Top Section */}
          <div className="bg-[#fdf5cd] border border-yellow-300 p-4 shadow-md flex flex-col items-center text-center">
            <img
              src="/images/logo.png"
              alt="Guruji"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी
            </h2>
            <p className="text-gray-700 text-md mt-2 max-w-2xl">
              ॥ श्री गुरवे नमः ॥ (परम पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द
              सरस्वती जी महाराज) कुलं पवित्रं जननी कृतार्था वसुंधरा पुण्यवती च
              तेन। अपारसंसारविचारसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेता ॥
              (स्कंदपुराणम्)
            </p>
          </div>

          {/* Ashram Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {ashrams.map((ashram, index) => (
              <div
                key={index}
                className="bg-[#fff5d4] border border-yellow-300 p-6 text-center shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {ashram.name}
                </h3>
                <div className="flex flex-col items-center mt-3">
                  <FaPhoneAlt className="text-red-500" />
                  <p className="text-gray-700 text-sm">{ashram.phone}</p>
                </div>
                <div className="flex flex-col items-center mt-3">
                  <FaEnvelope className="text-red-500" />
                  <p className="text-gray-700 text-sm">{ashram.email}</p>
                </div>

                <div className="mt-3 flex items-center justify-center gap-8">
                  <button className="mt-4 bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-red-600 transition">
                    CLICK HERE
                  </button>
                  <img
                    src="/images/crowd.jpg"
                    alt="Ashram"
                    className="w-16 h-10 mt-2 rounded-lg shadow-2xl border border-red-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events Button */}
      <div className="fixed bottom-40 right-4 flex flex-col items-center">
        {/* Button with hover effect */}
        <motion.div
          className="bg-gradient-to-r from-orange-300 to-blue-300 px-6 py-3 rounded-lg shadow-md cursor-pointer transition-all duration-200"
          whileHover={{ scale: 1.05, backgroundColor: "white" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTogglePopup}
        >
          <p className="text-black font-semibold text-lg text-center">
            LATEST EVENTS
          </p>
          <span className="text-md ml-2 text-black">नवीनतम कार्यक्रम ▼</span>
        </motion.div>

        {/* Pop-up with glowing effect */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-50 right-4 bg-orange-200 rounded-lg shadow-lg border-2 border-orange-400 z-10"
              style={{
                boxShadow: "0 0 15px rgba(255, 165, 0, 0.8)",
              }}
            >
              {/* Table as in the attached image */}
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-full text-center">
                  <thead>
                    <tr className="bg-orange-300">
                      <th className="border border-gray-400 px-4 py-2">
                        प्रारंभ तिथि
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        समाप्ति तिथि
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        वक्ता
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        स्थान
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-orange-100">
                      <td className="border border-gray-400 px-4 py-2">
                        2023-05-17
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        2023-05-23
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        स्वामी अभ्यानन्द सरस्वती जी महाराज
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        गाजियाबाद
                      </td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="border border-gray-400 px-4 py-2">
                        2023-07-03
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        2023-07-03
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभ्यानंद
                        सरस्वती जी
                      </td>
                      <td className="border border-gray-400 px-4 py-2">लखनऊ</td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="border border-gray-400 px-4 py-2">
                        2023-07-15
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        2023-07-15
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        स्वामी अभ्यानंद सरस्वती जी
                      </td>
                      <td className="border border-gray-400 px-4 py-2">लखनऊ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        rel="noopener"
        className="fixed bottom-10 right-5 bg-green-500 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-green-600"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default Home;
