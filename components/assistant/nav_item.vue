<script lang="ts">
export default defineComponent({
    name: "NavItemComponent",
    props: {
        to: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
    }
});
</script>
<template>
    <nuxt-link :to="to" class="nav-item_component black">
        <div class="img-area_nav-item">
            <img :src="imgSrc" :alt="title + '_logo'" />
        </div>
        <div class="item-info_nav-item">
            <span class="title">{{ title }}</span>
            <span class="description">{{ description }}</span>
            <nuxt-link :to="to" class="black" style="text-decoration: underline;">Start now</nuxt-link :to="to">
        </div>
    </nuxt-link>
</template>
<style lang="scss" scoped>

.desktop-app-container {
    $items-gap-value: 1.9rem;

    .nav-item_component {
        @include colors.box-shadow-2;
        border-radius: 2rem;
        background-color: colors.$surfaceColor2;
        display: flex;
        align-items: center;
        gap: $items-gap-value;
        width: calc((100% / 2) - $items-gap-value);
        height: 10rem;
        cursor: pointer;

        &:hover {
            background-color: colors.$surfaceColor5;
            scale: 1.01;
        }

        .img-area_nav-item {
            margin-left: 1rem;
            $img_size: 8.5rem;

            img {
                width: $img_size;
                height: $img_size;
            }

            width: calc($img_size / 1.2);
            height: calc($img_size / 1.2);
            background-color: #ddd;
            border-radius: 10rem;
        }

        .item-info_nav-item {
            margin-left: .1rem;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;

            span.title {
                font-weight: bold;
            }

            span.description, a{
                font-size: .8rem;
            }

            a {
                color: colors.$textSecondary;
                margin-top: 5px;
            }
        }
    }
}

.tablet-app-container {
    $items-gap-value: 2rem;

    .nav-item_component {
        @include colors.box-shadow-2;
        border-radius: 2rem;
        background-color: colors.$surfaceColor2;
        display: flex;
        align-items: center;
        gap: $items-gap-value;
        width: 100%;
        max-width: 26rem;
        height: 10rem;
        cursor: pointer;

        &:hover {
            background-color: colors.$surfaceColor5;
            scale: 1.01;
        }

        .img-area_nav-item {
            margin-left: .8rem;
            $img_size: 7rem;

            img {
                width: $img_size;
                height: $img_size;
            }

            width: calc($img_size / 1.2);
            height: calc($img_size / 1.2);
            background-color: #ddd;
            border-radius: 10rem;
        }

        .item-info_nav-item {
            margin-left: .1rem;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;

            span.title {
                font-weight: bold;
            }

            span.description, a {
                font-size: .8rem;
            }
            a {
                color: colors.$textSecondary;
                margin-top: 5px;
            }
        }
    }
}
.mobile-app-container {
    $items-gap-value: 2rem;

    .nav-item_component {
        @include colors.box-shadow-2;
        border-radius: 2rem;
        background-color: colors.$surfaceColor2;
        display: flex;
        align-items: center;
        gap: $items-gap-value;
        width: 100%;
        max-width: 26rem;
        height: 10rem;
        cursor: pointer;

        &:hover {
            background-color: colors.$surfaceColor5;
            scale: 1.01;
        }

        .img-area_nav-item {
            margin-left: .8rem;
            $img_size: 8rem;

            img {
                width: $img_size;
                height: $img_size;
            }

            width: calc($img_size / 1.2);
            height: calc($img_size / 1.2);
            background-color: #ddd;
            border-radius: 10rem;
        }

        .item-info_nav-item {
            margin-left: .1rem;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;

            span.title {
                font-weight: bold;
            }

            span.description, a {
                font-size: .8rem;
            }
            a {
                color: colors.$textSecondary;
                margin-top: 5px;
            }
        }
    }
}
</style>