<template>
  <div class="home">
    <nav-bar/>
    <carousel-comp/>
    <div class="position-absolute top-100 start-50 translate-middle">
      <h4>About gentleman.</h4>
      <hr>
      <p class="text-center">
        The Gentleman brand exists to ensure you look your best, no matter the occasion. We’re not bound by age, body type, or budget. We’re a family based business, committed to bring you custom-made clothing that fits your unique style and needs. From weddings to job interviews to everyday wear, we’ll help you look and feel your best.
      </p>
    </div>
    <br>
    <div class="position-absolute">
      <img src="https://i.postimg.cc/13NpGBJP/kingsmncharclstrpdbsuitlk.jpg" class="float-start" alt="...">
      <img src="https://i.postimg.cc/5NFGTGVT/Rolex-Oyster-Perpetual-GMT-Master-II-Ref-126718-GRNR-5.jpg" class="float-end" alt="...">
      <img src="https://i.postimg.cc/VL8tjrDT/opumo-1-19.jpg" class="float-end" alt="...">
      <img src="https://i.postimg.cc/K8vrX3XV/Eggsy-Kingsman-Tuxedo-Bespoke-To-Measure-Orange-Velvet-Tuxedo-by-Made-Suits-Singapore-Tailor-Made-Su.jpg" class="float-end" alt="...">
      <img src="https://i.postimg.cc/Qtqq7QcX/640px-Bowler-hat-Vienna-mid-20th-century.jpg" class="float-end" alt="...">
    </div>

    <div class="video">
      <iframe width="900" height="500" src="https://www.youtube.com/embed/EPllAgqnmqc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <br>
    <div class="position-absolute start-50 translate-middle mt-500">
      <h4>Shop accessories.</h4>
      <hr>
      <p class="text-center">
        Looking for a suit that will make you look and feel like a million bucks? Look no further than [gentleman]. We're serious about making affordable, high-quality suits that will enhance your wardrobe and your confidence.
      </p>
    </div>
    <div class="items">
      <div class="card float-end" style="width: 18rem;">
        <img src="https://i.postimg.cc/3NxMBb38/IMG-8158-1-600x600.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Rolex Datejust Midsize</p>
          <p style="color:red" class="card-text">$5000,00</p>
        </div>
      </div>
      <div class="card float-end" style="width: 18rem;">
        <img src="https://i.postimg.cc/vTwW5pyj/963954515-01.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">TOP HAT Original Georgian</p>
          <p style="color:red" class="card-text">$825,00</p>
        </div>
      </div>
      <div class="card float-end" style="width: 18rem;">
        <img src="https://i.postimg.cc/63s1j6N5/OEM-Men-s-Business-7cm-Hand-Tie-Formal-Suit-Professional-Suit-Accessories.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Sophisticated Tie-Set</p>
          <p style="color:red" class="card-text">$650,00</p>
        </div>
      </div>
      <div class="card float-end" style="width: 18rem;">
        <img src="https://i.postimg.cc/FRh2Zsv5/best-leather-gloves.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text"> Black Winter Leather gloves</p>
          <p style="color:red" class="card-text"> $400,00</p>

        </div>
      </div> 
    </div>
    <div class="footer">
      <footer-comp/>
    </div>
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
  }
  .position-absolute{
    margin-top: 5rem;
  }
  about p{
    word-wrap: initial;
  }
  .position-absolute img{
    margin-top: 12rem;
    width: 18rem;
    height:20rem;
    object-fit: cover;
    margin-bottom: 5rem; 
    margin-left: .85rem;
  } 
  .video{
    margin-top: 40rem;
  }
  .items{
    margin:10rem
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

</style>
