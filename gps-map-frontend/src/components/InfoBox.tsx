import React from 'react';
import '../styles/InfoBox.css';

interface InfoBoxProps {
    title: string;
    value: string | number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value }) => {
    return (
        <div className="info-box">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default InfoBox;
