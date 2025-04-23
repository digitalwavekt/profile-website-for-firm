import React, { useState } from 'react';
import { Users, Building2, MessageCircle, Image, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');
  
  // Dummy data for demonstration purposes
  const teamData = [
    { id: 1, name: 'Rajesh Kumar', role: 'CEO', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
    { id: 2, name: 'Priya Sharma', role: 'CTO', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg' },
    { id: 3, name: 'Amit Patel', role: 'Lead Developer', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
    { id: 4, name: 'Sneha Gupta', role: 'UX/UI Designer', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
  ];
  
  const partnersData = [
    { id: 1, name: 'TechNova Solutions', logo: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg' },
    { id: 2, name: 'GlobalConnect Systems', logo: 'https://images.pexels.com/photos/5915202/pexels-photo-5915202.jpeg' },
    { id: 3, name: 'BrightSpark Analytics', logo: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg' },
  ];
  
  const contactFormData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Project Inquiry', message: 'I would like to discuss a potential web development project for my business.', date: '2023-06-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Partnership Opportunity', message: 'We are looking for technology partners for our upcoming project.', date: '2023-06-10' },
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'team':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Team Members</h2>
              <button className="btn-primary">Add New Member</button>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamData.map((member) => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{member.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{member.role}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img src={member.image} alt={member.name} className="h-10 w-10 rounded-full" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-secondary hover:text-primary mr-3">Edit</button>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'partners':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Partners</h2>
              <button className="btn-primary">Add New Partner</button>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {partnersData.map((partner) => (
                    <tr key={partner.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{partner.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img src={partner.logo} alt={partner.name} className="h-10 w-16 object-cover rounded" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-secondary hover:text-primary mr-3">Edit</button>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'messages':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Contact Form Submissions</h2>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contactFormData.map((submission) => (
                    <tr key={submission.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{submission.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{submission.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{submission.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{submission.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-secondary hover:text-primary mr-3">View</button>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'images':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Images</h2>
              <button className="btn-primary">Upload New Image</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" alt="Hero Background" className="w-full h-40 object-cover rounded mb-3" />
                <p className="text-gray-700 font-medium mb-2">Hero Background</p>
                <div className="flex justify-between">
                  <button className="text-secondary hover:text-primary">Replace</button>
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" alt="About Us Image" className="w-full h-40 object-cover rounded mb-3" />
                <p className="text-gray-700 font-medium mb-2">About Us Image</p>
                <div className="flex justify-between">
                  <button className="text-secondary hover:text-primary">Replace</button>
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" alt="Project Image" className="w-full h-40 object-cover rounded mb-3" />
                <p className="text-gray-700 font-medium mb-2">Project Image 1</p>
                <div className="flex justify-between">
                  <button className="text-secondary hover:text-primary">Replace</button>
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" alt="Project Image" className="w-full h-40 object-cover rounded mb-3" />
                <p className="text-gray-700 font-medium mb-2">Project Image 2</p>
                <div className="flex justify-between">
                  <button className="text-secondary hover:text-primary">Replace</button>
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-poppins">Admin Dashboard</h1>
          <Link to="/" className="flex items-center text-gray-600 hover:text-primary">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Website
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-primary font-poppins">Navigation</h2>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <button
                      className={`w-full flex items-center p-3 rounded-lg text-left ${
                        activeTab === 'team'
                          ? 'bg-secondary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('team')}
                    >
                      <Users className="h-5 w-5 mr-3" />
                      Team Management
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center p-3 rounded-lg text-left ${
                        activeTab === 'partners'
                          ? 'bg-secondary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('partners')}
                    >
                      <Building2 className="h-5 w-5 mr-3" />
                      Partners Management
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center p-3 rounded-lg text-left ${
                        activeTab === 'messages'
                          ? 'bg-secondary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('messages')}
                    >
                      <MessageCircle className="h-5 w-5 mr-3" />
                      Contact Messages
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full flex items-center p-3 rounded-lg text-left ${
                        activeTab === 'images'
                          ? 'bg-secondary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('images')}
                    >
                      <Image className="h-5 w-5 mr-3" />
                      Image Management
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPage;