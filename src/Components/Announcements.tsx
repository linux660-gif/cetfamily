// src/Components/CardGroup.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardStyles from './CardStyles.css'

const Announcements: React.FC = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img src="/images/IMG_0851.JPG" className="card-img-top" alt="Upcoming Event1" />
        <div className="card-body">
          <h5 className="card-title">WORSHIP EXPERIENCE</h5>
          <p className="card-text">
             3rd May 2025
            </p>
          <p>
           Venue : Lecture Hall 15
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Time : 10pm - 5am</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img src="/images/IMG_0802.JPG" className="card-img-top" alt="Upcoming Event2" />
        <div className="card-body">
          <h5 className="card-title">FAMILY DAY</h5>
          <p className="card-text">
            3rd December 2024
          </p>
          <p>
            Venue : Suprise
            </p>
          <p className="card-text">
            <small className="text-body-secondary">Time: 8am - 5pm</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img src="/images/IMG_0995.JPG" className="card-img-top" alt="Upcoming Event3" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            3rd Jan 2025
          </p>
          <p>
            Venue: LH 15
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Time: 8am - 4pm</small>
          </p>
        </div>
      </div>
    

     <div className="card-group">
      <div className="card">
        <img src="/images/IMG_0851.JPG" className="card-img-top" alt="Upcoming Event1" />
        <div className="card-body">
          <h5 className="card-title">WORSHIP EXPERIENCE</h5>
          <p className="card-text">
             3rd May 2025
            </p>
          <p>
           Venue : Lecture Hall 15
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Time : 10pm - 5am</small>
          </p>
        </div>
        </div>
      </div>
    </div>    
  );
};

export default Announcements;
