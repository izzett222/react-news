import { Link } from "react-router-dom";
import Slider from "react-slick";
import arrow from "../assets/arrow.svg";
import { useState } from "react";
export default function Carousel({ articles }) {
  const [sliderRef, setSliderRef] = useState(null);
  console.log(sliderRef, "++++++++++-----------------------------");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const goPrev = () => {
    console.log("working");
    sliderRef?.slickPrev();
  };
  const goNext = () => {
    console.log("working");
    sliderRef?.slickNext();
  };
  console.log(articles.length, "===================");
  return (
    <div className="w-full flex">
      <div className="flex-1 max-w-[712px]">
        <div className="w-full overflow-hidden max-w-full">
          <Slider ref={setSliderRef} {...settings}>
            {articles.map((article) => (
              <div key={article.id} className="">
                <div className="w-[712px] h-[453px] relative">
                  <img
                    src={article.urlToImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <Link
                    to={`/article/${article.id}`}
                    className="block absolute bottom-0 -left-[1px] z-10 bg-white pr-[18px] w-[332px] h-[178px] pl-[18px]"
                  >
                    <p className="mt-4 mb-2.5">
                      {article.source.name} - {article.publishedAt.slice(0, 10)}
                    </p>
                    <p className="text-[30px] font-semibold leading-[1.1]">
                      {article.title.slice(0, 50) + "..."}
                    </p>
                  </Link>
                  <div className="absolute bottom-4 z-10 right-4 flex gap-4">
                    <button
                      className="bg-white p-3 rounded-full"
                      onClick={goPrev}
                    >
                      <img src={arrow} className="rotate-180" alt="" />
                    </button>
                    <button
                      className="bg-white p-3 rounded-full"
                      onClick={goNext}
                    >
                      <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
