<template>
    <v-footer padless class="footer">
        <v-row no-gutters class="py-3">
            <v-col cols="8" class="px-4 d-flex align-center justify-start">
                <div class="copyrightText"> Copyright © 2024 Accion Labs. </div>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
</script>

<style>
.footer-logo {
    height: 40px;
}


@media (max-width: 991px) {
    .copyrightText {
        font-size: 15px;
    }
}

@media (max-width: 767px) {
    .copyrightText {
        font-size: 14px;
    }
}

@media (max-width: 600px) {
    .copyrightText {
        font-size: 13px;
    }
}

@media (max-width: 376px) {
    .copyrightText {
        font-size: 12px;
    }
}
</style>