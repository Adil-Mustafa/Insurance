import "../../styles/Messagebox.css";
const MessageBox = ({ title, content }) => (
  <div className="message-box">
    <div className="message-box-content">{content}</div>
  </div>
);

export default MessageBox;
