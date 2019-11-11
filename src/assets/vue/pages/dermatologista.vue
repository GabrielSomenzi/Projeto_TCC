<template>
  <f7-page>
    <f7-navbar title="Dermatologistas" back-link="Back" sliding></f7-navbar>
    <f7-block inner></f7-block>

    <!-- Lista expansível -->
    <div allow-intent href="tel:" class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/dermatologista/mariana_morais.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div src style="height: 300px">
            <div style="height: 300px" class="item-media">
              <div class="card-header text-color-black display-block">
                Dra. Mariana de Morais
                <br />
                <small style="opacity: 0.7">Dermatologista</small>
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
                        <div class="item-header">Nome</div>Mariana de Morais
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:5134242222" target="_system" class="item-link external item-content">
                    <!-- Ícone do telefone -->
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="material-icons">phone</i>
                    </div>
                    <!-- || -->
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Contato</div>(51) 3424-2222
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marianam@outlook.com"
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
                        <div class="item-header">Email</div>marianam@outlook.com
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
                                data-popup=".popup-about-Mariana"
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
    <!--  -->
    <!-- Segundo profissional -->
    <div class="card card-expandable">
      <div class="card-content">
        <div
          data-background="static/dermatologista/fernanda_lauermann.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dr. Fernanda Lauermann
              <br />
              <small style="opacity: 0.7">Dermatologista</small>
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
                    <div class="item-header">Nome</div>Fernanda Lauermann
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:54991759852" target="_system" class="item-link external item-content">
                <!-- Ícone do telefone -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="material-icons">phone</i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Contato</div>(54) 9 9175-9852
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:fernandaL@gmail.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>fernandaL@gmail.com
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
                            data-popup=".popup-about-Fernanda"
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
          data-background="static/dermatologista/gabriela_seidel.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dra. Gabriela Seidel
              <br />
              <small style="opacity: 0.7">Dermatologista</small>
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
                    <div class="item-header">Nome</div>Gabriela Seidel
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:53981326382" target="_system" class="item-link external item-content">
                <!-- Ícone do telefone -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="material-icons">phone</i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Contato</div>(53) 98132-6382
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:gabriealSeidel@yahoo.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>gabriealSeidel@yahoo.com
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
                            data-popup=".popup-about-Gabriela"
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
    <!---------------------------------- Popup da Mariana ---------------------------------------->

    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Mariana">
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
                <br />
                <div class="item-title">
                  <div class="item-header">Experiência em</div>Dermatologia Pediátrica
                  <p>Detecção Precoce do Câncer de Pele</p>
                  <p>Dermatologia Estética</p>
                  <p>Psoríase e Imunobiológico</p>
                  <p>Dermatologia Clinica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PopUp da Fernanda -->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Fernanda">
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

            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">Experiência em</div>Eczema
                  <p>Ceratose Seborréica</p>
                  <p>Carcinoma Basocelular</p>
                  <p>Câncer de pele</p>
                  <p>Dermatite</p>
                  <p>Doenças da unha</p>
                  <p>Cicatriz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PopUp da Gabriela -->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Gabriela">
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
              <div class="item-header"></div>Meu nome é Gabriela Seidel, sou dermatologista com especialização em Dermatologia pelo Hospital de Clínicas de Curitiba - UFPR, Membro da Sociedade Brasileira de Dermatologia e Membro da Sociedade Brasileira de Cirurgia Dermatológica e atuo em Pelotas na clínica Specialité. Apaixonada pela dermatologia, atendo crianças e adultos com doenças de pele, cabelos e unhas. Além disso atuo na área de cosmiatria e estética, com enfoque em tratamentos que realcem a beleza e promovam a prevenção do envelhecimento.
            </div>
            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">Experiência em</div>Doenças do Cabelo e Unhas
                  <p>Dermatologia Clinica</p>
                  <p>Cosmiatria</p>
                  <p>Cirurgia Dermatológica</p>
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
