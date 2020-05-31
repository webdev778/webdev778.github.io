$(document).ready(function(){

  // MODAL
  var modalText = {
    africoin: {
      title: 'Africoin',
      tag: 'Africoin',
      detail: 'Africoin is an e-commerce platform providing electronic voucher solution using a crypto token for between manufacturers and retailers and customers. ',
      link: '#'
    },
    blocktoken: {
      title: 'Blocktoken',
      tag: 'Blocktoken',
      detail: 'Blocktoken is a smart contract and token platform, fully white-labeled that user can easily create/manage/deploy ERC20 token onto mainnet/testnet with user interface quickly',
    },
    peatio: {
      title: 'Peatio',
      tag: 'Peatio',
      detail: 'Peatio is an open-source cryptocurrency exchange trading platform built with Ruby on Rails + Coffeescript',
      link: 'https://www.chulwonexchange.com/'
    },
    elmhurst: {
      title: 'Elmhurst',
      tag: 'Elmhurst',
      detail: 'Elmhurst is a bank platform that provides financial services exclusively to nonprofits and their affiliates. ',
      link: 'https://elmhur.st/'
    },
    papermache: {
      title: 'Papermache',
      tag: 'Papermache',
      detail: 'Papermache is a network of community platform that user can easily get feedback from the commnity',
      link: 'https://papermache.fyi/'
    },
    shivyog: {
      title: 'Shivyog',
      tag: 'Shivyog',
      detail: 'Upgraded to v2 for better UI/UX with a map-based ui, the stack is Ruby on Rails + VueJS',
      link: 'https://shivyog.com/'
    },
    stillpointspaces: {
      title: 'Stillpointspaces',
      tag: 'Stillpointspaces',
      detail: 'A Invoice Management Platform, the stack was Ruby on Rails for the backend, I\'ve built new invoice platform with NodeJS/Express + React and built Restful API with RoR Grape to connect with nodejs',
      link: 'https://www.stillpointspaces.com/'
    },
    vertex: {
      title: 'Vertex',
      tag: 'Vertex',
      detail: 'An Asset Management Platform, which user is able to easily search pdf files with their content on their mobile. Dashboard + Mobile App, the stack was Ruby on Rails for the backend, the frontend was Angular + JQuery',
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      console.log(id);
      $(this).css({

        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
