<template>
    <v-toolbar class="header">
        <!-- <div v-if="isLoaded" class="header-logo d-flex align-center">
            <img src="https://testing-sdlc-qum-report.s3.ap-south-1.amazonaws.com/qum/pet-clinic.jpg" alt="header-logo" />
            <h1 class="customerName">{{ qumInfo.applicationName }}</h1>
        </div> -->
        <!-- <v-spacer></v-spacer> -->
        <h1 class="appName">QUM SDLC Framework</h1>
        <v-spacer></v-spacer>
        <div class="accion-logo d-flex align-center">
            <span>Powered by</span>
            <img src="../assets/accionlabs-logo.87ad6b31.png" alt="accion-logo" />
        </div>
    </v-toolbar>
</template>

<script setup>
</script>

<style>
.header {
    position: sticky !important;
    top: 0;
    z-index: 9;
    background-color: #f2f2f2 !important;
}
.customerName {
    margin-left: 20px;
}

.headerTitle {
    font-size: 18px;
}

.header-logo img {
    height: 60px;
}

.accion-logo img {
    height: 40px;
}

@media (max-width: 991px) {

    .customerName {
        font-size: 17px;
        margin-left: 18px !important;
    }
    .appName, .accion-logo {
        font-size: 17px;
    }

    .header-logo img {
        height: 50px;
    }
    
    .accion-logo img {
        height: 35px;
    }
}

@media (max-width: 767px) {

    .customerName {
        font-size: 16px;
        margin-left: 16px !important;
    }
    .appName, .accion-logo {
        font-size: 16px;
    }

    .header-logo img {
        height: 50px;
    }
    .accion-logo img {
        height: 30px;
    }
}

@media (max-width: 600px) {

    .customerName {
        font-size: 15px;
        margin-left: 14px !important;
    }
    .appName, .accion-logo {
        font-size: 15px;
    }

    .header-logo img {
        height: 45px;
    }
    .accion-logo {
        flex-direction: column;
    }
    .accion-logo img {
        height: 27px;
    }
}

@media (max-width: 376px) {

    .customerName {
        font-size: 12px;
        margin-left: 10px !important;
    }
    .appName, .accion-logo {
        font-size: 12px;
    }

    .header-logo img {
        height: 40px;
    }

    .accion-logo {
        flex-direction: column;
    }
    .accion-logo img {
        height: 25px;
    }
}</style>