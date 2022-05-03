<template>
    <nav class="navbar a">
        <div class="container-fluid">
            <a class="navbar-brand">
                <router-link to="/" class="nav-link text-decoration-none">Accueil</router-link>
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/ideas" class="nav-link text-decoration-none">Ideas</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/todo" class="nav-link text-decoration-none">Todo</router-link>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

</template>
<script>

export default {

}
</script>

<style scoped>
.a{
    z-index: 100;
}
</style>