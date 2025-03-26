import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BookOpen className="text-blue-900 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Quality Education</h3>
            <p className="text-gray-600">Comprehensive curriculum designed to nurture academic excellence and critical thinking.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Users className="text-blue-900 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
            <p className="text-gray-600">Dedicated teachers committed to bringing out the best in every student.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Award className="text-blue-900 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
            <p className="text-gray-600">Focus on academic, physical, and emotional growth of students.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
