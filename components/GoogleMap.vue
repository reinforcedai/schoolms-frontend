<template>
    <v-container>
        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 80vw; height: 70vh"
        >
            <!-- <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            /> -->
        </GmapMap>
    </v-container>
</template>
