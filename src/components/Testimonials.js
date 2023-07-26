import React from 'react';

const Testimonials = () => {
  // Replace this with your testimonials/recommendations
  const testimonialsData = [
    {
      name: 'Client/Colleague Name',
      content: 'Testimonial or recommendation content.',
    },
    // Add more testimonial objects as needed
  ];

  return (
    <section id="testimonials" className="section">
      <h2>Testimonials/Recommendations</h2>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
