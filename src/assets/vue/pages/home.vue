<template>
  <f7-page>
    <!-- Nome e pesquisa -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
      <div class="title">Doctorwho</div>
      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon="fas fa-search"
        ></f7-link>
      </f7-nav-right>
      <f7-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable
      ></f7-searchbar>
    </f7-navbar>
    <!-- Até aqui -->

    <f7-block-title>Bem vindo</f7-block-title>

    <f7-list class="components-list searchbar-found">
      <div class="page-content">
        <f7-list>
          <f7-list-item link="/dentista/" title="Dentista">
            <f7-icon slot="media" icon="fas fa-tooth"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/dermatologista/" title="Dermatologista">
            <f7-icon slot="media" icon="far fa-user-circle"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/ginecologista/" title="Ginecologista">
            <f7-icon slot="media" icon="fas fa-briefcase"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/nutricionista/" title="Nutricionista">
            <f7-icon slot="media" icon="fas fa-briefcase"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/oftalmologista/" title="Oftalmologista">
            <f7-icon slot="media" icon="fas fa-briefcase"></f7-icon>
          </f7-list-item>
        </f7-list>
      </div>
    </f7-list>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Item não encontrado"></f7-list-item>
    </f7-list>

    <f7-list class="searchbar-hide-on-search"></f7-list>
  </f7-page>
</template>
<script>
export default {
  components: {}
};
</script>
