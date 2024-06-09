import React from 'react';
import InfoBox from './InfoBox';
import '../styles/InfoPanel.css';

interface InfoPanelProps {
    renter: string | null;
    isFuel: boolean | null;
    timeLeft: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ renter, isFuel, timeLeft }) => {
    return (
        <div className="info-panel">
            <InfoBox title="Proprietary" value={renter || 'Unknown'} />
            <InfoBox title="Average Speed" value="60 km/h" />
            {isFuel ? (
                <InfoBox title="Fuel" value="50%" />
            ) : (
                <InfoBox title="Battery" value="80%" />
            )}
            <InfoBox title="Time Left" value={timeLeft} />
        </div>
    );
};

export default InfoPanel;
