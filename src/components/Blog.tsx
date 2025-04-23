import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Future of Web Development in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      category: 'Web Development',
      date: 'Apr 15, 2025',
    },
    {
      id: 2,
      title: 'Building Responsive Mobile Apps with Flutter',
      excerpt: 'Learn how to create beautiful, responsive mobile applications using Flutter.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      category: 'App Development',
      date: 'Mar 28, 2025',
    },
    {
      id: 3,
      title: 'Designing User-Centered Experiences',
      excerpt: 'Best practices for creating intuitive and engaging user interfaces.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      category: 'UI/UX Design',
      date: 'Mar 10, 2025',
    },
    {
      id: 4,
      title: 'Leveraging Big Data for Business Insights',
      excerpt: 'How businesses can use data analysis to drive strategic decision-making.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      category: 'Data Analysis',
      date: 'Feb 22, 2025',
    },
    {
      id: 5,
      title: 'Optimizing Customer Relationships with CRM',
      excerpt: 'Strategies for implementing effective CRM systems to enhance customer satisfaction.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'CRM Development',
      date: 'Feb 05, 2025',
    },
    {
      id: 6,
      title: 'Building Successful E-commerce Platforms',
      excerpt: 'Key components of high-converting, user-friendly online stores.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      category: 'E-commerce',
      date: 'Jan 18, 2025',
    },
  ];
  
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            Latest <span className="text-secondary">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Stay updated with our latest articles, news, and technology insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="card overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium py-1 px-2 bg-secondary bg-opacity-10 text-secondary rounded">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary font-poppins">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to="#"
                  className="flex items-center text-secondary font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10" data-aos="fade-up">
          <a href="#" className="btn-primary">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;