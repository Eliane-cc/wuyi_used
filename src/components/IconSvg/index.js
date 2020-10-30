import IconSvg from './IconSvg'

// 添加install方法
IconSvg.install = function(Vue) {
  Vue.component(IconSvg.name, IconSvg);
};

export default IconSvg;