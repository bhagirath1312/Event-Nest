import EventCard from "../../components/EventCard";
import Navigation from "../../components/Navigation/Navigation";
import { eventList } from "../../utils/EventDatabase";
import './EventList.css'

function EventList() {
  return (
    <div>
      <Navigation />
    <div className="event-list-wrapper">
        <div className="event-list">
      {eventList.map((event) => {
        return (
          <EventCard
            key={event.id}
            id={event.id}
            heading={event.heading}
            date={event.date}
            location={event.location}
            img={event.img}
            description={event.description}
          />
        );
      })}
      </div>
    </div>
    </div>
  );
}

export default EventList;
