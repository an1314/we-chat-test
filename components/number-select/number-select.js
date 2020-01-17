// components/number-select/number-select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    reduce(){
      this.data.num && (this.setData({ num: this.data.num -1})) && this.triggerEvent('change', this.data.num);
    },
    add(){
      this.setData({ num: this.data.num + 1 });
      this.triggerEvent('change', this.data.num)
    }
  }
})
