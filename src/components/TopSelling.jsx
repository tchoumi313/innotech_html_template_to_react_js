import React from "react";
import ProductWidget from "./ProductWidget";

const TopSelling = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {/* <!-- section title --> */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Top selling</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="#tab2">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /section title --> */}

          {/* <!-- Products tab & slick --> */}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                <div id="tab2" className="tab-pane fade in active">
                  <div className="products-slick" data-nav="#slick-nav-2">
                    
                    <ProductWidget
                      imgSrc="./img/product01.png"
                      category="Category"
                      productName="Product name goes here"
                      price="980.00"
                      oldPrice="990.00"
                      type={2}
                      isSale={true}
                      sale="-30%"
                      isNew={true}
                    />

                    <ProductWidget
                      imgSrc="./img/product07.png"
                      category="Category"
                      productName="Product name goes here"
                      price="980.00"
                      oldPrice="990.00"
                      type={2}
                      isSale={false}
                      isNew={true}
                    />

                    <ProductWidget
                      imgSrc="./img/product08.png"
                      category="Category"
                      productName="Product name goes here"
                      price="980.00"
                      oldPrice="990.00"
                      type={2}
                      isSale={true}
                      sale={"-30%"}
                      isNew={false}
                    />

                    <ProductWidget
                      imgSrc="./img/product09.png"
                      category="Category"
                      productName="Product name goes here"
                      price="980.00"
                      oldPrice="990.00"
                      type={2}
                      isSale={false}
                      isNew={false}
                    />

                    <ProductWidget
                      imgSrc="./img/product01.png"
                      category="Category"
                      productName="Product name goes here"
                      price="980.00"
                      oldPrice="990.00"
                      type={2}
                      isSale={false}
                      isNew={false}
                    />
                  </div>
                  <div id="slick-nav-2" className="products-slick-nav"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second elements */}
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              <div className="section-nav">
                <div id="slick-nav-3" className="products-slick-nav"></div>
              </div>
            </div>

            <div className="products-widget-slick" data-nav="#slick-nav-3">
              <div>
                <ProductWidget
                  imgSrc="./img/product07.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product08.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product09.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
              </div>

              <div>
                <ProductWidget
                  imgSrc="./img/product01.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product02.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product03.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              <div className="section-nav">
                <div id="slick-nav-4" className="products-slick-nav"></div>
              </div>
            </div>

            <div className="products-widget-slick" data-nav="#slick-nav-4">
              <div>
                <ProductWidget
                  imgSrc="./img/product04.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product05.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product06.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product07.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product08.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product09.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
              </div>
            </div>
          </div>

          <div className="clearfix visible-sm visible-xs"></div>

          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              <div className="section-nav">
                <div id="slick-nav-5" className="products-slick-nav"></div>
              </div>
            </div>

            <div className="products-widget-slick" data-nav="#slick-nav-5">
              <div>
                <ProductWidget
                  imgSrc="./img/product01.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product02.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />{" "}
                <ProductWidget
                  imgSrc="./img/product03.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
                <ProductWidget
                  imgSrc="./img/product04.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
                <ProductWidget
                  imgSrc="./img/product05.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
                <ProductWidget
                  imgSrc="./img/product06.png"
                  category="Category"
                  productName="Product name goes here"
                  price="980.00"
                  oldPrice="990.00"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <div className="section">
   
            <div className="container">
                
                

            </div>

        </div>  
 */}
    </div>
  );
};

export default TopSelling;
