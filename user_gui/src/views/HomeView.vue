<template>
  <div>
    <nav-bar/>
    <carousel-comp/>
  <div class="container">
    
    
    <div class="text-center">
      <h4>About gentleman.</h4>
      <hr>
      <p class="text-center">
        The Gentleman brand exists to ensure you look your best, no matter the occasion. We’re not bound by age, body type, or budget. We’re a family based business, committed to bring you custom-made clothing that fits your unique style and needs. From weddings to job interviews to everyday wear, we’ll help you look and feel your best.
      </p>
    </div>
    <br>
    <div class="items">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="https://i.postimg.cc/sXKdPScY/GTG-Baselworld-2019-gtphoto-Rolex-Datejust-16234-1024x682.jpg" class="top">
            <img src="https://i.postimg.cc/3NxMBb38/IMG-8158-1-600x600.jpg" class="bottom" alt="...">
            <div class="card-body">
              <p class="card-text">Rolex Datejust Midsize</p>
              <p style="color:red" class="card-text">$5000,00</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="https://i.postimg.cc/tCLkMwZJ/black-traditional-5-top-hat-wool-felt-7391-p.png" class="top">
            <img src="https://i.postimg.cc/vTwW5pyj/963954515-01.jpg" class="bottom" alt="...">
            <div class="card-body">
              <p class="card-text">TOP HAT Original Georgian</p>
              <p style="color:red" class="card-text">$825,00</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="https://i.postimg.cc/MT4T0htb/mens-ties-guide-cover-1080x675.jpg" class="top" alt="">
            <img src="https://i.postimg.cc/63s1j6N5/OEM-Men-s-Business-7cm-Hand-Tie-Formal-Suit-Professional-Suit-Accessories.jpg" class="bottom" alt="...">
            <div class="card-body">
              <p class="card-text">Sophisticated Tie-Set</p>
              <p style="color:red" class="card-text">$650,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>


    <div class="video">
      <iframe width="900" height="500" src="https://www.youtube.com/embed/EPllAgqnmqc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <br>
    <div class="text-center">
      <h4>Shop accessories.</h4>
      <hr>
      <p class="text-center">
        Looking for a suit that will make you look and feel like a million bucks? Look no further than [gentleman]. We're serious about making affordable, high-quality suits that will enhance your wardrobe and your confidence.
      </p>
    </div>

  </div>
    <footer-comp/>
</div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CarouselComp from '@/components/CarouselComp.vue'
import FooterComp from '@/components/FooterComp.vue'

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    NavBar,
    CarouselComp,
    FooterComp
    
   
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Noto+Sans:wght@300&family=Poppins:wght@400;500;600;700&family=Work+Sans:wght@300&display=swap');
  *{
    font-family:'Poppins', Courier, monospace ;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  about p{
    word-wrap: initial;
  }
  .images img{
    margin-top: 12rem;
    width: 18rem;
    height:20rem;
    object-fit: cover;
    margin-bottom: 5rem; 
    margin-left: .85rem;
  } 
  .video{
    margin-top: 2rem;
    justify-self: center;
    margin-left: 1rem;
  }
  .items{
    margin:10rem;
  }
  .card{
    margin-top: 12rem;
    width: 18rem;
    height:20rem;
    object-fit: cover;
    box-shadow: inset;
    border: none !important;
    margin: 0.3rem;
    
  }
  .card img{
    height: 15rem;
    object-fit: cover;
  }
  .footer{
    position: absolute;
    margin-top: 25rem;
  }
  .card:hover{
    box-shadow: 0 10px 12px -7px rgba(171, 171, 171, 1);
  }
   .bottom{
    opacity: 0;
    position:absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.4s ease-out;
    width: 100%;
   }
   .bottoms{
    opacity: 0;
    position:absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.4s ease-out;
    width: 100%;
  }
  .card:hover .bottom{
    opacity: 1;
    z-index: 0;
  }
  .text-center{
    width: 80%;
    margin-left:7rem;
    margin-top: 5rem;
  }
  @media (width <1400px) {
    .position-absolute{
      display: none;
    }
    .video{
      display:none;
    }
    .text-center{
      width: 80%;
      margin-left:1rem;
      margin-top: 5rem;
      
    }
    .card{
      margin: 5rem;
    }
    .items{
      width:100%;
    }
  }


</style>
