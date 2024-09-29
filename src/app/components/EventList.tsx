import React from 'react';
import EventCard from './EventCard';

interface Event {
  id: string;
  displayName: string;
  start: { date: string };
  location: { city: string };
  venue: { displayName: string };
  uri: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;