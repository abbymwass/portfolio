import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactText = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange to-cyan mx-auto rounded-full"></div>
        </div>

        <p 
          className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <a 
            href="mailto:abbymwass35@gmail.com"
            className="group relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-orange" />
              </div>
              <h3 className="text-white font-medium mb-2">Email</h3>
              <p className="text-gray-400 text-sm group-hover:text-orange transition-colors duration-300">abbymwass35@gmail.com</p>
            </div>
          </a>

          <a 
            href="tel:+254713258583"
            className="group relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-2xl text-cyan" />
              </div>
              <h3 className="text-white font-medium mb-2">Call</h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan transition-colors duration-300">+254713258583</p>
            </div>
          </a>

          <div className="group relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-2xl text-orange" />
              </div>
              <h3 className="text-white font-medium mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <p 
          className="text-gray-400 text-sm mt-12 bg-white/5 py-3 px-6 rounded-full inline-block"
        >
          Available for freelance work and full-time positions
        </p>
      </div>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          {/* Main button */}
          <a
            href="https://wa.me/254713258583"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactText;
