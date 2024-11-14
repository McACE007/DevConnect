import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConveration";
import notificationSound from "../assets/sounds/notification.mp3";

function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
}

export default useListenMessages;
