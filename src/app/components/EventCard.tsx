import React from 'react';

interface Event {
  id: string;
  displayName: string;
  start: { date: string };
  location: { city: string };
  venue: { displayName: string };
  uri: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{event.displayName}</h3>
      <p className="text-gray-600 mb-2">{event.start.date}</p>
      <p className="text-gray-600 mb-2">{event.location.city}</p>
      <p className="text-gray-600">{event.venue.displayName}</p>
      <a 
        href={event.uri} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        View on Songkick
      </a>
    </div>
  );
};

export default EventCard;