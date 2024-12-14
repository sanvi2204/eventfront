import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Checkbox } from '@/components/ui/checkbox';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-white-500 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
          "Spark Events: Where people, ideas, and opportunities come together."

          </h1>
          <p className="text-lg md:text-xl mb-8">
          "Spark your next event with a click—book now and make unforgettable memories."

          </p>
          <Link to="/get-started">
            <Button className="bg-white text-pink-500 hover:bg-pink-100">
            <Link to='/register'>GET STARTED</Link> 
               <FaArrowRight className="ml-2" />
              
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Event Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Corporate Event</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://i.pinimg.com/736x/5f/32/db/5f32db9f7d406e327b50d7505c842256.jpg"
                  alt="Corporate Event"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <p className="text-white-700 mb-4">
                  Discover how our corporate events bring people together and create unforgettable memories.
                </p>
                <Link to="/events/corporate">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600">
                  <Link to='/EventGallery'>LEARN MORE</Link> 
                   <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Wedding Event</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://i.pinimg.com/736x/25/1a/5d/251a5d9ee46fe76d01ef14cea8cd2715.jpg"
                  alt="Wedding Event"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <p className="text-white-700 mb-4">
                  Discover how our wedding events bring people together and create unforgettable memories.
                </p>
                <Link to="/events/wedding">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600">
                  <Link to='/EventGallery'>LEARN MORE</Link> 
                  <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Social Event</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://i.pinimg.com/564x/39/ed/e8/39ede868a43b48ca3c33fcf2ca90196b.jpg"
                  alt="Social Event"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <p className="text-white-700 mb-4">
                  Discover how our social events bring people together and create unforgettable memories.
                </p>
                <Link to="/events/social">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600">
                  <Link to='/EventGallery'>LEARN MORE</Link> 
                   <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
{/* Event Services Table */}
<div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Event Services
          </h2>
          <table className="event-services-table">
            <thead>
              <tr>
                <th>Full Service Event</th>
                <th>Partial Planning & Coordination</th>
                <th>Audio Visual Management</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Design & Coordination</td>
                <td>3 Days Destination Event Planning</td>
                <td>
                  All Vendor Management<br />
                  - Vendor Referral Only
                </td>
              </tr>
              <tr>
                <td>Day Of Event Coordination</td>
                <td>Venue Sourcing</td>
                <td>
                  Guest Management<br />
                  - List & RSVP Management
                </td>
                </tr>
              <tr>
                <td>Production, Theme & Floral Design</td>
                <td>Corporate Event Coordinator</td>
                <td>
                  Occasional Event Planning<br />
                  Such as Birthday, Bridal Shower, Anniversary, New Year & More
                </td>
              </tr>
              <tr>
                <td>Wedding Rehearsal</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
      {/* Upcoming Events Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-pink-500 mr-2" />
                  <span className="text-black-900 font-medium">June 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-white-900 mb-2">
                  Corporate Networking Event
                </h3>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span className="text-gray-700">New York City, NY</span>
                </div>
                <p className="text-white-700 mb-4">
                  Join us for an evening of networking and collaboration with
                  industry leaders.
                </p>
                <Link to="/events/corporate-networking">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600">
                    Learn More <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-white-500 mr-2" />
                  <span className="text-white-900 font-medium">July 10, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Wedding Expo
                </h3>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
                <p className="text-white-700 mb-4">
                  Explore the latest wedding trends and connect with top vendors at our annual wedding expo.
                </p>
                <Link to="/events/wedding-expo">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600">
                    Learn More <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-white-500 mr-2" />
                  <span className="text-white-900 font-medium">August 20, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-white-900 mb-2">
                  Summer Music Festival
                </h3>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span className="text-gray-700">Los Angeles, CA</span>
                </div>
                <p className="text-white-700 mb-4">
                  Join us for a day of music, food, and family fun at our annual summer music festival.
                </p>
                <Link to="/events/summer-music-festival">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600">
                    Learn More <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Subscribe for Updates
          </h2>
          <div className="max-w-md mx-auto">
            <form className="flex items-center mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 mr-4"
              />
              <Button className="bg-pink-500 text-white hover:bg-pink-600">
                Subscribe <FaEnvelope className="ml-2" />
              </Button>
            </form>
            <div className="flex items-center">
              {/* <Checkbox className="mr-2" /> */}
              <p className="text-gray-700">
                I agree to receive updates and promotions. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;