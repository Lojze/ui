import icon from './Icon/index'

// 字体样式
import '../style/fonts/iconfont'

const components = {
    icon
};
let z = {
    install(Vue) {
        Object.keys(components).forEach(name =>{
            Vue.components(name,components[name])
        })
    }
}
export default z;
export {
    icon
}


