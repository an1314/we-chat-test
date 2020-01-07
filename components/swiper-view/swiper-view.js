// components/swiper-view/swiper-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menus: {
      type: Array,
      value: [
        [{
          icon: 'iconxitongguanli'
        },{
          icon: 'iconyaoshiguanli'
        },{
          icon: 'iconshujujiashicang'
        },{
          icon: 'iconkaoqinguanli'
        },{
          icon: 'iconshishichufangguanli'
        },{
          icon: 'iconchuliyichang'
        },{
          icon: 'iconyaodianguanli'
        },{
          icon: 'iconlenglianguanli'
        }],
        [{
          icon: 'icondayin'
        }]
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: false,
    duration: 500,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(val) { 
      console.log('aa', val)
    }
  }
})