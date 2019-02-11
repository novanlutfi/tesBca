<template>
    <div id="plans-bca">
        <div class="title font-sans text-grey-darkest">
            <h1>Change Plan</h1>
            <router-link to="/poststable">
                <button class="text-grey-darkest cancel-plan hover:text-red">Cancel your Plan</button>
            </router-link>
        </div>
    <hr>
    <li class="flex flex-row">
        <hobby class="button w-32 text-grey-darkest text-center bg-white px-4 py-2 ml-2 mt-2 mb-6 rounded"></hobby>
        <growth class="button w-32 text-grey-darkest text-center bg-white px-4 py-2 ml-2 mt-2 mb-6 rounded"></growth>
        <bussiness class="button w-32  text-grey-darkest text-center bg-white px-4 py-2 ml-2 mt-2 mb-6 rounded"></bussiness>
        <enterprise class="button w-32 text-grey-darkest text-center bg-white px-4 py-2 mt-2 ml-2 mb-6 rounded"></enterprise>
    </li>
    </div>
</template>

<script>
import Bussiness from '@/components/plans/Bussiness.vue'
import Enterprise from '@/components/plans/Enterprise.vue'
import Growth from '@/components/plans/Growth.vue'
import Hobby from '@/components/plans/Hobby.vue'
export default {
  components: {
    'bussiness': Bussiness,
    'enterprise': Enterprise,
    'growth': Growth,
    'hobby': Hobby
  }
}
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;

}
hr {
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 10px;
    margin-right: 10px;
    border-style: inset;
    border-width: 2px;
}
.cancel-plan {
    font-size: 20px;
    font-weight: bold;
}

.button {
    box-shadow: 0 9px #999;
}
.button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
