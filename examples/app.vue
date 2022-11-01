<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "elang-ui";
export default defineComponent({
  components: { Button },
  setup() {
    return {};
  },
});
</script>

<template>
  <h2 class="head-topic">
    按钮
  </h2>
  <div class="btn-wrap">
    <div>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="error">危险按钮</Button>
      <Button type="text">文字按钮</Button>
      <Button type="text" disabled>文字按钮</Button>
    </div>
    <div>
      <Button plain>朴素按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="info" plain>信息按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
      <Button type="error" plain>危险按钮</Button>
    </div>
    <div>
      <Button round>圆角按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="success" round>成功按钮</Button>
      <Button type="info" round>信息按钮</Button>
      <Button type="warning" round>警告按钮</Button>
      <Button type="error" round>危险按钮</Button>
    </div>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="info" disabled>信息按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="error" disabled>危险按钮</Button>
    </div>
    <div>
      <Button disabled>按钮尺寸</Button>
      <Button size="large">大按钮</Button>
      <Button size="normal">中等按钮</Button>
      <Button size="small">小型按钮</Button>
      <Button size="mini">超小按钮</Button>
    </div>
    <div>
      <Button disabled>按钮尺寸和禁用</Button>
      <Button size="large" disabled>大按钮</Button>
      <Button size="normal" disabled>中等按钮</Button>
      <Button size="small" disabled>小型按钮</Button>
      <Button size="mini" disabled>超小按钮</Button>
    </div>
    <div>
      <Button disabled>按钮尺寸主题和禁用</Button>
      <Button size="large" type="primary" disabled>大按钮</Button>
      <Button size="normal" type="success" disabled>中等按钮</Button>
      <Button size="small" type="warning" disabled>小型按钮</Button>
      <Button size="mini" type="error" disabled>超小按钮</Button>
    </div>
  </div>
</template>

<style>
.head-topic{
  margin: 15px 0;
}
.btn-wrap button {
  margin: 5px 5px;
}
</style>
