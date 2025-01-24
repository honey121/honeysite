import React from 'react';
import './Dashboard.css';
import { useLanguage } from '../../../context/LanguageContext';
import { SCREEN_NAME } from '../../constants/screenNames';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const { t, language, changeLanguage } = useLanguage();

    const handleCardClick = (screen) => {
        navigate(`/${screen}`);
    };

    return (
        <div className="dashboard-container">
            {/* Global Language Selector */}
            <div className="language-selector">
                <label htmlFor="language">Select Language: </label>
                <select id="language" value={language} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>

            {/* Title */}
            <h2 className="dashboard-title">{t.dashboard.title}</h2>

            {/* Cards */}
            <div className="dashboard-cards">
                <div className="card" onClick={() => handleCardClick(SCREEN_NAME.SCHEDULE)}>
                    <div className="card-content">
                        <h3>{t.dashboard.buyTickets}</h3>
                        <p>{t.dashboard.buyTicketsDesc}</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick(SCREEN_NAME.ACTIVE_TICKETS)}>
                    <div className="card-content">
                        <h3>{t.dashboard.activeTickets}</h3>
                        <p>{t.dashboard.activeTicketsDesc}</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick(SCREEN_NAME.PURCHASED_TICKETS)}>
                    <div className="card-content">
                        <h3>{t.dashboard.purchasedTickets}</h3>
                        <p>{t.dashboard.purchasedTicketsDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
