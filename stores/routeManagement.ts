import { defineStore } from "pinia";
import type { RouteLocationNormalizedGeneric } from "vue-router";
import { routeConfigs } from "~/configs/routes.config";

export const useRouteManagement = defineStore('routeManagement', {
    state: () => ({
        to: {
            fullPath: null as any,
            query: null as any,
            hash: null as any,
            path: null as any,
            name: null as any,
            params: null as any,
            meta: null as any,
        },
        from: {
            fullPath: null as any,
            query: null as any,
            hash: null as any,
            path: null as any,
            name: null as any,
            params: null as any,
            meta: null as any,
        },
    }),
    getters: {
        config(state) {
            if (state.to) {
                if (state.to.fullPath && routeConfigs[state.to.fullPath]) {
                    return routeConfigs[state.to.fullPath];
                }
                if (state.to.path && routeConfigs[state.to.path]) {
                    return routeConfigs[state.to.path];
                }
            }
            return routeConfigs.default;
        },
    },
    actions: {
        setRoutes(from: RouteLocationNormalizedGeneric, to: RouteLocationNormalizedGeneric) {
            try {
                this.from.fullPath = from.fullPath;
                this.from.query = from.query;
                this.from.hash = from.hash;
                this.from.path = from.path;
                this.from.name = from.name;
                this.from.params = from.params;
                this.from.meta = from.meta;

                this.to.fullPath = to.fullPath;
                this.to.query = to.query;
                this.to.hash = to.hash;
                this.to.path = to.path;
                this.to.name = to.name;
                this.to.params = to.params;
                this.to.meta = to.meta;

                const { t } = useI18nStore().i18n.global;
                useSeoMeta({
                    title: this.config.key ? t(`pages.${this.config.key}.title`) + ` | ${useCoreAppStore().getBrandName}` : useCoreAppStore().getBrandName,
                    description: t(`pages.${this.config.key}.description`, { brand: useCoreAppStore().getBrandName }),
                    keywords: `${useCoreAppStore().getBrandName}, ` + t(`pages.${this.config.key}.keywords`),
                    ogTitle: t(`pages.${this.config.key}.title`) + ` | ${useCoreAppStore().getBrandName}`,
                    ogDescription: t(`pages.${this.config.key}.description`, { brand: useCoreAppStore().getBrandName }),
                    ogImage: useCoreAppStore().getPublicLogo,
                    ogUrl: `${useCoreAppStore().getBrandDomain}${this.to.fullPath}`,
                });
                if (this.config.layout) {
                    // @ts-ignore
                    setPageLayout(this.config.layout);
                }
            } catch (error: any) {
                throw error;
            }
        }
    }
});
