<template>
    <div id="app">
        <button @click="openDefault">默认</button>
        <button @click="openTop">头部</button>
        <button @click="openBottom">尾部</button>
        <button @click="openloading">加载</button>
    </div>
</template>
<script>
export default {
    methods: {
        openDefault() {
            this.$toast("默认")
        },
        openTop() {
            this.$toast.top('头部')
        },
        openBottom() {
            this.$toast.bottom('尾部')
        },
        openloading() {
            this.$loading('加载中')
            setTimeout(() => {
                this.$loading.close()
            }, 1000)
        }
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
