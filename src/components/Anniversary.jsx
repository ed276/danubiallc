import { useState, useEffect } from 'react';
import './Anniversary.css';

const TARGET_DATE = new Date('2027-01-01T00:00:00');

function getTimeLeft() {
    const now = new Date();
    const diff = TARGET_DATE - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function DigitBlock({ value, label }) {
    const padded = String(value).padStart(2, '0');
    return (
        <div className="anniv-digit-block">
            <div className="anniv-digit">{padded}</div>
            <div className="anniv-digit-label">{label}</div>
        </div>
    );
}

export default function Anniversary() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="anniv-banner">
            {/* Subtle particle dots */}
            <div className="anniv-particles" aria-hidden="true">
                {[...Array(18)].map((_, i) => (
                    <span key={i} className="anniv-particle" style={{ '--i': i }} />
                ))}
            </div>

            <div className="anniv-inner">
                {/* Badge */}
                <div className="anniv-badge">
                    <span className="anniv-badge-star">✦</span>
                    <span>25 Years of Care &amp; Trust</span>
                    <span className="anniv-badge-star">✦</span>
                </div>

                {/* Headline */}
                <h2 className="anniv-heading">
                    A Quarter Century&nbsp;
                    <span className="anniv-heading-accent">in Your Corner</span>
                </h2>

                {/* Countdown */}
                <div className="anniv-countdown">
                    <DigitBlock value={timeLeft.days} label="Days" />
                    <div className="anniv-sep">:</div>
                    <DigitBlock value={timeLeft.hours} label="Hours" />
                    <div className="anniv-sep">:</div>
                    <DigitBlock value={timeLeft.minutes} label="Minutes" />
                    <div className="anniv-sep">:</div>
                    <DigitBlock value={timeLeft.seconds} label="Seconds" />
                </div>

                <div className="anniv-divider" />

                {/* Thank-you message */}
                <p className="anniv-message">
                    Twenty-four-plus years of early mornings, fresh linens, and doing things right,
                    because the people who trust us with their homes and their investments deserve nothing less.{' '}
                    To every homeowner who's handed us their keys, welcomed us back season after season,
                    and made us feel like part of the family —{' '}
                    <em>thank you.</em>{' '}
                    You are the heart of everything we do.
                </p>

                <div className="anniv-milestone">
                    <span>Est. 2002</span>
                    <span className="anniv-dot">•</span>
                    <span>Celebrating 2027</span>
                </div>
            </div>
        </section>
    );
}
