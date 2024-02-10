import React from 'react'
import ProductWidget from './ProductWidget'

const NewProducts = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
            {/* <!-- section title --> */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">New Products</h3>
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
      </div>
    </div>
  )
}

export default NewProducts
