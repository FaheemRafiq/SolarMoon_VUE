<template>
    <log-system>
        <div class="flex flex-col justify-between">
            <h1 id="heading" class="text-4xl text-[#AC85EC] font-bold font-mono">Solar Moon</h1>
            <p>Solar noon is defined as when the sun is at the local meridian and is highest in the sky.</p>
            <router-link to="/signup" class="bg-[#AC85EC] w-full p-2 mt-3 rounded-lg text-center hover:animate-pulse">Get Started</router-link>
        </div>
    </log-system>
</template>
<script>
import LogSystem from '../layout/LogSystem.vue';
export default {
    components: {
        LogSystem,
    }
}
</script>
<style>
#heading {
    border: 2px sold white;
    border-bottom: 2px;
}
</style>