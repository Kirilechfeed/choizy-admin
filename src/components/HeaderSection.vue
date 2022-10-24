<template>
  <div class="header">
    <div class="header-container">
      <div class="header-main">
        <div class="header-title">HFarm campus</div>
        <div class="header-users">
          <div class="user-name">Viktoriia Pavlenko</div>
          <div class="vertical-line"></div>
          <div class="user-log-in">Log out</div>
        </div>
      </div>
      <div class="gorizont-line"></div>
    </div>
  </div>
</template>

<style>
.header {
  width: 100%;
  background: #eff1f9;
  padding: 50px 0px 26px;
}
.header-container {
  width: 100%;
  padding: 0px 50px;
}
.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-title {
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  color: #0a2864;
}
.header-users {
  display: flex;
}
.header-users > *:not(:last-child) {
  margin-right: 16px;
}
.user-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #0a2864;
}
.user-log-in {
  font-size: 16px;
  line-height: 22px;
  color: #714cfe;
  cursor: pointer;
}
.vertical-line {
  border-left: 1px solid #7788ae;
}
.gorizont-line {
  margin-top: 26px;
  border-top: 1px solid #e2e7f0;
}
</style>
