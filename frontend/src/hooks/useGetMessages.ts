import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConveration";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    async function getMessages() {
      if (!selectedConversation) return;

      setLoading(true);
      setMessages([]);

      try {
        const res = await fetch(`/api/messages/${selectedConversation.id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "An error occurred");
        setMessages(data);
      } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
}

export default useGetMessages;
