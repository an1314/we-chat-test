// components/header-view/header-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: '我的V金'
    },
    title: {
      type: String,
      value: '23,319'
    },
    menus: {
      type: Array,
      value: [
        {
          icon: 'iconxitongguanli',
          url: '',
          label: '会员码'
        },
        {
          icon: 'iconyaoshiguanli',
          url: '',
          label: '卡包'
        },
        {
          icon: 'iconkaoqinguanli',
          url: '',
          label: '优惠券'
        },
        {
          icon: 'iconshujujiashicang',
          url: '',
          label: '神钱包'
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
