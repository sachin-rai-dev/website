
import './App.css';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { slidedata } from './lib';
import Button from './components/button';
import Footer from './components/footer';
import Form from './components/form';
import Homesa from './components/home-sa';
import Homesb from './components/home-sb';
import Homesc from './components/home-sc';
import Homesd from './components/home-sd';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';


function App() {


  return (
    <div>
     
        <Nav></Nav>
        <Homesa/>
        <Form/>
        <Homesd/>
        <Homesb/>
        <Homesc/>

        <div className=''>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
        slidedata.map((val,i)=>
        

          <SwiperSlide key={i}>
          <div className='slid-card'>
            <div className='slid-cardmain'>
              <div className='slid-cardmain-1'>
                <img src={val.src} height={"100px"} width={"100px"} alt=''/>
                <h3>{val.h3}</h3>
              </div>
              
              <p>
              <div><h1 style={{ fontSize: '6rem' }}>,,</h1></div>
                {val.para}
              </p>
            </div>
          </div>
        </SwiperSlide>


        )
      }

      </Swiper>

        </div>

        <Button/>
        <div className='homesdboxmain row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xxl-4 row-gap-5 column-gap-1 gx-0 clintscor white-bg with-100 py-5'>
          <div className='col p-2 text-center '>
            <h1 className='colorh1'>Project Done</h1>
            <h1>165+</h1>
          </div>

          <div className='col p-2 text-center '>
          <h1 className='colorh1'>happy clints</h1>
          <h1>500+</h1>
          </div>

          <div className='col p-2 text-center '>
          <h1 className='colorh1'>success score</h1>
          <h1>99%</h1>
          </div>
        </div>
        <Form titel={"drop as a line!"}/>
        <Footer/>
        
    </div>
  );
}

export default App;
