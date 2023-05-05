import { Link } from "react-router-dom";
import { useGetSourcesQuery } from "../features/api/apiSlice";
import Slider from "react-slick";
import arrow from "../assets/arrow.svg";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Source() {
  const { data, isError, isLoading } = useGetSourcesQuery();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true
  };
  if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">No article found</h2>
      </div>
    );
  }
  return (
    <div className="border-b-[0.6px] border-b-[#C9C8B2] flex pb-2.5 mb-4">
      <img src={arrow} alt="" className="rotate-180 -ml-2" />
      <div className="flex-1 max-w-[97%]">
        <div className="w-full">
        <Slider {...settings}>

          {data?.map((source) => (
            <div key={source.id}>
              <Link
                
                to={`/source/${source.id}`}
                className="hover:underline w-max mx-2.5 inline-block"
              >
                {source.name}
              </Link>
            </div>
          ))}
        </Slider>
        </div>

      </div>

      <img src={arrow} alt="" />
    </div>
  );
}
