---
layout: page
title: Photos
permalink: /photos/
description: This is a collection of some of my favorite pictures.
nav: true
nav_order: 6
---

<style>
  .masonry-grid {
    column-count: 3;
    column-gap: 1rem;
    width: 100%;
  }
  .masonry-item {
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
    /* Prevents photo/caption from splitting across columns */
    break-inside: avoid; 
  }
  @media (max-width: 992px) {
    .masonry-grid { column-count: 2; }
  }
  @media (max-width: 576px) {
    .masonry-grid { column-count: 1; }
  }
</style>

<div class="masonry-grid">
  <div class="masonry-item">{% include figure.liquid path="assets/img/ets.jpg" caption="Tristan, Surya, and I" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/banquet.jpg" caption="KCMC Award" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/sumsa.JPG" caption="SUMSA 2024" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/date.jpeg" caption="Ashtyn" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/snowgame.jpeg" caption="" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/fubini.jpeg" caption="" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/fubini2.jpeg" caption="Fubini" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/snowflake.jpeg" caption="Snowflake" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/weirdsnowflake.jpeg" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/helping.jpeg" caption="Snowflake helping me study" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/snf.jpeg" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/neo.JPEG" caption="Neo" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/deca.jpeg" caption="DECA SCDC 2023" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/icdc.JPG" caption="DECA ICDC 2023" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/senior1.JPG" caption="Senior pictures" class="img-fluid rounded z-depth-1" %}</div>
  <div class="masonry-item">{% include figure.liquid path="assets/img/senior2.JPG" caption="" class="img-fluid rounded z-depth-1" %}</div>
</div>

<!-- *You can add more images by repeating the include block above.* -->
