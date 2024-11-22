import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useContext, useRef } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { MyContext } from "../../App";

const ProductZoom = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var setting2 = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    fade: false,
    arrows: false,
  };
  return (
    <div className="product-zoom">
      <div className="productZoom position-relative">
        <div className="badge bg-primary">30%</div>
        <Slider {...setting2} className="zoomSliderBig" ref={zoomSliderBig}>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg"
              }
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_2_ee2906b3af5343189ae618be5b4cd7bb_94f09751303a40aeac2d5374cf2b19d4_master.jpg"
              }
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_3_c8664dd11dfa4ad498443d65cce89df7_b0c49b2191364e2ea97d2c4bb684f412_master.jpg"
              }
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_4_8ea34e8994384a17a951447ebd3bb385_ab7a0c2f6e8647b490efbae4bd33fafe_master.jpg"
              }
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_7_13b22f9eaa6342d08cf9d4640403bc5e_b71776d00e3641edba49ed05b7babe41_master.jpg"
              }
            />
          </div>
        </Slider>
      </div>

      <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
        <div className="item">
          <img
            src={
              "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg"
            }
            className="w-100"
            onClick={() => goto(0)}
          />
        </div>

        <div className="item">
          <img
            src={
              "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_2_ee2906b3af5343189ae618be5b4cd7bb_94f09751303a40aeac2d5374cf2b19d4_master.jpg"
            }
            className="w-100"
            onClick={() => goto(1)}
          />
        </div>

        <div className="item">
          <img
            src={
              "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_3_c8664dd11dfa4ad498443d65cce89df7_b0c49b2191364e2ea97d2c4bb684f412_master.jpg"
            }
            className="w-100"
            onClick={() => goto(2)}
          />
        </div>

        <div className="item">
          <img
            src={
              "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_4_8ea34e8994384a17a951447ebd3bb385_ab7a0c2f6e8647b490efbae4bd33fafe_master.jpg"
            }
            className="w-100"
            onClick={() => goto(3)}
          />
        </div>

        <div className="item">
          <img
            src={
              "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_7_13b22f9eaa6342d08cf9d4640403bc5e_b71776d00e3641edba49ed05b7babe41_master.jpg"
            }
            className="w-100"
            onClick={() => goto(4)}
          />
        </div>
      </Slider>
    </div>
  );
};
export default ProductZoom;
