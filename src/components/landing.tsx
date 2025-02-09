import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ValentinesHearts from "./floatingheart";

export const Landingpage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
};


  const handleCreate = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      navigate('/welcome', { state: { name: inputValue } });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-300 via-red-300 to-pink-300 h-screen flex items-center justify-center"> 
      <ValentinesHearts />
      
      <div className="w-[500px] h-[440px] bg-white/10 backdrop-blur-lg rounded-4xl p-6 border border-white">
        <p className="text-red-500 text-3xl font-semibold font-serif text-center mt-8">
          Create Your Valentine
        </p>
        <p className="text-white text-xl font-semibold font-serif mt-8 text-center">
          Craft a magical experience for your special someone
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full h-[50px] bg-white/10 backdrop-blur-lg rounded-2xl mt-6 border-2 focus:ring-2 focus:ring-red-700 p-3 text-white placeholder-white/80 text-lg"
          placeholder="Type Your Name Here"
        />
        {/* BUTTON */}
        <button 
          onClick={handleCreate}
          disabled={isLoading}
          className="w-full h-[50px] mt-6 bg-gradient-to-r from-red-600 via-pink-400 to-pink-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all relative"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : (
            "Create Magic"
          )}
        </button>
      </div>
    </div> 
  );
};