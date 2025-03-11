import React from "react";

interface LiveHistoryProps {
  Title: string
}

function SetLiveBidding_LiveHistoryCard({ Title }: LiveHistoryProps) {
  return (
    <>
    <div className="flex items-center space-x-3 p-2 border rounded-lg shadow-sm bg-gray-100">
      <div className="w-10 h-10 bg-gray-300 rounded-lg flex-shrink-0"></div>
      <span className="text-gray-800 text-sm"> { Title }</span>
    </div>
    </>
  );
}

export default SetLiveBidding_LiveHistoryCard;

