import { useEffect, useRef } from "react";

function useChatScoll(dep: any) {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
    }, 100);
  }, [dep]);

  return ref;
}

export default useChatScoll;
