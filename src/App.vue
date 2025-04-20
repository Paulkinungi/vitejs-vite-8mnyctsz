<template >
  <div id="page">
    <button @click="fetchUsers">Fetch Users</button>

    <div v-if="users">
      <div 
        v-for="user in users" 
        :key="user.id"
        class="user-card"
      >
        <img 
          :src="'https://robohash.org/' + user.first_name + user.last_name + '?size=200x200&set=set1'" 
          alt="User Image"
        />
        <h2>{{ user.first_name }} {{ user.last_name }}</h2>
        <p><strong>Age:</strong> {{ getAge(user.date_of_birth) }}</p>
        <p><strong>Phone:</strong> {{ user.phone_number }}</p>
        <p><strong>Employment:</strong> {{ user.employment.title }}</p>
        <p>
          <strong>Address:</strong> 
          {{ user.address.country }}, 
          {{ user.address.city }}, 
          {{ user.address.street_name }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      users: null
    }
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("https://random-data-api.com/api/v2/users?size=15");
      this.users = await response.json();
    },
    getAge(dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
}
</script>

<style>
#page{
  background-image: linear-gradient(270deg, rgba(24, 20, 20, 0.219), rgb(74, 74, 124));
}
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 12px;
  border-radius: 8px;
  width: 280px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  max-width: 250px;
}
.user-card img {
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>
