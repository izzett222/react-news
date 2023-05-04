import { Link } from "react-router-dom";
import Slider from "react-slick";
export default function Carousel({ articles }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  console.log(articles.length, "===================");
  return (
    <div className="w-full">
      <div className="w-full max-w-[712px]">
        <Slider {...settings}>
          {articles.map((article) => (
            <div key={article.id} className="w-full">
                <div className="w-full h-[453px] relative">
                    <img src={article.urlToImage} alt="" className="absolute inset-0 h-full w-full" />
                    <Link to={`/article/${article.id}`} className="block absolute bottom-0 -left-[1px] z-10 bg-white w-[332px] h-[178px]">
                        <span>{article.source.name} - {article.publishedAt.slice(0, 10)}</span>
                        p
                    </Link>
                </div>
              <div className="">{article.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
