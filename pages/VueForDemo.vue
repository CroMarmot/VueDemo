<template>
  <div>
    <div>
      <input v-model="name" type="text" />
      <button @click="add">添加</button>
    </div>
    <div>With key</div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox" /> {{ item.name }}
      </li>
    </ul>
    <div>Without key</div>
    <ul>
      <li v-for="item in list"><input type="checkbox" /> {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      newId: 3,
      list: [
        { id: 1, name: '李斯' },
        { id: 2, name: '吕不韦' },
        { id: 3, name: '嬴政' },
      ],
    }
  },
  methods: {
    add() {
      // 注意这里是unshift
      this.list.unshift({ id: ++this.newId, name: this.name })
      this.name = ''
    },
  },
}
</script>
