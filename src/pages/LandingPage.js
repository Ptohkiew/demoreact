import ghost from "../assets/icon/ghost.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
const navigate = useNavigate();
const handleToDetail = () => {
    navigate("/details");
};
    return (
        <div className="text-center">
            <p className="font-mono text-3xl font-bold uppercase">About Me</p>
            <div className="flex justify-center">
                <img src={ghost} alt="ghost" className="w-[15%] my-3 bg-[#F5BA00] rounded-lg p-6"  />
            </div>
            <p className="text-md mt-2 font-bold text-white mx-8 mx-36">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. {"\n"}
            </p>{" "}
            <br />
            <button className="text-xl text-[#FF6666] underline" onClick={() =>handleToDetail()}>NEXT</button>    
        </div>
    );
}

export default LandingPage;