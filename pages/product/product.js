// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    setTimeout(() => {
      this.setData({
        menus: [{
          label: '猫粮',
          value: 'cat',
          list: [{
            label: '猫粮',
            url: ''
          }, {
            label: '猫粮',
            url: ''
          }, {
            label: '猫粮',
            url: ''
          }, {
            label: '猫粮',
            url: ''
          }, {
            label: '猫粮',
            url: ''
          }, {
            label: '猫粮',
            url: ''
          }, {
            label: '猫粮',
            url: ''
          }]
        }, {
          label: '狗粮',
          value: 'dog',
          list: [{
            label: '狗粮',
            url: ''
          }, {
            label: '狗粮',
            url: ''
          }, {
            label: '狗粮',
            url: ''
          }, {
            label: '狗粮',
            url: ''
          }, {
            label: '狗粮',
            url: ''
          }, {
            label: '狗粮',
            url: ''
          }]
        }, {
          label: '鼠粮',
          value: 'mouse',
          list: [{
            label: '鼠粮',
            url: ''
          }, {
            label: '鼠粮',
            url: ''
          }, {
            label: '鼠粮',
            url: ''
          }, {
            label: '鼠粮',
            url: ''
          }]
        }, {
          label: '猪饲料',
          value: 'pig',
          list: [{
            label: '猪饲料',
            url: ''
          }, {
            label: '猪饲料',
            url: ''
          }, {
            label: '猪饲料',
            url: ''
          }, {
            label: '猪饲料',
            url: ''
          }, {
            label: '猪饲料',
            url: ''
          }]
        }, {
          label: '鸡饲料',
          value: 'jsl',
          list: [{
            label: '鸡饲料',
            url: ''
          }, {
            label: '鸡饲料',
            url: ''
          }, {
            label: '鸡饲料',
            url: ''
          }, {
            label: '鸡饲料',
            url: ''
          }, {
            label: '鸡饲料',
            url: ''
          }, {
            label: '鸡饲料',
            url: ''
          }, {
            label: '猪饲料',
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
      }, () => {
        this.selectComponent("#swiper-column").refreshView();
      })
    }, 0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})