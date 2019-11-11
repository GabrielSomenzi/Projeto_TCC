<template>
  <f7-page>
    <f7-block-title>
      <!-- <div class="item-media">
        <div class="skeleton-block" style="width: 50px; height: 50px; border-radius: 50%"></div>
      </div>
      <Opt>Bem vindo(a)!</Opt> -->

      <f7-block-title>Menu de navegação</f7-block-title>
      <f7-list>
        <!-- <f7-list-item link="//" title="Finalizar sessão" panel-close>
        <f7-icon slot="media" icon="fas fa-user"></f7-icon>
        </f7-list-item>-->
        <f7-list-item link="/color-themes/" title="Fale conosco">
          <f7-icon slot="media" icon="fab fa-stack-exchange"></f7-icon>
        </f7-list-item>
        <f7-list-item link="/about/" title="Sobre">
          <f7-icon slot="media" icon="fas fa-grip-lines"></f7-icon>
        </f7-list-item>
      </f7-list>
    </f7-block-title>
    <f7-block></f7-block>
  </f7-page>
</template>
<script>
export default {
  components: {}
};
</script>
