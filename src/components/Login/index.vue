<template>
  <!-- <div class="login_body"> -->
  <!-- <div>
      <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input class="login_text" type="password" placeholder="请输入名的密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div> -->
  <div class="main">
    <div class="content">
      <div class="title">
        <span>密码登录</span>
      </div>

      <div class="title-msg">
        <span>请输入登录账号和密码</span>
      </div>

      <form class="login-form" method="post" novalidate>
        <div class="input-content">
          <div>
            <input
              type="text"
              autocomplete="off"
              placeholder="用户名"
              name="userName"
              required
            />
          </div>
          <div>
            <input
              type="password"
              autocomplete="off"
              placeholder="登陆密码"
              name="password"
              required
              maxlength="32"
            />
          </div>
        </div>
        <!-- 登录按钮 -->
        <div>
          <button type="submit" class="enter-btn">登录</button>
        </div>
        <div class="foor">
          <div class="left"><span>忘记密码?</span></div>
          <div class="right"><span>注册账户</span></div>
        </div>
      </form>
    </div>
  </div>
  <!-- </div> -->
</template>


<script>
export default {
  name: "Login",
};
</script>


<style scoped>
/* #content .login_body {
  width: 100%;
} */
.main {
  width: 100vw;
  height: 100vh;
}
.main .content {
  margin-top: 50%;

  background: #ffffff;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
}
.title {
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.title span {
  font-size: 18px;
  color: #353f42;
}

.title-msg {
  width: 100%;
  height: 64px;
  line-height: 64px;
}

.title:hover {
  cursor: default;
}

.title-msg:hover {
  cursor: default;
}

.title-msg span {
  font-size: 12px;
  color: #707472;
}

.input-content {
  width: 100%;
  height: 120px;
}

.input-content input {
  width: 330px;
  height: 40px;
  border: 1px solid #dad9d6;
  background: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
}

.enter-btn {
  width: 350px;
  height: 40px;
  color: #fff;
  background: #0bc5de;
  line-height: 40px;
  text-align: center;
  border: 0px;
}

.foor {
  width: 100%;
  height: auto;
  color: #9b9c98;
  font-size: 12px;
  margin-top: 20px;
}

.enter-btn:hover {
  cursor: pointer;
  background: #1db5c9;
}

.foor div:hover {
  cursor: pointer;
  color: #484847;
  font-weight: 600;
}

.left {
  float: left;
}
.right {
  float: right;
}
/* .login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
} */
</style>