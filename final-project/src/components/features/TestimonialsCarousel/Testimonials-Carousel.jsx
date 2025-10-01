import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials-Carousel.css';



console.log('Swiper modules loaded:', { Pagination, Navigation, Autoplay });

const testimonialsData = [
  {
    name: 'Emily',
    photo: '/images/emily-dog.jpg',
    text: 'Pawfect Stay is amazing! My dog was so happy!',
  },
  {
    name: 'James',
    photo: '/images/james-cat.jpg',
    text: 'The team took great care of my cat. Highly recommend!',
  },
  {
    name: 'Sophia',
    photo: '/images/sophia-cat.jpg',
    text: 'Best pet care service I have used. Thank you!',
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="testimonials-carousel">
      <h2>What Our Customers Say</h2>
      <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20} /* 卡片之间的间距 */
          slidesPerView={1} /* 一次只显示一张卡片 */
          loop={true} /* 循环滚动 */
          className="swiper-container"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={testimonial.photo} alt={`${testimonial.name}'s pet`} />
                <p>{testimonial.text}</p>
                <h4>- {testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
