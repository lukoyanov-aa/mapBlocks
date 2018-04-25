data = {
    
        //Измеить code
         code: 'ru.webmens.yamap.jon',
         fields: {
             
            NAME: 'ymapJon11',
            DESCRIPTION: 'Блок добавляет Яндекс карту',
            SECTIONS: 'contacts, popular',
            PREVIEW: 'https:\/\/yamap.webmens.ru\/ruWebmens\/mapBlocks\/blocks\/block_0\/img\/logo.png',
            CONTENT: '<section class="landing-block">\n\
                        <div class="map-info">\n\
                            <div class="">\n\
                                <div class=""></div>\n\
                                <div class="">\n\
                                    <div class="">г. Краснодар</div>\n\
                                    <div class="">350089, г. Краснодар, Рождественская набережная д.3, подъезд 5, офис 92.</div>\n\
                                    <div class="landing-block-card">\n\
                                        <div class="icon icon-phone"></div>\n\
                                        <p>8-900-23-33-307</p>\n\
                                    </div>\n\
                                    <div class="landing-block-card">\n\
                                        <div class="icon icon-envelope"></div>\n\
                                        <p>hjkh@hjkhkj.hj</p>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                        <div id="map" class="g-h_450"></div>\n\
</section>'
        },
        manifest: {
              assets: {
                 css: ['https://yamap.webmens.ru/ruWebmens/mapBlocks/blocks/css/global.css', 
                     'https://yamap.webmens.ru/ruWebmens/mapBlocks/blocks/css/offcanvas.css',
                     'https://yamap.webmens.ru/ruWebmens/mapBlocks/blocks/css/style.css',
                     'https://yamap.webmens.ru/ruWebmens/mapBlocks/blocks/block_0/css/style.css'
                 ],
                 js: ['https://api-maps.yandex.ru/2.1/?lang=ru_RU',
			'https://yamap.webmens.ru/ruWebmens/mapBlocks/blocks/js/ymap.js'
                 ]
              },
              attrs: {
                '#map': [
                    {
                     name: 'Высота карты',
                     attribute: 'data-mapheight',
                     type: 'slider',
                     items:[
                         {name: 50, value: 'g-h_50'},
                         {name: 100, value: 'g-h_100'},
                         {name: 150, value: 'g-h_150'},
                         {name: 200, value: 'g-h_200'},
                         {name: 250, value: 'g-h_250'},
                         {name: 300, value: 'g-h_300'},
                         {name: 350, value: 'g-h_350'},
                         {name: 400, value: 'g-h_400'},
                         {name: 450, value: 'g-h_450'},
                         {name: 500, value: 'g-h_500'},
                         {name: 550, value: 'g-h_550'},
                         {name: 600, value: 'g-h_600'},
                         {name: 650, value: 'g-h_650'},
                         {name: 700, value: 'g-h_700'},
                         {name: 750, value: 'g-h_750'},
                         {name: 800, value: 'g-h_800'},
                         {name: 850, value: 'g-h_850'},
                         {name: 900, value: 'g-h_900'},
                         {name: 950, value: 'g-h_950'},
                         {name: 1000, value: 'g-h_1000'}
                        ],
                     value: 'g-h_450'   
                    },
                    {                    
                         type: 'text',
                         name: 'долгота центра карты',                         
                         value: '55.76',
                         attribute: 'data-mapcenterdolgota'                    
                    },
                    {                    
                         type: 'text',
                         name: 'широта центра карты',                         
                         value: '37.64',
                         attribute: 'data-mapcentershirota'                    
                    },
                    {
                     name: 'масштаб карты',
                     attribute: 'data-mapzoom',
                     type: 'slider',
                     items:[
                         {name: 1, value: 1},
                         {name: 2, value: 2},
                         {name: 3, value: 3},
                         {name: 4, value: 4},
                         {name: 5, value: 5},
                         {name: 6, value: 6},
                         {name: 7, value: 7},
                         {name: 8, value: 8},
                         {name: 9, value: 9},
                         {name: 10, value: 10},
                         {name: 11, value: 11},
                         {name: 12, value: 12},
                         {name: 13, value: 13},
                         {name: 14, value: 14},
                         {name: 15, value: 15},
                         {name: 16, value: 16}
                        ],
                     value: 9   
                    }
                ]                 
              },
              cards:{
                  '.landing-block-card':{
                      name: 'колонка'
                  }                  
              },
              nodes:{
                  '.landing-block-card p':{
                      name: 'текст колонки',
                      type: 'text'
                  },
                  '.landing-block-card .icon':{
                      name: 'иконка колонки',
                      type: 'icon'
                  }
              },
              style: {
                  '.map-info': {
                      name: 'блок инфо',
                      type: 'box'
                  },
                  '.landing-block-card p': {
                      name: 'текст колонки',
                      type: 'typo'
                  },
                  '.landing-block-card .icon': {
                      name: 'иконка колонки',
                      type: 'typo'
                  }
              }
        }
      }
