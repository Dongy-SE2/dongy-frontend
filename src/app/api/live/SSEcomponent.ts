import { useEffect } from "react";

const SSEComponent = ({ liveDid } : {liveDid:string}) => {
  useEffect(() => {
    const eventSource = new EventSource(`http://{{backend_url}}/api/sse/${liveDid}`);

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      if (newMessage.event === "new_bid") {
        console.log("New bid received:", newMessage);
        // Refresh state with new bid
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [liveDid]);

  return (
    
  );
};