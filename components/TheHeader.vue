<template>
    <header class="header-section">
        <div class="container">
            <div class="inner-header">
                <div class="row">
                    <div class="col-md-3 d-flex align-items-center">
                        <div class="logo">
                            <a href="/">
                                <img src="~/assets/images/logo.png" alt />
                            </a>
                        </div>
                    </div>
                    <div class="mobile-menu">
                        <div class="icon-menu">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                        <div v-for="(item, index) in menu" :key="item + index">
                            <ul v-if="item.submenu.length">
                                <li>
                                    <h5>{{ item.title }}</h5>
                                </li>
                                <li
                                    v-for="(sub, i) in item.submenu"
                                    :key="sub + i"
                                    class="product-menu-item"
                                >
                                    <NuxtLink :to="`/${item.url}/${sub.url}`">{{
                                        sub.title
                                    }}</NuxtLink>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                    <div class="text-right col-md-9">
                        <div class="row nav-right ml-0 mr-0">
                            <div class="col-sm-3"></div>
                            <div class="col-sm-5 text-left ml-3">
                                <div>
                                    <a href="#">
                                        <i class="fa fa-home"></i>
                                        77 Nguyễn Tử Nha, Phường 12, Quận Tân
                                        Bình, TP.HCM
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i class="fa fa-calendar"></i>
                                        Thời gian làm việc: từ T2-T7: 7h30 đến
                                        18h
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-3 text-left ml-3">
                                <div>
                                    <a href="#">
                                        <i class="fa fa-phone"></i>
                                        09888.56.441
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i class="fa fa-envelope"></i>
                                        gicungin@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-item">
            <div class="container">
                <nav class="nav-menu justify-content-lg-between w-100">
                    <ul>
                        <li class>
                            <a id="category" href="#"
                                >DANH MỤC SẢN PHẨM <i class="fa fa-bars"></i
                            ></a>
                            <div class="dropdown">
                                <div
                                    v-for="(item, index) in menu"
                                    :key="item + index"
                                >
                                    <ul v-if="item.submenu.length">
                                        <li>
                                            <h5>{{ item.title }}</h5>
                                        </li>
                                        <li
                                            v-for="(sub, i) in item.submenu"
                                            :key="sub + i"
                                            class="product-menu-item"
                                        >
                                            <NuxtLink
                                                :to="`/${item.url}/${sub.url}`"
                                                >{{ sub.title }}</NuxtLink
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li v-for="(item, index) in menu" :key="item + index">
                            <NuxtLink :to="`/${item.url}`">{{
                                item.title
                            }}</NuxtLink>
                            <ul
                                v-if="item.submenu.length"
                                class="dropdown"
                                style="display: block"
                            >
                                <li
                                    v-for="(sub, i) in item.submenu"
                                    :key="sub + i"
                                    class="product-menu-item"
                                >
                                    <NuxtLink :to="`/${item.url}/${sub.url}`">{{
                                        sub.title
                                    }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menu: this.$store.state.menu,
        }
    },
    mounted() {},
}
</script>
<style lang="scss">
.header-section {
    .inner-header {
        .text-right {
            @media screen and (max-width: 992px) {
                display: none;
            }
        }
    }
    .nav-item {
        @media screen and (max-width: 992px) {
            display: none;
        }
    }
    .mobile-menu {
        background-color: #0e8fe5;
        position: absolute;
        inset: 0;
        overflow-y: auto;
        z-index: 1000;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px 0;
        .icon-menu {
            position: fixed;
            top: 1%;
            right: 5%;
            font-size: 30px;
        }
        h5 {
            font-size: 18px;
            margin-top: 15px;
            color: #fff;
        }
        a {
            color: #fff;
        }
    }
}
</style>
