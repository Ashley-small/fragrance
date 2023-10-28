import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Learn = () => {
  const faqs = [
    {
      question: "Why wear fragrance ?",
      answer:
        "Men should wear fragrance to enhance their personal style, boost confidence, and leave a memorable impression.",
    },
    {
      question:
        "I heard someone mention notes in fragrance. What are all the notes and what do they do?",
      answer:
        "The scent profile of a fragrance is known as the perfume accord. Put simply, it is the basic character of the fragrance. The perfume accord is made up three different types of notes. The Top note is the initial scent that you get within the first 5 to 15 minutes of spraying the fragrance. They evaporate quickly but the purpose of this note is to give off an initial scent while giving enough time for the fragrance to transition into the next notes. The Heart Notes tend to last for as long as 90 minutes and they typically take some of the top notes with them while also introducing new scents to the fragrance. They also have the important task of combining with the base notes to make them more pleasant and less harsh. The Base Notes are the strength behind the fragrance. They last the longest and help boost the lighter notes of the fragrance.",
    },
    {
      question: "What notes are best to wear in hot weather?",
      answer:
        "In hot weather it is best to wear light, citrusy, floral or aquatic fragrances. A lot of fragrances become more potent in heat so it is important not to wear things with Cinnamon, Rum, or spice during those months as the strength and potency of the fragrances can become overpowering.",
    },
    {
      question: "What notes are best to wear in cold weather?",
      answer:
        "It is the opposite scenario of wearing fragrances in hot weather. Instead of wearing light, citrusy, floral or aquatic fragrances, you want to wear spicy, woody, vanilla based fragrances. They tend to work better in cold weather as they last longer and they are more potent with body heat.",
    },
    {
      question:
        "For a starter collection, how many different fragrances should a man have?",
      answer:
        "A man should have 5 different fragrances. You need to have a fragrance that you can wear to the office/school, to a date, to a night out like a club or bar, one for the summer and show stopping, versatile fragrance that although has a best season it can be worn, it isn't out of place in other occasions or times of year. An example of this is Dior Sauvage.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const handleToggleFaq = (index) => {
    if (openFaq === index) {
      // If the same FAQ item is clicked, close it
      setOpenFaq(null);
    } else {
      // Otherwise, open the clicked FAQ
      setOpenFaq(index);
    }
  };

  return (
    <div className="max-w-[1640px] mx-auto px-6">
      <div className="lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="w-96 h-96 mt-12 mx-auto pr-2">
            <img
              className="rounded-full object-cover"
              src="/images/22628.jpg"
            />
          </div>
          <div className="text-center my-8">
            <h1>
              Fragrance is a hard hobby to initially get right, and it can
              become a fairly expensive hobby fairly quickly. The objective of
              this is to teach you the basics so you don't make the mistakes
              that many men have made and will continue to make. This website
              acts as your training wheels, and I have answered a few frequently
              asked questions.
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center text-5xl text-bold">
            <h1 className="mb-12 border-b-4 border-dotted text-amber-800 border-slate-900 pb-2 w-full font-semibold">
              FAQ
            </h1>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="w-full bg-gray-200 p-4 mb-4 rounded">
                <div className="flex justify-between">
                  <h1 className="text-xl md:text-2xl text-amber-800 font-semibold w-5/6">
                    {faq.question}
                  </h1>
                  <FaArrowDown
                    size={30}
                    className={`cursor-pointer transition-transform transform ${
                      openFaq === index ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => handleToggleFaq(index)}
                  />
                </div>
                {openFaq === index && (
                  <div className="text-gray-700 mt-2 text-md md:text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
