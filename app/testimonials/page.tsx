import { Star, Play, Quote } from 'lucide-react';

export default function Page() {
  const textTestimonials = [
    {
      name: "Rajesh Choudhary",
      role: "Business Owner",
      location: "Jaipur",
      content: "My CIBIL score improved from 580 to 750 in just 3 months! The team was incredibly professional and kept me updated throughout the process. Now I've got my business loan approved at the best rates. Highly recommend CIBIL FIXER!",
      rating: 5,
      scoreImprovement: "+170 points"
    },
    {
      name: "Mohit Soni",
      role: "Entrepreneur",
      location: "Nagaur",
      content: "I was skeptical at first, but CIBIL FIXER delivered exactly what they promised. Their expert guidance helped me understand my credit report better, and the results speak for themselves. Professional service with excellent customer support.",
      rating: 5,
      scoreImprovement: "+140 points"
    },
    {
      name: "Avni Sharma",
      role: "Software Engineer",
      location: "Mumbai",
      content: "Outstanding service! The team went above and beyond to help improve my credit situation. The monthly progress reports were detailed and easy to understand. Thanks to CIBIL FIXER, I was able to get my home loan approved.",
      rating: 5,
      scoreImprovement: "+160 points"
    },
    {
      name: "Manohar Singh",
      role: "Business Owner",
      location: "Bikaner",
      content: "The express package was perfect for my urgent needs. Within 45 days, my score improved significantly, allowing me to secure a loan for my business expansion. The 24/7 support was incredibly helpful throughout the process.",
      rating: 5,
      scoreImprovement: "+120 points"
    },
    {
      name: "Chuka Devi",
      role: "Small-scale Business Owner",
      location: "Degana, Rajasthan",
      content: "I had multiple credit issues that seemed impossible to resolve. CIBIL FIXER's expert team not only fixed these issues but also educated me on maintaining good credit health. The investment was worth every penny!",
      rating: 5,
      scoreImprovement: "+190 points"
    },
    {
      name: "Dr. Sunita Verma",
      role: "Doctor",
      location: "Jaipur",
      content: "The professional service exceeded my expectations. Within 3 months, my CIBIL score improved dramatically, enabling me to get the medical equipment loan I needed for my clinic. Highly recommend CIBIL FIXER!",
      rating: 5,
      scoreImprovement: "+100 points"
    },
    {
      name: "Prahlad Singh Chandrawat",
      role: "Teacher",
      location: "Nagaur",
      content: "The basic package was perfect for someone like me who was new to credit management. The educational resources provided were invaluable, and the results exceeded my expectations. Very satisfied with the service!",
      rating: 5,
      scoreImprovement: "+110 points"
    },
    {
      name: "Mohd. Iqbal",
      role: "Shop Owner",
      location: "Lucknow",
      content: "CIBIL FIXER helped me understand my credit report and fixed all the errors that were affecting my score. Now I can easily get business loans for my shop expansion. Professional and reliable service!",
      rating: 5,
      scoreImprovement: "+135 points"
    },
    {
      name: "Er. Nikhil Sharma",
      role: "Software Engineer",
      location: "Bangalore",
      content: "Being in the tech industry, I appreciate their systematic approach and regular updates. My credit score improved from 620 to 780 in just 4 months. The team was always available to answer my questions.",
      rating: 5,
      scoreImprovement: "+160 points"
    }
  ];

  const photoTestimonials = [
    {
      name: "Manish Gupta",
      role: "IT Professional",
      image: "/api/placeholder/80/80",
      content: "CIBIL FIXER transformed my financial life. From 520 to 720 in 90 days!",
      rating: 5
    },
    {
      name: "Deepika Joshi",
      role: "Consultant",
      image: "/api/placeholder/80/80",
      content: "Professional, reliable, and results-driven. Couldn't ask for better service.",
      rating: 5
    },
    {
      name: "Arjun Reddy",
      role: "Sales Manager",
      image: "/api/placeholder/80/80",
      content: "The expert team guided me through every step. Highly recommended!",
      rating: 5
    }
  ];

  const videoTestimonials = [
    {
      name: "Sanjay Agarwal",
      role: "Business Owner",
      thumbnail: "/api/placeholder/300/200",
      duration: "2:45",
      title: "How CIBIL FIXER helped me get a ₹50 lakh business loan"
    },
    {
      name: "Meera Krishnan",
      role: "Finance Professional",
      thumbnail: "/api/placeholder/300/200",
      duration: "3:12",
      title: "My journey from 540 to 780 credit score"
    },
    {
      name: "Vikash Sharma",
      role: "Entrepreneur",
      thumbnail: "/api/placeholder/300/200",
      duration: "2:30",
      title: "Why I chose CIBIL FIXER for credit improvement"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Real people, real results. Hear from our satisfied clients who have transformed
            their financial lives with our expert credit improvement services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Avg Score Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read detailed success stories from clients who have achieved remarkable credit improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary-600 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        {testimonial.scoreImprovement}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Spotlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet some of our satisfied clients who are happy to share their success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoTestimonials.map((testimonial, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="flex items-center justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our clients share their personal experiences and transformation journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white bg-primary-600 rounded-full p-4 cursor-pointer hover:bg-primary-700 transition-colors" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{video.name}</p>
                  <p className="text-gray-500 text-sm">{video.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have transformed their financial lives with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/packages" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Choose Your Package
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 