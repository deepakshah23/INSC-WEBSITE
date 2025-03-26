import React from "react";
import { Heart, Users, Globe, TreePine, HandHeart, Sprout } from "lucide-react";
import About2 from "./about2";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Impact Hero Section */}
      <div className="relative overflow-hidden bg-green-50">
        <div className="absolute inset-0 bg-[url('/img/image.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About US
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Indian School Consortium is an organization that brings
              together all schools in India. With a mission to provide quality
              education and a focus on holistic development, the consortium aims
              to foster a culture of excellence in every aspect of the
              educational experience. With a diverse range of member schools
              that cover various regions, cultures and academic specializations,
              the Indian School Consortium is a unique platform for students,
              teachers and educational leaders to come together and learn from
              each other.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
      <About2 />
      {/* Our Vision */}
      <div className="py-20 bg-gray-100 ">
        <div className="  px-4  ml-20 ">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The vision of the Indian School Consortium (INSC) is to create a
                dynamic and inclusive educational ecosystem where every student
                has access to high-quality, equitable education and every school
                is empowered to excel. We envision a future where innovative
                teaching practices, collaborative partnerships, and a commitment
                to holistic development converge to foster an environment of
                excellence and equity.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                By harnessing the collective expertise of educators, leveraging
                cutting-edge technology, and advocating for progressive
                policies, the INSC aims to inspire a new era of educational
                advancement. Our goal is to cultivate well-rounded,
                forward-thinking students who are prepared to thrive in an
                increasingly globalized world, while ensuring that each school
                and educator has the tools and support needed to contribute to
                this transformative vision.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden h-[70vh]">
                <img
                  src="http://indianschoolconsortium.com/assets/img/vis.png"
                  alt="Community work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 right-4 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <p className="text-gray-600 italic">
                  "Every small action counts towards making a bigger impact in
                  someone's life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
