import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Logo({ margin = "mx-8", color = "blue" }) {
  
  const navigate = useNavigate()
  
  return (
    <div className="logo cursor-pointer" onClick={()=>navigate("/")}>
      <span className={`font-bold text-3xl ${margin} ${color=="blue" ? "text-blue-600":"text-black"}`}>iTask</span>
    </div>
  );
}

export default Logo;
