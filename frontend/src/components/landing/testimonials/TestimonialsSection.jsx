import React from 'react';
import { Quote, Star } from 'lucide-react';

/**
 * Testimonials Section: "Trusted by Placement Cells Across India"
 * Direct feature from myleadingcampus.com/training-placement/
 */
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        'We managed 150+ campus drives this season without a single missed follow-up. The application tracking and round management saved our team 300+ hours. Our placement rate jumped to 91%.',
      author: 'Prof. Anjali Sharma',
      role: 'Placement Officer',
      college: 'Sunrise Engineering College, Pune',
      rating: 5,
    },
    {
      quote:
        'The recruiter management module transformed how we engage companies. Our recruiter database grew from 80 to 340 corporate partners in one year. The live analytics dashboards are phenomenal.',
      author: 'Dr. Ramesh Iyer',
      role: 'Director',
      college: 'Heritage Institute of Technology, Chennai',
      rating: 5,
    },
    {
      quote:
        'The student feedback module gives us insights we never had before. We can now identify which companies students prefer and optimize our drive calendars accordingly. ROI was visible in month one.',
      author: 'Priya Nambiar',
      role: 'Training & Placement Head',
      college: 'Apex College of Technology, Bengaluru',
      rating: 5,
    },
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-centered">
          <span className="section-badge badge-mint">Institutional Endorsements</span>
          <h2 className="section-title">
            Trusted by Placement Cells <br />
            <span className="text-primary">Across India</span>
          </h2>
          <p className="section-description">
            Real results from institutions that automated their training and placement operations with PlaceTrack.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled" fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <div className="quote-icon-box">
                <Quote size={20} className="quote-icon" />
              </div>

              <p className="testimonial-quote">“{item.quote}”</p>

              <div className="testimonial-author-box">
                <div className="author-avatar-initials">
                  {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-role">{item.role}</p>
                  <p className="author-college">{item.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
