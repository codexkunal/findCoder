import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Github,
  ArrowRight,
  BarChart2,
  Users,
  TrendingUp,
  Search,
} from "lucide-react";
import './landingPages.css'
import david from '../assets/david.jpg'
import jug from '../assets/jug.jpeg'
import Kunal from '../assets/kunal.jpeg'
import kartik from '../assets/kartik.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import analytics from '../assets/analytics.jpg'


function LandingPage() {
  const navigate = useNavigate();
  const youtubeID = "rt5Z07ZqPWo";



  const developers = [
    {
      name: 'David Malviya',
      image: david,
      linkedin: 'https://www.linkedin.com/in/davidmalviya/',
      github: 'https://github.com/david-malviya',
    },
    {
      name: 'Sengar Kunal Singh',
      image: kunal,
      linkedin: 'https://www.linkedin.com/in/kunalsingh111/',
      github: 'https://www.github.com/codexkunal',
    },
    {
      name: 'JugrajSingh Rajpurohit',
      image: jug,
      linkedin: 'https://www.linkedin.com/in/jugrajsingh18/',
      github: 'https://github.com/Jugrajsinghl',
    },
    {
      name: 'Kahar Kartik',
      image: kartik,
      linkedin: 'https://www.linkedin.com/in/kahar-kartik/',
      github: 'https://github.com/KaharKartik',
    },
  ];





  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-gray-800 shadow-lg rounded-md">
        <div className="flex items-center space-x-2">
          <BarChart2 className="h-8 w-8 text-blue-500" />
          <span className="text-2xl font-bold text-white">SocialScope</span>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
          <button
            onClick={() => navigate("/analytics")}
            className="get-started-btn flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Hero Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Unlock Social Media Insights
            <br />
            with <span className="text-blue-500">AI-Powered Analytics</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8">
            Transform your social media data into actionable insights. Make
            data-driven decisions and stay ahead of trends with SocialScope's
            advanced analytics platform.
          </p>

          <div className="landing_page_buttons">
            <button
              onClick={() => navigate("/analytics")}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              Start Analyzing Now
            </button>
          </div>

        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Analytics Dashboard"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-lg"></div>
          </div>
        </div>
      </main>


      {/* Analytics part */}
      <div className="growth-main-container flex items-center justify-between">
        <div className="growth-container">
          <img
            src={analytics}
            alt="Growth"
            className="growth-image"
          />
        </div>

        <div className="growth-text-container text-right">
          <button
            onClick={() => navigate("/graph")}
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-slate-400 transition-colors text-lg"
          >
            See your Growth <FontAwesomeIcon icon={faChartLine} className="ml-2 text-lg" />
          </button>
          <p className="growth-description mt-4 text-lg text-gray-700">
            Track your progress and see how your efforts are contributing to growth.
            Analyze data and gain insights to improve further.
          </p>
        </div>
      </div>



      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Choose SocialScope?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <Search className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Deep Analysis</h3>
            <p className="text-gray-400">
              Get comprehensive insights into your social media performance.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Trend Detection</h3>
            <p className="text-gray-400">
              Stay ahead of the curve with real-time trend analysis.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Audience Insights
            </h3>
            <p className="text-gray-400">
              Understand your audience better with detailed demographics.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          See How It Works
        </h2>
        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-xl"
            title="SocialScope Demo Video"
            src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
            style={{
              width: "100%",
              maxWidth: "800px", // Matches the UI's width
              height: "450px",   // Matches the proportionate height
              border: "4px solid #2D3748", // Adds a subtle border for design consistency
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>


      {/* {developer section} */}
      {/* <footer className="developer-footer">
        <h1>Our Developers</h1>
        <div className="developer-container">
          {developers.map((dev, index) => (
            <div className="developer-card" key={index}>
              <img src={dev.image} alt={dev.name} className="developer-image" />
              <h4 className="developer-name">{dev.name}</h4>
              <div className="developer-links">
                <a
                  href={dev.linkedin}
                  className="developer-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="developer-linkedin-icon"
                  />
                </a>
                <a
                  href={dev.github}
                  className="developer-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="developer-github-icon"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </footer> */}


      <footer className="developer-footer">
  <h1>Our Developers</h1>
  <div className="our_developer_border_bottom"></div>
  <div className="developer-container">
    {developers.map((dev, index) => (
      <div className="developer-card" key={index}>
        <img src={dev.image} alt={dev.name} className="developer-image" />
        <h4 className="developer-name">{dev.name}</h4>
        <p className="developer-subject">Computer Engineering (AI/ML)</p>
        <div className="developer-links">
          <a
            href={dev.linkedin}
            className="developer-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="developer-linkedin-icon"
            />
          </a>
          <a
            href={dev.github}
            className="developer-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="developer-github-icon"
            />
          </a>
        </div>
      </div>
    ))}
  </div>
</footer>




    </div>
  );
}

export default LandingPage;
