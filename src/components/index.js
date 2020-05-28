import icon from './Icon/index'
import button from './Button/index'

// 总样式
import '../style/index.scss'

// 图标
import '../style/fonts/iconfont'

const components = {
    icon,
    button
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
    icon,
    button
}


