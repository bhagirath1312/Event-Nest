import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventDetails from '../pages/EventDetails/EventDetails';
import EventList from '../pages/EventList/EventList';
import FilterEvents from '../pages/FilterEvents/FilterEvents';
import Stalls from '../components/Stalls_1';
import AddEvent from '../components/AddEvent';

function RoutesProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EventList />} />
                <Route path='/find-events' element={<FilterEvents />} />
                <Route path='/events/:id' element={<EventDetails />} />
                <Route path='/stall' element={<Stalls />} />
                <Route path='/addevent' element={<AddEvent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesProvider;