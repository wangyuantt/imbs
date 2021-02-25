/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 16:14:00 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 16:15:13
 */
// 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
// 比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
// 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
// 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
export const vueMixin = {

}