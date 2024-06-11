import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import MapComponent from './MapComponent';
import InfoPanel from './InfoPanel';
import '../styles/App.css';

interface CarData {
    plate: string,
    VIN: string,
    year: number,
    carsDetails: CarsDetails,
    id: number,
    isRented: boolean,
    model: string
}

interface CarsDetails {
    color: string,
    completation: string,
    specifications: string,
    capacityLevel: number,
    carId: number,
    id: number,
    isFuel: boolean
}

interface rideDetails {
    totalDistance: number | null,
    totalTimeHours: number | null,
    averageSpeed: number | undefined
}

interface TimeLeft {
    timeLeft: string | undefined
}

const queryClient = new QueryClient();

const fetchCarData = async (id: string | undefined): Promise<CarData> => {
    const response = await fetch(`http://localhost:5000/cars/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchAverageSpeed = async (id: string | undefined): Promise<rideDetails> => {
    const response = await fetch(`http://localhost:5000/gps/details/rental/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchTimeLeft = async (id: string | undefined): Promise<TimeLeft> => {
    const response = await fetch(`http://localhost:5000/rentals/${id}`);
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
}

const App: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if(!id) {
        return <div>No car selected</div>;
    }

    const { data: carData, error: carDataError, isLoading: carDataLoading } = useQuery<CarData>(['carData', id], () => fetchCarData(id));
    const { data: rideDetails, error: rideDetailsError, isLoading: carDetailsLoading } = useQuery<rideDetails>(['rideDetails', id], () => fetchAverageSpeed(id));
    const { data: timeLeft, error: timeLeftError, isLoading: timeLeftLoading } = useQuery<TimeLeft>(['timeLeft', id], () => fetchTimeLeft(id));
    if (carDataLoading || carDetailsLoading || timeLeftLoading) {
        return <div>Loading...</div>;
    }

    if (carDataError || rideDetailsError || timeLeftError) {
        console.error('Error fetching data:', carDataError || rideDetailsError);
        return <div>Error fetching data</div>;
    }


    return (
        <div className="app-container">
            <div className="map-container">
                <MapComponent id={id}/>
            </div>
            <div className="info-container">
                <InfoPanel
                    renter={carData?.model || null}
                    isRented={carData?.isRented || false}
                    totalDistance={rideDetails?.totalDistance || null}
                    totalTimeHours={rideDetails?.totalTimeHours || null}
                    isFuel={carData?.carsDetails.isFuel || null}
                    capacity={carData?.carsDetails.capacityLevel || null}
                    timeLeft={timeLeft?.timeLeft || undefined}
                    averageSpeed={rideDetails?.averageSpeed}
                />
            </div>
        </div>
    );
};

const AppWrapper: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path="/:id" element={<App />} />
                {/* Add other routes here if needed */}
            </Routes>
        </Router>
    </QueryClientProvider>
);

export default AppWrapper;
