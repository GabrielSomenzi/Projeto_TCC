<template>
  <f7-page>
    <f7-navbar title="Oftalmologistas" back-link="Back" sliding></f7-navbar>
    <f7-block inner></f7-block>

    <!-- Lista expansível -->
    <div allow-intent href="tel:" class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/oftalmologista/mario_jampaulo.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div src style="height: 300px">
            <div style="height: 300px" class="item-media">
              <div class="card-header text-color-black display-block">
                Dr. Mario Jampaulo
                <br />
                <small style="opacity: 0.7">Oftalmologista</small>
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
                        <div class="item-header">Nome</div>Mario Jampaulo
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:6132465555" target="_system" class="item-link external item-content">
                    <!-- Ícone do telefone -->
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="material-icons">phone</i>
                    </div>
                    <!-- || -->
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Contato</div>(61) 3246-5555
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marioJ@outlook.com"
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
                        <div class="item-header">Email</div>marioJ@outlook.com
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
                                data-popup=".popup-about-Mario-Jampaulo"
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
      </div>
    </div>
    <!-- Segundo profissional -->
    <div class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/oftalmologista/eliezer_duarte.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dra. Eliezer Duarte
              <br />
              <small style="opacity: 0.7">Oftalmologista</small>
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
                    <div class="item-header">Nome</div>Eliezer Duarte
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="eliduarte@outlook.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>eliduarte@outlook.com
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
                    <div class="item-title">
                      <div class="item-header">Experiência em</div>Plástica Ocular
                      <p>
                        <br />
                      </p>
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
          data-background="static/oftalmologista/Juliana_meroni.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dra. Juliana Das Chagas Meroni
              <br />
              <small style="opacity: 0.7">Oftalmologista</small>
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
                    <div class="item-header">Nome</div>Juliana Das Chagas Meroni
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:julianameroni@yahoo.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>julianameroni@yahoo.com
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
                            data-popup=".popup-about-Juliana-Meroni"
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

    <!-- Mario Jampaulo -->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Mario-Jampaulo">
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
            <div class="item-text">
              <div class="item-header"></div>
            </div>
            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">
                    <b>Experiência em:</b>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PopUp Jualiana Meroni -->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Juliana-Meroni">
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
            <div class="item-text">
              <div class="item-header"></div>
            </div>
            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">
                    <b>Experiência em:</b>
                  </div>
                  <p></p>
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
