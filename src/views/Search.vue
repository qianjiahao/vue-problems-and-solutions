<template>
  <div class="container">
    <div class="wrapper">
      <div class="logo">

      </div>
      <div class="search">
        <div class="input">
          <input class="input-bar" type="text" name="name" v-model="value">
          <div class="input-clean" @click="clean"></div>
        </div>

        <div class="submit" @click="submit">搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    clean () {
      this.value = ''
    },
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 80%;
  margin: 100px auto 0 auto;
  position: relative;;
}

.logo {
  width: 200px;
  height: 200px;
  margin: 0 auto 100px auto;

  background-image: url(../images/logo.png);
  background-position: center;
  background-repeat: no-repeat;
}

.search {
  width: 100%;
  box-sizing: border-box;

  .input {
    width: 100%;
    position: relative;

    .input-bar {
      width: 100%;
      font-size: 4rem;
      border: 1px solid #ccc;
      outline: none;
      padding: 20px 90px 20px 20px;
      position: relative;
      box-sizing: border-box;

      &:focus, &:hover {
        border: 1px solid #5dc596;
      }
    }

    .input-clean {
      width: 50px;
      height: 50px;
      background: #333;

      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 10;
    }
  }

  .submit {
    width: 100%;
    display: inline-block;
    font-size: 3rem;
    padding: 20px;
    text-align: center;
    border: 1px solid #5dc596;
    color: white;
    background-color: #5dc596;
    margin-top: 40px;
    letter-spacing: 4px;
    box-sizing: border-box;
  }
}
</style>
