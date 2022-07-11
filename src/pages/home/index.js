import React from 'react';
import Proimg1 from '../../images/auction-1.jpg';
import Proimg2 from '../../images/auction-2.jpg'
import Proimg3 from '../../images/auction-3.jpg'
import Proimg4 from '../../images/auction-4.jpg'
import SimpleSlider from '../../components/slider';
function Home() {
  return (
    <>
    <SimpleSlider/>
    <div className='main-content'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <div class="card">
          <img src={Proimg1} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
          <div class="card">
          <img src={Proimg2} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
          <div class="card">
          <img src={Proimg3} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
          <div class="card">
          <img src={Proimg4} class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Home

