<template>
  <f7-page>
    <f7-navbar title="Nutricionistas" back-link="Back" sliding></f7-navbar>
    <f7-block inner></f7-block>

    <!-- Lista expansível -->
    <div allow-intent href="tel:" class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/nutricionista/rowan.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div src style="height: 300px">
            <div style="height: 300px" class="item-media">
              <div class="card-header text-color-black display-block">
                Dr. Rowan Vilar
                <br />
                <small style="opacity: 0.7">Nutricionista</small>
                <br />
              </div>
              <a
                href="#"
                class="link card-close card-opened-fade-in color-white"
                style="position: absolute; right: 15px; top: 15px"
              >
                <i class="icon f7-icons">close_round_fill</i>
              </a>
            </div>
            <div class="card-content-padding list">
              <ul>
                <li>
                  <a class="color-black item-content">
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="far fa-user"></i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Nome</div>Rowan Vilar
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:21988816084"
                    target="_system"
                    class="item-link external item-content"
                  >
                    <!-- Ícone do telefone -->
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="material-icons">phone</i>
                    </div>
                    <!-- || -->
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Contato</div>(21) 9 8881-6084
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rowanvilar@outlook.com"
                    target="_system"
                    class="item-link external item-content"
                  >
                    <!-- Ícone do E-mail -->
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="far fa-envelope"></i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Email</div>rowanvilar@outlook.com
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="item-link item-content">
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="far fa-file-alt"></i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">
                          <div class="block">
                            <!-- Open About Popup -->
                            <p>
                              <a
                                class="button popup-open color-black"
                                href="#"
                                data-popup=".popup-about-Rowan"
                              >Sobre mim</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- -------------------------------- -->
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Segundo profissional -->
    <div class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/nutricionista/vanusa_boim.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dra. Vanusa Boim
              <br />
              <small style="opacity: 0.7">Nutricionista</small>
            </div>
            <a
              href="#"
              class="link card-close card-opened-fade-in color-white"
              style="position: absolute; right: 15px; top: 15px"
            >
              <i class="icon f7-icons">close_round_fill</i>
            </a>
          </div>
        </div>
        <div class="card-content-padding list">
          <ul>
            <li>
              <a class="color-black item-content">
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-user"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Nome</div>Vanusa Boim
                  </div>
                </div>
              </a>
            </li>
            <li></li>
            <li>
              <a href="tel:21995614089" target="_system" class="item-link external item-content">
                <!-- Ícone do telefone -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="material-icons">phone</i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Contato</div>(21) 9 9561-4089
                  </div>
                </div>
              </a>
            </li>
            <li></li>
            <li>
              <a
                href="mailto:vanusab@yahoo.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>vanusab@yahoo.com
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-file-alt"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">
                      <div class="block">
                        <!-- Open About Popup -->
                        <p>
                          <a
                            class="button popup-open color-black"
                            href="#"
                            data-popup=".popup-about-Vanusa"
                          >Sobre mim</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Outro -->
    <div class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/nutricionista/nathalia_santos.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dra. Nathalia Santos
              <br />
              <small style="opacity: 0.7">Nutricionista</small>
            </div>
            <a
              href="#"
              class="link card-close card-opened-fade-in color-white"
              style="position: absolute; right: 15px; top: 15px"
            >
              <i class="icon f7-icons">close_round_fill</i>
            </a>
          </div>
        </div>
        <div class="card-content-padding list">
          <ul>
            <li>
              <a class="color-black item-content">
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-user"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Nome</div>Nathalia Santos
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:21999762347" target="_system" class="item-link external item-content">
                <!-- Ícone do telefone -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="material-icons">phone</i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Contato</div>(21) 9 9976-2347
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:nathaliasantos@outlook.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>nathaliasantos@outlook.com
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-file-alt"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">
                      <div class="block">
                        <!-- Open About Popup -->
                        <p>
                          <a
                            class="button popup-open color-black"
                            href="#"
                            data-popup=".popup-about-Nathalia"
                          >Sobre mim</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- PopUp do Rowan -->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Rowan">
          <f7-navbar title="Sobre mim" class="link popup-close" href="#" sliding>
            <a
              href="#"
              class="link card-close card-opened-fade-in color-black"
              style="position: absolute; right: 15px; top: 2px"
            >
              <i class="icon f7-icons">close_round_fill</i>
            </a>
          </f7-navbar>
          <div class="block">
            <!-- Fecha Popup -->
            <p></p>
            <div class="item-inner">
              <div class="item-title">
                <div class="item-title">
                  <div class="item-header"></div>Nutricionista especialista
                  <p>em nutrição clínica, a área</p>
                  <p>da nutrição que cuida do seu</p>
                  <p>estado nutricional, preven-</p>
                  <p>indo e controlando alterações</p>
                  <p>metabólicas</p>
                  <p>prejudiciais a sua saúde.</p>
                  <p></p>
                  <br />
                  <div class="item-title">
                    <div class="item-header">Experiência em</div>
                    <p>Nutrição Comportamental</p>
                    <p>Emagrecimento</p>
                    <p>Nutrição Clínica</p>
                    <p>Nutrição para Diabetes</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--                            -->

    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Vanusa">
          <f7-navbar title="Sobre mim" class="link popup-close" href="#" sliding>
            <a
              href="#"
              class="link card-close card-opened-fade-in color-black"
              style="position: absolute; right: 15px; top: 2px"
            >
              <i class="icon f7-icons">close_round_fill</i>
            </a>
          </f7-navbar>
          <div class="block">
            <!-- Close Popup -->

            <div class="item-inner">
              <div class="item-title">
                <div class="item-title">
                  <div class="item-header"></div>Nutricionista especialista
                  <p>em nutrição clínica, a área</p>
                  <p>da nutrição que cuida do seu</p>
                  <p>estado nutricional, preven-</p>
                  <p>indo e controlando alterações</p>
                  <p>metabólicas</p>
                  <p>prejudiciais a sua saúde. Um</p>
                  <p>profissional que tem paixão</p>
                  <p>por saúde, nutrição</p>
                  <p>e qualidade de vida!</p>
                  <p></p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PopUp da Nathalia -->

    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Nathalia">
          <f7-navbar title="Sobre mim" class="link popup-close" href="#" sliding>
            <a
              href="#"
              class="link card-close card-opened-fade-in color-black"
              style="position: absolute; right: 15px; top: 2px"
            >
              <i class="icon f7-icons">close_round_fill</i>
            </a>
          </f7-navbar>
          <div class="block">
            <!-- Close Popup -->

            <div class="item-inner">
              <div class="item-title">
                <div class="item-title">
                  <div class="item-header"></div>Nutricionista especialista
                  <p>em nutrição clínica, a área</p>
                  <p>da nutrição que cuida do seu</p>
                  <p>estado nutricional, preven-</p>
                  <p>indo e controlando alterações</p>
                  <p>metabólicas</p>
                  <p>prejudiciais a sua saúde. Um</p>
                  <p>profissional que tem paixão</p>
                  <p>por saúde, nutrição</p>
                  <p>e qualidade de vida!</p>
                  <p></p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  components: {}
};
</script>
