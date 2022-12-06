import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

// import required modules
import { Pagination, Autoplay, Mousewheel } from "swiper";

const Testimonial = () => {
    SwiperCore.use([Autoplay])
    return (

        <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={8}
            autoplay={{ delay: 2500 }}
            pagination={true}
            mousewheel={true}
            className="mySwiper"
            breakpoints={{
                640: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            modules={[Pagination, Autoplay, Mousewheel]}

        >
            <section>
                <div className="mx-auto w-4/5-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="swiper-container !overflow-hidden">
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <blockquote className="bg-gray-100 p-8">
                                        <div className="flex items-center">
                                            <img
                                                alt="Dog"
                                                src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                                className="h-16 w-16 rounded-full object-cover"
                                            />

                                            <div className="ml-4 text-sm">
                                                <p className="font-medium">Bark Dagleish</p>
                                                <p className="mt-1">Head of Barketing</p>
                                            </div>
                                        </div>

                                        <p className="relative mt-4 text-gray-500">
                                            <span className="text-xl">&ldquo;</span>

                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                            assumenda officiis sit amet itaque eveniet accusantium corporis
                                            tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                            repellat, commodi in esse quisquam.

                                            <span className="text-xl">&rdquo;</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <blockquote className="bg-gray-100 p-8">
                                        <div className="flex items-center">
                                            <img
                                                alt="Dog"
                                                src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                                className="h-16 w-16 rounded-full object-cover"
                                            />

                                            <div className="ml-4 text-sm">
                                                <p className="font-medium">Bark Dagleish</p>
                                                <p className="mt-1">Head of Barketing</p>
                                            </div>
                                        </div>

                                        <p className="relative mt-4 text-gray-500">
                                            <span className="text-xl">&ldquo;</span>

                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                            assumenda officiis sit amet itaque eveniet accusantium corporis
                                            tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                            repellat, commodi in esse quisquam.

                                            <span className="text-xl">&rdquo;</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <blockquote className="bg-gray-100 p-8">
                                        <div className="flex items-center">
                                            <img
                                                alt="Dog"
                                                src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                                className="h-16 w-16 rounded-full object-cover"
                                            />

                                            <div className="ml-4 text-sm">
                                                <p className="font-medium">Bark Dagleish</p>
                                                <p className="mt-1">Head of Barketing</p>
                                            </div>
                                        </div>

                                        <p className="relative mt-4 text-gray-500">
                                            <span className="text-xl">&ldquo;</span>

                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                            assumenda officiis sit amet itaque eveniet accusantium corporis
                                            tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                            repellat, commodi in esse quisquam.

                                            <span className="text-xl">&rdquo;</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <blockquote className="bg-gray-100 p-8">
                                        <div className="flex items-center">
                                            <img
                                                alt="Dog"
                                                src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                                className="h-16 w-16 rounded-full object-cover"
                                            />

                                            <div className="ml-4 text-sm">
                                                <p className="font-medium">Bark Dagleish</p>
                                                <p className="mt-1">Head of Barketing</p>
                                            </div>
                                        </div>

                                        <p className="relative mt-4 text-gray-500">
                                            <span className="text-xl">&ldquo;</span>

                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                            assumenda officiis sit amet itaque eveniet accusantium corporis
                                            tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                            repellat, commodi in esse quisquam.

                                            <span className="text-xl">&rdquo;</span>
                                        </p>
                                    </blockquote>

                                </div>
                            </SwiperSlide>
                        </div>

                        <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
                    </div>
                </div>
            </section>

        </Swiper >

    )
}

export default Testimonial