import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            praesentium provident facilis deleniti aperiam illum, facere qui
            unde animi nobis corrupti veniam odio obcaecati reprehenderit
            explicabo earum laudantium quibusdam ullam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi
            sit saepe, possimus quia magni sunt tempore laboriosam quo ad
            quisquam a id. Enim nisi rerum, similique delectus animi libero.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa illum nulla illo? Perspiciatis beatae alias maiores expedita sit laudantium.</p>
        </div>
        <div className="border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa illum nulla illo? Perspiciatis beatae alias maiores expedita sit laudantium.</p>
        </div>
        <div className="border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa illum nulla illo? Perspiciatis beatae alias maiores expedita sit laudantium.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
