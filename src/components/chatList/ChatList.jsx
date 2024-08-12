import { Link } from "react-router-dom";
import "./chatList.css";


const ChatList = () => {
  return (
    <div className="chatList">

      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Lama AI</Link>
      <Link to="/">Contact</Link>

      <hr />

      <div className="list">
      <span className="title">RECENT CHATS</span>
      <Link to="/">Lama AI</Link>
      <Link to="/">Lama AI</Link>
      <Link to="/">Lama AI</Link>
      <Link to="/">Lama AI</Link>
      <Link to="/">Lama AI</Link>
      </div>

      <hr />

      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>

    </div>
  );
};

export default ChatList;