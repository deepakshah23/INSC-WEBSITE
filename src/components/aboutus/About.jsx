import React from "react";
import { Heart, Users, Globe, TreePine, HandHeart, Sprout } from "lucide-react";
import About2 from "./about2";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Impact Hero Section */}
      <div className="relative overflow-hidden bg-green-50">
        <div className="absolute inset-0 bg-[url('/img/image.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-2 bg-green-100 rounded-full mb-6">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Making a Difference,
              <span className="block text-green-600 mt-2">
                One Life at a Time
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Since 2010, we've been working tirelessly to create positive
              change in communities across the globe, focusing on sustainable
              development, education, and environmental conservation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
      <About2 />
      {/* Our Vision */}
      <div className="py-20 bg-gray-100 ">
        <div className="  px-4  ml-10 ">
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
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <HandHeart className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-gray-600">
                    Providing immediate relief to communities in crisis
                  </div>
                </div>
                <div className="flex items-center space-x-3 ">
                  <div className="flex-shrink-0">
                    <Sprout className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-gray-600">
                    Creating sustainable development programs
                  </div>
                </div>
              </div>
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
      {/* Current Projects */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Current Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
                title: "Education Initiative",
                description:
                  "Providing quality education to underprivileged children",
                progress: 75,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
                title: "Clean Water Access",
                description:
                  "Building sustainable water systems in rural areas",
                progress: 60,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
                title: "Sustainable Farming",
                description: "Teaching sustainable agricultural practices",
                progress: 45,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm text-gray-600">Progress</div>
                      <div className="text-sm text-gray-600">
                        {project.progress}%
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-green-100">
                      <div
                        style={{ width: `${project.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Get Involved CTA */}
      <div className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Whether through volunteering, donations, or spreading awareness,
            your support can help us create lasting change in communities
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
