import React from 'react';
import './EventGallery.css'; // Make sure to create this CSS file

// Sample event data with image URLs
const eventsData = [
  { id: 1, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-29.jpg' },
  { id: 2, imageUrl: 'https://adornmentevents.com/wp-content/uploads/ae-gallery-modern-18.jpg' },
  { id: 3, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-ballroom-15.jpg' },
  { id: 4, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-urban-11.jpg' },
  { id: 5, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-ballroom-40.jpg' },
  { id: 6, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-ballroom-34.jpg' },
  { id: 7, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-lodge-5.jpg' },
  { id: 8, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-ballroom-20.jpg' },
  { id: 9, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-coast-10.jpg' },
  { id: 10, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-ballroom-5.jpg' },
  { id: 11, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-urban-40.jpg' },
  { id: 12, imageUrl: 'https://i.pinimg.com/736x/5f/32/db/5f32db9f7d406e327b50d7505c842256.jpg' },
  { id: 13, imageUrl: 'https://i.pinimg.com/564x/6e/6e/89/6e6e89fa0d4f60cf2ef722f66fe90d1e.jpg' },
  { id: 14, imageUrl: 'https://i.pinimg.com/564x/82/f6/39/82f6395b132546fb2b9f50c6b59a6e34.jpg' },
  { id: 15, imageUrl: 'https://i.pinimg.com/564x/74/52/5d/74525d9c4f07d0e83ef3acb5e1c4e26a.jpg' },
  { id: 16, imageUrl: 'https://i.pinimg.com/564x/67/a0/ad/67a0ad5e992bea57e363226c27955463.jpg' },
  { id: 17, imageUrl: 'https://i.pinimg.com/564x/07/7a/3a/077a3ade2adb734553750d80ee4de445.jpg' },
  { id: 18, imageUrl: 'https://i.pinimg.com/564x/90/8c/ef/908cef893652234073238ef535233e99.jpg' },
  { id: 19, imageUrl: 'https://adornmentevents.com/wp-content/uploads/ae-gallery-urban-12.jpg' },
  { id: 20, imageUrl: 'https://adornmentevents.com/wp-content/uploads/gallery2023-urban-28.jpg' },
  { id: 21, imageUrl: 'https://adornmentevents.com/wp-content/uploads/ae-gallery-evergreen-3.jpg' },
  { id: 22, imageUrl: 'https://adornmentevents.com/wp-content/uploads/ae-gallery-boutique-73.jpg' },
  { id: 23, imageUrl: 'https://i.pinimg.com/564x/a3/62/45/a3624542997f153cf69b8ca2d537ad34.jpg' },
  { id: 24, imageUrl: 'https://i.pinimg.com/564x/22/12/d2/2212d2eadef0da68427ccc3d4eeef3b9.jpg' },
];

const EventGallery = () => {
  return (
    <div className="gallery">
      {eventsData.map((event) => (
        <div key={event.id} className="gallery-item">
          <img src={event.imageUrl} alt={`Event ${event.id}`} className="event-image" />
        </div>
      ))}
    </div>
  );
};

export default EventGallery;
