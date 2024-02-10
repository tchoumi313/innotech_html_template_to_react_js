/* eslint-disable no-unused-vars */
import { useState } from 'react'
//import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HotDeal from './components/HotDeal'
import NavBar from './components/NavBar'
import NewProducts from './components/NewProducts'
import NewsLetter from './components/NewsLetter'
import TopSelling from './components/TopSelling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <NavBar/>
    <div className="section">
			
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					{/* <!-- shop --> */}
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop01.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Laptop<br/>Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					{/* <!-- /shop --> */}

					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop03.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Accessories<br/>Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					

					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop02.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Cameras<br/>Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
    <NewProducts/>
    <HotDeal/>
    <TopSelling/>
    <NewsLetter/>
  
    <Footer/>
    </>
  )
}

export default App
