  var Tip = {};
    Tip.install = function(Vue, options) {
        let opt = {
                // 默认显示位置
                defaultType: "center",
                // 默认持续时间
                duration: "3000"
            }
            // 使用options的配置
        for (let i in options) {
            opt[i] = options[i]
        }
        Vue.prototype.$toast = (toast, type) => {
                // 如果有传type，位置则设为该type
                var chooseType = type ? type : opt.defaultType;
                // 如果页面有toast则不继续执行
                if (document.querySelector('.vue-toast')) return;
                // 1、创建构造器，定义好提示信息的模板
                let toastTip = Vue.extend({
                    template: `<div class="vue-tip tip-${chooseType}">${toast}</div>`
                });
                // 2、创建实例，挂载到文档以后的地方
                let tpl = new toastTip().$mount().$el;
                // 3、把创建的实例添加到body中
                document.body.appendChild(tpl);
                // 4.三秒后移除
                setTimeout(() => {
                    document.body.removeChild(tpl);
                }, opt.duration)
            }
            // 显示不同的位置
            ['bottom', 'top', 'center'].forEach(type => {
                Vue.prototype.$toast[type] = (tips) => {
                    return Vue.prototype.$toast(tips, type)
                }
            })
            // ==========
            // ==========
            // ==========
            // ==========
        Vue.prototype.$loading = function(tips, type) {
            var load = document.querySelector('.load-mark');
            if (type === 'close') {
                load && document.body.removeChild(load)
            } else {
                if (load) return;
                var loadTpl = Vue.extend({
                    template: `<div class="load-mark">
                    				<div class="load-box">
                    					<div class="loading">
                    						<div class="loading_leaf loading_leaf_0"></div>
                    						<div class="loading_leaf loading_leaf_1"></div>
                    						<div class="loading_leaf loading_leaf_3"></div>
                    						<div class="loading_leaf loading_leaf_4"></div>
                    						<div class="loading_leaf loading_leaf_5"></div>
                    						<div class="loading_leaf loading_leaf_6"></div>
                    						<div class="loading_leaf loading_leaf_7"></div>
                    						<div class="loading_leaf loading_leaf_8"></div>
                    						<div class="loading_leaf loading_leaf_9"></div>
                    						<div class="loading_leaf loading_leaf_10"></div>
                    						<div class="loading_leaf loading_leaf_11"></div>
                    					</div>
                    						<div class="load-content">
                    							${tips}
                    						</div>
                    					</div>
                    			</div>`
                });
                var tpl = new loadTpl().$mount().$el;
                document.body.appendChild(tpl);
            }
        };

        ['open', 'close'].forEach(function(type) {
            Vue.prototype.$loading[type] = function(tips) {
                return Vue.prototype.$loading(tips, type)
            }
        });
    }
    // 自动安装
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(Tip)
    }
    // =====
    // 需要手动安装
    module.exports = Tip;
    // module.exports = Toast;