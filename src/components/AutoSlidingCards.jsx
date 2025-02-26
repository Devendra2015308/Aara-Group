import React, { useState, useEffect } from "react";

const cardsData = [
  {
    title: "स्वामी अभयानंद गोशाला समिति",
    images: [
      "/src/assets/10.png",
      "/src/assets/11.jpg",
      "/src/assets/12.jpg",
      "/src/assets/13.jpg",
    ],
    description:
      "गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।",
  },
  {
    title: "स्वामी अभयानंद संस्कृत विद्यालय",
    images: [
      "/src/assets/14.jpg",
      "/src/assets/15.jpg",
      "/src/assets/16.png",
      "/src/assets/17.jpg",
    ],
    description:
      "स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार।",
  },
];

const AutoSlidingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Array(cardsData.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex.map((index, i) => (index + 1) % cardsData[i].images.length)
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f8dc] py-10 px-4">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsData.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="bg-[#f8f8dc] shadow-2xl overflow-hidden p-4 border border-gray-300"
          >
            {/* Image Slider */}
            <div className="w-full h-70 overflow-hidden">
              <img
                src={card.images[currentIndex[cardIndex]]}
                alt="Slider"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="text-center mt-4">
              <h3 className="text-3xl text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed mt-8">
                {card.description}
              </p>

              {/* Read More Button */}
              <button className="mt-4 border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-500 hover:text-white transition">
                और पढ़ें
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoSlidingCards;
