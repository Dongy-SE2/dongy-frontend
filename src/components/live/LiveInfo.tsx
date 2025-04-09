import { LiveInfo } from "@/app/api/live/getLive";

interface Props {
  liveInfo: LiveInfo | null;
}

export default function Livestream({ liveInfo }: Props) {
  return (
    <div className="w-full max-w-[724px] h-full max-h-[353px] aspect-video">
      <iframe
        className="w-full h-full rounded-lg"
        src={
          liveInfo?.link ||
          "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0"
        }
        title="Bidding Live Stream"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
