import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import MapComponent from './MapComponent';
import InfoPanel from './InfoPanel';
import '../styles/App.css';

interface CarData {
    name: string;
    isFuel: boolean;
    timeLeft: number;
}

const queryClient = new QueryClient();

const fetchCarData = async (): Promise<CarData> => {
    const response = await fetch('http://localhost:5000/cars');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchAverageSpeed = async (): Promise<number> => {
    const response = await fetch('http://localhost:5000/gps/averageSpeed/1');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const App: React.FC = () => {
    const { data: carData, error: carDataError, isLoading: carDataLoading } = useQuery<CarData>('carData', fetchCarData);
    const { data: averageSpeed, error: averageSpeedError, isLoading: averageSpeedLoading } = useQuery<number>('averageSpeed', fetchAverageSpeed);

    if (carDataLoading || averageSpeedLoading) {
        return <div>Loading...</div>;
    }

    if (carDataError || averageSpeedError) {
        console.error('Error fetching data:', carDataError || averageSpeedError);
        return <div>Error fetching data</div>;
    }

    const timeLeft = carData ? (carData.timeLeft / 60).toFixed(2) + ' minutes' : '0 minutes';

    return (
        <div className="app-container">
            <div className="map-container">
                <MapComponent />
            </div>
            <div className="info-container">
                <InfoPanel
                    renter={carData?.name || null}
                    isFuel={carData?.isFuel || null}
                    timeLeft={timeLeft}
                    averageSpeed={averageSpeed || null}
                />
            </div>
        </div>
    );
};

const AppWrapper: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

export default AppWrapper;
