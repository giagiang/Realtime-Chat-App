import { useEffect, useState } from "react";
import Message from "../components/Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase";

const ChatBox = () => {
  const[message, setMassage] = useState([])
  // const message = [
  //   {
  //     id: 1,
  //     text: "hello everyone",
  //     name: "Benzema",
  //   },
  //   {
  //     id: 2,
  //     text: "hi!",
  //     name: "Messi",
  //   },
  //   {
  //     id: 3,
  //     text: "i come from Vietnamese",
  //     name: "Ricciardo",
  //   },
  //   {
  //     id: 4,
  //     text: "nice to meet you",
  //     name: "Cristiano",
  //   },
  // ];
  useEffect(() => {
    const q = query(
      collection(db, "Message"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const Message = [];
      querySnapshot.forEach((doc) => {
        // Message.push(doc.data().name);
        Message.push ({...doc.data(),id: doc.id})
      });
      setMassage(Message)
    });
    return () => unsubscribe;
  }, []); 
  return (
    <div className="pb-44 pt-20 containerWrap">
      {message.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
