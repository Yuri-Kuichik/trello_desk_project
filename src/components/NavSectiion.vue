<script setup>

</script>

<template>
    <div class="nav-section">
        <div>Brackets</div>
        <div class="l-box">
            <div class="nav-section__users">Users</div>
            <div class="nav-section__menu">Menu</div>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
.nav-section {
    display: flex;
    flex-direction: column;

    @media (min-width: 770px) {
        flex-direction: row;
    }
}

</style>