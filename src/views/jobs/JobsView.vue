<template>
    <div class="job">
        <h1 v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
                <h2>{{ job.title }}</h2>
            </router-link>
        </h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
                { title: 'Ninja Web Developer', id: 2, details: 'lorem' },
                { title: 'Ninja Vue Developer', id: 3, details: 'lorem' },
            ],
        };
    },
};
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.job h2:hover {
    background: #ddd;
}
.job a {
    text-decoration: none;
}
</style>
