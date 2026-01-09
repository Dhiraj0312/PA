'use client';
import Image from "next/image";
import LightRays from './LightRays';
import PerformanceOptimizer from './PerformanceOptimizer';
import './performance.css';

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert('Please fill in all fields');
      return;
    }
    
    alert(`Thank you ${data.name}! Your message has been sent. We'll respond within 24 hours.`);
    e.target.reset();
  };

  return (
    <PerformanceOptimizer>
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 relative z-50 sticky top-0 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/favicon.ico" alt="PACE Logo" width={40} height={40} className="rounded-full" priority />
            <h1 className="text-2xl font-bold">PACE</h1>
          </div>
          <div className="space-x-6">
            <a href="#home" className="hover:text-blue-300 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-blue-300 transition-colors duration-200">About Us</a>
            <a href="#products" className="hover:text-blue-300 transition-colors duration-200">Products</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-black py-20 relative overflow-hidden will-change-transform">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, transform: 'translateZ(0)' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.2}
            lightSpread={0.6}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.08}
            noiseAmount={0.05}
            distortion={0.02}
            className="hero-rays"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 will-change-transform">
            PACE - Industrial Power Electronics Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            35+ years of engineering expertise in industrial and power electronics product development. 
            Delivering reliable solutions for battery industry and beyond.
          </p>
          <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">CB25 Current Balancer</h3>
            <p className="text-lg text-gray-300">
              Revolutionary current balancing technology that automatically balances current in two paths, 
              ensuring consistent battery quality while reducing rework, warranty claims, and power dissipation.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Engineering Excellence Since Decades</h3>
              <p className="text-gray-300 mb-4">
                Founded by seasoned engineers with 35+ years of combined experience in industrial and 
                power electronics product development. Our team has successfully developed and supplied 
                reliable products across various industries.
              </p>
              <p className="text-gray-300">
                With extensive background in the battery industry from previous employment, we understand 
                the critical challenges and deliver innovative solutions that make a real difference.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Our Expertise</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Industrial Electronics Development</li>
                <li>• Power Electronics Solutions</li>
                <li>• Battery Industry Applications</li>
                <li>• Quality Assurance Systems</li>
                <li>• Reliable Product Supply Chain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-black relative overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="bottom-left"
            raysColor="#8b5cf6"
            raysSpeed={0.8}
            lightSpread={0.4}
            rayLength={1.0}
            followMouse={false}
            noiseAmount={0.03}
            distortion={0.01}
            className="products-rays"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Products</h2>
          
          {/* Product Overview */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700 text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-4">CB25 Current Balancer</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Revolutionary current balancing technology that automatically balances current in two paths, 
                ensuring consistent battery quality while reducing rework, warranty claims, and power dissipation.
              </p>
            </div>
          </div>

          {/* Product Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            
            {/* Product Image */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-purple-400 mb-6 text-center">CB25 Current Balancer</h4>
                
                {/* Main Product Image */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <Image 
                    src="/WhatsApp Image 2026-01-07 at 15.53.49.jpeg" 
                    alt="CB25 Current Balancer" 
                    width={400} 
                    height={300} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">In Stock</span>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="text-center mb-4">
                  <h5 className="text-lg font-bold text-white mb-2">CB25-Pro Current Balancer</h5>
                  <p className="text-gray-300 text-sm mb-3">High-precision dual-path current balancing solution</p>
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">±0.1%</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">25A</div>
                      <div className="text-xs text-gray-400">Max Current</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">&lt;10ms</div>
                      <div className="text-xs text-gray-400">Response</div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <a href="#contact" className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Request Quote</span>
                    <span>💬</span>
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="/WhatsApp Image 2026-01-07 at 15.53.49.jpeg" download="CB25-Product-Image.jpeg" className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded transition-colors text-center">
                      📥 Download
                    </a>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 px-3 rounded transition-colors">
                      📋 Datasheet
                    </button>
                  </div>
                </div>
                
                {/* Quick Specs */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <h6 className="text-sm font-bold text-purple-400 mb-3">Quick Specifications</h6>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-800 p-2 rounded">
                      <div className="text-gray-400">Input</div>
                      <div className="text-white font-medium">12-48V DC</div>
                    </div>
                    <div className="bg-gray-800 p-2 rounded">
                      <div className="text-gray-400">Size</div>
                      <div className="text-white font-medium">120×80×45mm</div>
                    </div>
                    <div className="bg-gray-800 p-2 rounded">
                      <div className="text-gray-400">Weight</div>
                      <div className="text-white font-medium">850g</div>
                    </div>
                    <div className="bg-gray-800 p-2 rounded">
                      <div className="text-gray-400">Temp</div>
                      <div className="text-white font-medium">-20°C to +70°C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700 h-full">
                <h4 className="text-xl font-bold text-purple-400 mb-6">Technical Specs</h4>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold mb-1">Input Voltage</div>
                    <div className="text-white">12V - 48V DC</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold mb-1">Max Current</div>
                    <div className="text-white">25A per path</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold mb-1">Accuracy</div>
                    <div className="text-white">±0.1%</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold mb-1">Response Time</div>
                    <div className="text-white">&lt; 10ms</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold mb-1">Dimensions</div>
                    <div className="text-white">120x80x45mm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Applications */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700 h-full">
                <h4 className="text-xl font-bold text-purple-400 mb-6">Key Features</h4>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-sm">Dual-path current balancing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-sm">Real-time monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-sm">LED status indicators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-sm">Compact design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-sm">CE certified & RoHS compliant</span>
                  </li>
                </ul>
                
                <h5 className="text-lg font-bold text-purple-400 mb-3">Applications</h5>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-sm">Battery manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-sm">EV charging systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-sm">Solar energy storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-sm">Industrial power supplies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Product Information */}
          <div className="max-w-6xl mx-auto">
            <details className="bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-700">
              <summary className="px-6 py-4 bg-purple-600 text-white rounded-t-xl hover:bg-purple-700 transition-colors cursor-pointer font-semibold text-center">
                View Detailed Specifications
              </summary>
              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-purple-400 mb-4">Additional Specifications</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 p-3 rounded">
                        <div className="text-purple-400 font-bold text-sm">Model</div>
                        <div className="text-white">CB25-Pro</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <div className="text-purple-400 font-bold text-sm">Weight</div>
                        <div className="text-white">850g</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <div className="text-purple-400 font-bold text-sm">Operating Temp</div>
                        <div className="text-white">-20°C to +70°C</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <div className="text-purple-400 font-bold text-sm">Warranty</div>
                        <div className="text-white">2 Years</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-bold text-purple-400 mb-4">Benefits</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Enhanced production efficiency</li>
                      <li>• Cost reduction through less rework</li>
                      <li>• Improved product reliability</li>
                      <li>• Energy savings</li>
                      <li>• Reduced maintenance requirements</li>
                      <li>• Better quality control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="right"
            raysColor="#10b981"
            raysSpeed={1.0}
            lightSpread={0.5}
            rayLength={0.8}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0.02}
            className="comparison-rays"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-12">CB25 vs Traditional Methods</h2>
          
          {/* Before/After Comparison */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Method */}
              <div className="bg-red-900/20 backdrop-blur-sm p-8 rounded-lg border border-red-500/30">
                <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">❌ Traditional Method</h3>
                <div className="space-y-4">
                  <div className="bg-red-800/30 p-4 rounded">
                    <h4 className="font-bold text-red-300 mb-2">Current Imbalance Issues</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Manual monitoring required</li>
                      <li>• Frequent charger stops</li>
                      <li>• Inconsistent battery quality</li>
                      <li>• High power dissipation in resistors</li>
                    </ul>
                  </div>
                  <div className="bg-red-800/30 p-4 rounded">
                    <h4 className="font-bold text-red-300 mb-2">Production Problems</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 72% production efficiency</li>
                      <li>• High rework costs</li>
                      <li>• Frequent warranty claims</li>
                      <li>• Extended downtime</li>
                    </ul>
                  </div>
                  <div className="text-center mt-6">
                    <div className="text-3xl font-bold text-red-400">$50,000</div>
                    <div className="text-red-300">Annual Loss</div>
                  </div>
                </div>
              </div>

              {/* CB25 Method */}
              <div className="bg-green-900/20 backdrop-blur-sm p-8 rounded-lg border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">✅ With CB25</h3>
                <div className="space-y-4">
                  <div className="bg-green-800/30 p-4 rounded">
                    <h4 className="font-bold text-green-300 mb-2">Automatic Balancing</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Real-time current monitoring</li>
                      <li>• Automatic imbalance correction</li>
                      <li>• Consistent battery quality (98.5%)</li>
                      <li>• 40% less power dissipation</li>
                    </ul>
                  </div>
                  <div className="bg-green-800/30 p-4 rounded">
                    <h4 className="font-bold text-green-300 mb-2">Enhanced Production</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 95% production efficiency</li>
                      <li>• 85% reduction in rework</li>
                      <li>• 75% fewer warranty claims</li>
                      <li>• 90% less charger downtime</li>
                    </ul>
                  </div>
                  <div className="text-center mt-6">
                    <div className="text-3xl font-bold text-green-400">$42,500</div>
                    <div className="text-green-300">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Production Efficiency */}
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Production Efficiency</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">With CB25</span>
                    <span className="font-bold text-green-400 text-lg">95%</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '95%'}}>
                      <div className="absolute right-2 top-0 h-full flex items-center">
                        <span className="text-white text-xs font-bold">+23%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Traditional Method</span>
                    <span className="font-bold text-red-400 text-lg">72%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '72%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Impact */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Cost Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Rework Reduction</span>
                    <span className="font-bold text-emerald-400 text-lg">-85%</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '85%'}}>
                      <div className="absolute right-2 top-0 h-full flex items-center">
                        <span className="text-white text-xs font-bold">$21K</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Power Savings</span>
                    <span className="font-bold text-cyan-400 text-lg">-40%</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '40%'}}>
                      <div className="absolute right-2 top-0 h-full flex items-center">
                        <span className="text-white text-xs font-bold">$8K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Improvement */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-6">Quality Improvement</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Battery Consistency</span>
                    <span className="font-bold text-purple-400 text-lg">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '98.5%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Warranty Claims</span>
                    <span className="font-bold text-pink-400 text-lg">-75%</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '75%'}}>
                      <div className="absolute right-2 top-0 h-full flex items-center">
                        <span className="text-white text-xs font-bold">$12K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Efficiency */}
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm p-6 rounded-xl border border-amber-500/30">
              <h3 className="text-xl font-bold text-amber-400 mb-6">Operational Efficiency</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Charger Stops Reduced</span>
                    <span className="font-bold text-amber-400 text-lg">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Maintenance Time</span>
                    <span className="font-bold text-orange-400 text-lg">-60%</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-700 ease-out" style={{width: '60%'}}>
                      <div className="absolute right-2 top-0 h-full flex items-center">
                        <span className="text-white text-xs font-bold">$1.5K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-sm text-white p-8 rounded-lg border border-green-500/30">
            <h3 className="text-2xl font-bold text-center mb-8">Return on Investment</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">6 months</div>
                <div className="text-sm text-gray-300">Payback Period</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-400">$42,500</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">340%</div>
                <div className="text-sm text-gray-300">ROI in Year 1</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">$212K</div>
                <div className="text-sm text-gray-300">5-Year Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-black text-white relative overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="left"
            raysColor="#06b6d4"
            raysSpeed={0.6}
            lightSpread={0.3}
            rayLength={0.7}
            followMouse={false}
            noiseAmount={0.02}
            className="contact-rays"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-12 text-white">Let's Connect</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">sales@pace-electronics.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">Industrial City, India</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🕰️</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Business Hours</div>
                    <div className="text-gray-300">Mon - Fri: 9AM - 6PM</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Global Reach</div>
                    <div className="text-gray-300">Serving clients worldwide</div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center border border-gray-700">
                <div className="text-center text-gray-400">
                  <div className="text-2xl mb-2">🗺️</div>
                  <p>Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-white">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 will-change-transform"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 will-change-transform"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <input 
                    name="subject"
                    type="text" 
                    placeholder="Project inquiry" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 will-change-transform"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    rows="6" 
                    placeholder="Tell us about your project..." 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none will-change-transform"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 will-change-transform"
                >
                  <span>Send Message</span>
                  <span>✈️</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">PACE</h3>
            <p className="text-gray-400">Industrial Power Electronics Excellence</p>
          </div>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400">
              © 2024 PACE. All rights reserved. | 35+ Years of Engineering Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
    </PerformanceOptimizer>
  );
}