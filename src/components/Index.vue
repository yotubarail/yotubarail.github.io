<template>
  <div class="hello">
    <header>
     <nav>
       <ul>
         <li><a href="#" v-scroll-to="'#about'">About</a></li>
         <li><a href="#" v-scroll-to="'#works'">Works</a></li>
         <li><a href="#" v-scroll-to="'#contact'">Contact</a></li>
       </ul>
     </nav>
   </header>

   <main>
     <section id="firstview">
       <div class="js-name animated fadeInLeft">
         <h1>Shota<br>
         Takinami</h1>
       </div>
     </section>

     <section id="about">
      <h1>About</h1>
      <div class="content">
        <div id="myImage">
          <img src="../img/nami.png" alt="似顔絵">
        </div>
        <div id="profile">
          <h2>滝浪 翔太</h2>
          <p>静岡市出身</p>
          <p>プログラミングや趣味についての<a href="https://yotubarail.work" target="_blank">ブログ</a>をちょこちょこ書いています</p>
          <div id="skill">
            <h3>スキル</h3>
            <p>HTML,CSS,JavaScript(jQuery,Vue.js),Swift</p>
          </div>
        </div>
      </div>
      <div id="link">
        <a href="https://twitter.com/yotubarail" target="_blank"><img src="../img/twittericon.png" alt="Twitter"></a>
        <a href="https://github.com/yotubarail" target="_blank"><img src="../img/githubicon.png" alt="GitHub"></a>
        <a href="https://codepen.io/yotubarail" target="_blank"><img src="../img/codepenlogo.png" alt="CodePen"></a>
      </div>
     </section>

     <section id="works">
       <h1>Works</h1>
       <div class="content">
        <div class="list">
          <a href="https://yotubarail.github.io/swiftevent/swiftevent.html" target="_blank"><img src="../img/work3.png" alt="Swiftevent"></a>
          <p>Swiftevent</p>
        </div>
         <div class="list">
           <a href="http://shinsengumi-system.com/LP/index.html" target="_blank"><img src="../img/work1.png" alt="新洗組LP"></a>
           <p>新洗組LP</p>
         </div>
         <div class="list">
           <a href="https://apps.apple.com/jp/app/カンタン受付/id1537911799" target="_blank"><img src="../img/work2.png" alt="カンタン受付"></a>
           <p>カンタン受付</p>
         </div>
         <!-- <div class="list">
           <a href="#"><img src="img/work4.png" alt="ららマジ聖地巡礼アプリ"></a>
           <p>ららマジ聖地巡礼アプリ</p>
         </div> -->
       </div>
     </section>

     <section id="contact">
       <h1>Contact</h1>
       <div class="content">
         <p>お気軽にご連絡ください</p>
         <a href="mailto:313kei@gmail.com">313kei@gmail.com</a>
       </div>
     </section>
   </main>

   <footer>
     <small>&copy; 2020 Shota Takinami </small>
   </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import '../css/index.css';
</style>
