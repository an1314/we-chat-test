// components/swiper-column/swiper-column.js
Component({
  /**
   * 组件的属性列表
   */

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    menus: {
      type: Array,
      observer: function (menus){
        // console.log(menus)
        // let query = wx.createSelectorQuery().in(this);
        // query.selectAll('.menu-title').boundingClientRect();

        // query.exec((rect) => {
        //   console.log(rect)
        // })
      },
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 'cat',
    currentTab: 'cat',
    fixedItem: 'cat',
    // 记录标题位置
    menuPosition: []
  },


  /**
   * 组件的方法列表
   */
  methods: {
    switchNav: function (e) {
      var page = this;
      var id = e.target.id;
      page.setData({
        active: id,
        fixedItem: id,
      });
    },
    refreshView(){
      // 在组件实例进入页面节点树时执行
      let query = wx.createSelectorQuery().in(this);
      query.selectAll('.menu-title').boundingClientRect();

      query.exec((rect) => {
        this.setData({
          menuPosition: rect[0]
        })
      })
    },
    onScroll(event) {
      let top = event.detail.scrollTop
      console.log(event.detail.scrollTop)
      let index = this.data.menuPosition.findIndex(item => item.top -50 >= top);
      console.log('index', index)
      let currentTab = this.data.menuPosition[index-1];
      let tabId = currentTab && currentTab.id.split('-')[0] || this.data.menuPosition[0].id.split('-')[0];
      console.log(tabId)
      if (tabId != this.data.active){
        this.setData({
          fixedItem: tabId,
          active: tabId
        })
      }
      // 获取所有标题元素
      // let query = wx.createSelectorQuery().in(this);
      // query.selectAll('.menu-title').boundingClientRect();

      // query.exec((rect) => {
      //   try {
      //     rect[0].forEach(item => {
      //       if (item.top < 20 && item.top > -20 && item.id != this.data.active+'-item') {
      //         this.setData({
      //           fixedItem: item.id.split('-')[0],
      //           active: item.id.split('-')[0]
      //         })
      //         throw new Error("找到节点！");
      //       }
      //     })
      //   } catch (e) {}
      // })

    }
  }
})