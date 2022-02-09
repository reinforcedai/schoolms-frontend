<template>
    <v-alert
        outlined
        v-if="message"
        type="error"
        class="my-3"
    >
        {{ message }}
    </v-alert>
</template>

<script>
export default {
  props: ['message']
}
</script>
