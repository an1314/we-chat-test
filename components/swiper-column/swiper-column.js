// components/swiper-column/swiper-column.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menus: {
      type: Array,
      value: [{
        label: '猫粮',
        value: 'cat',
        list: [{
          label: '猫粮',
          url: ''
        }]
      }, {
        label: '狗粮',
        value: 'dog',
        list: [{
          label: '狗粮',
          url: ''
        }]
      }, {
        label: '鼠粮',
        value: 'mouse',
        list: [{
          label: '鼠粮',
          url: ''
        }]
      }, {
        label: '猪饲料',
        value: 'pig',
        list: [{
          label: '猪饲料',
          url: ''
        }]
      }, {
        label: '鸡饲料',
        value: 'jsl',
        list: [{
          label: '鸡饲料',
          url: ''
        }]
      }, {
        label: '马饲料',
        value: 'msl',
        list: [{
          label: '马饲料',
          url: ''
        }]
      }, {
        label: '牛饲料',
        value: 'nsl',
        list: [{
          label: '牛饲料',
          url: ''
        }]
      }, {
        label: '羊饲料',
        value: 'ysl',
        list: [{
          label: '羊饲料',
          url: ''
        }]
      }, {
        label: '龙饲料',
        value: 'lsl',
        list: [{
          label: '龙饲料',
          url: ''
        }]
      }, {
        label: '未知',
        value: 'wz',
        list: [{
          label: '未知',
          url: ''
        }]
        }, {
          label: '未知1',
          value: 'wz1',
          list: [{
            label: '未知1',
            url: ''
          }]
        }, {
          label: '未知2',
          value: 'wz2',
          list: [{
            label: '未知2',
            url: ''
          }]
        }, {
          label: '未知3',
          value: 'wz3',
          list: [{
            label: '未知3',
            url: ''
          }]
        }, {
          label: '未知4',
          value: 'wz4',
          list: [{
            label: '未知4',
            url: ''
          }]
        }, {
          label: '未知5',
          value: 'wz5',
          list: [{
            label: '未知5',
            url: ''
          }]
        }, {
          label: '未知6',
          value: 'wz6',
          list: [{
            label: '未知6',
            url: ''
          }]
        }, {
          label: '未知7',
          value: 'wz7',
          list: [{
            label: '未知7',
            url: ''
          }]
        }, {
          label: '未知8',
          value: 'wz8',
          list: [{
            label: '未知8',
            url: ''
          }]
        }, {
          label: '未知9',
          value: 'wz9',
          list: [{
            label: '未知9',
            url: ''
          }]
        }, {
          label: '未知10',
          value: 'wz10',
          list: [{
            label: '未知10',
            url: ''
          }]
        }, {
          label: '未知11',
          value: 'wz11',
          list: [{
            label: '未知11',
            url: ''
          }]
        }]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 'cat',
    currentTab: 'cat'
  },


  /**
   * 组件的方法列表
   */
  methods: {
    switchNav: function(e) {
      var page = this;
      var id = e.target.id;
      if (this.data.currentTab == id) {
        return false;
      } else {
        page.setData({
          currentTab: id
        });
      }
      page.setData({
        active: id
      });
    },
  }
})