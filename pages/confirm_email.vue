<template>
  <div id="confirm-email-page" class="flex-column-center default-height default-width">
    <loading-screen v-if="isLoading && !response"/>
    <div v-else-if="response" class="info-container">
      <logo v-if="response.success"/>
      <br/>
      <LinkExpired v-if="!response.success"/>
      <message-box
          v-else
          :label="$t('backend_messages.DONE')"
          @action="() => useRouter().push($availableRoutes.login)"
          :message="$keyValidation({
            success: [response.message.key]
          }, response)"/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {$availableRoutes} from "~/configs/routes.config";

export default defineComponent({
  name: "ConfirmEmail",
  computed: {
    $availableRoutes() {
      return $availableRoutes
    },
    token() {
      return useRoute().query.token
    },
    isLoading() {
      return useQueryManager().loadingList.includes(('email_confirm'));
    }
  },
  data() {
    return {
      response: null as any,
    }
  },
  async mounted() {
    if (this.token) {
      try {
        this.response = await useUser().confirmEmailQuery(this.token.toString());
      } catch (error) {
        this.response = error
      }
    } else {
      this.response = {
        success: false,
        message: {key: 'NO_TOKEN', text: this.$t('backend_messages.NO_TOKEN')}
      };
    }
  },
})
</script>
<style scoped lang="scss">
#confirm-email-page {
  .info-container {
    width: 20rem;
  }
}
</style>