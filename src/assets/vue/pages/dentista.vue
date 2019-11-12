<template>
  <f7-page>
    <f7-navbar title="Dentistas" back-link="Back" sliding></f7-navbar>
    <f7-block inner></f7-block>
    <!-- <f7-block inner>
      <f7-link @click="$f7router.back()"></f7-link>
    </f7-block>-->

    <!-- Lista expansível -->
    <div allow-intent class="card card-expandable">
      <div class="card-content">
        <div data-background="static/dentista/Erica_jin.jpg" class="lazy">
          <div src style="height: 300px">
            <div style="height: 300px" class="item-media">
              <div class="card-header text-color-black display-block">
                Dra. Érica jin
                <br />
                <small style="opacity: 0.7">Dentista</small>
                <br />
              </div>
              <!-- Botão fechar janela -->
              <a
                href="#"
                class="link card-close card-opened-fade-in color-white"
                style="position: absolute; right: 15px; top: 15px"
              >
                <!-- Ícone do x -->
                <i class="icon f7-icons">close_round_fill</i>
              </a>
            </div>
            <div class="card-content-padding list">
              <ul>
                <li>
                  <a class="color-black item-content">
                    <div class="item-media external icon-only button button-fill-md color-blue">
                      <i class="far fa-user"></i>
                    </div>
                    <!-- Nome -->
                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Nome</div>Érica Jin
                      </div>
                    </div>
                    <!-- Até aqui -->
                  </a>
                </li>
                <li>
                  <!-- Contato -->
                  <a href="tel:4441020732" target="_system" class="item-link external item-content">
                    <!-- Ícone do telefone -->
                    <div
                      class="item-media link external icon-only button button-fill-md color-blue"
                    >
                      <i class="material-icons">phone</i>
                    </div>

                    <div class="item-inner">
                      <div class="item-title">
                        <div class="item-header">Contato</div>(11) 4102-0732
                      </div>
                    </div>
                  </a>
                </li>
                <!-- E-mail -->
                <li>
                  <a
                    href="mailto:ericaJ@gmail.com"
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
                        <div class="item-header">Email</div>ericaJ@gmail.com
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Sobre -->
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
                                data-popup=".popup-about-erica"
                              >Sobre mim</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Abre o popup -->
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
          data-background="static/dentista/Caio_Fabio.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Dr. Caio Fabio Racy
              <br />
              <small style="opacity: 0.7">Dentista</small>
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
                    <div class="item-header">Nome</div>Caio Fabio Racy
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:1145066555" target="_system" class="item-link external item-content">
                <!-- Ícone do telefone -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="material-icons">phone</i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Contato</div>(11) 4506-6555
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:caiofr@outlook.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>caiofr@outlook.com
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
                            data-popup=".popup-about-Caio"
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
          data-background="static/dentista/Marco_velangieri.jpg"
          background-repeat="no-repeat"
          class="lazy"
        >
          <div class="item-media" style="height: 300px">
            <div class="card-header text-color-black display-block">
              Prof. Marco Velangieri
              <br />
              <small style="opacity: 0.7">Cirurgião buco-maco-facial</small>
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
                    <div class="item-header">Nome</div>Marco Velangieri
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:1138141403" target="_system" class="item-link external item-content">
                <!-- Ícone do telefone -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="material-icons">phone</i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Contato</div>(11) 3814-1403
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:marcoLangieri@outlook.com"
                target="_system"
                class="item-link external item-content"
              >
                <!-- Ícone do E-mail -->
                <div class="item-media link external icon-only button button-fill-md color-blue">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">
                    <div class="item-header">Email</div>marcoLangieri@outlook.com
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
                            data-popup=".popup-about-Marco"
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
    <!-- A seguir estão os códigos dos popups -->
    <!---->
    <!----------------------------- PopUp da Erica --------------------------------->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-erica">
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
              <div class="item-header"></div>FORMADA PELA FACULDADE DE ODONTOLOGIA DA UNIVERSIDADE DE SÃO PAULO (FO USP)
              <p>-EXPERIENCIA EM TRATAMENTO DTM (DISFUNCAO TEMPOROMANDIBULAR)</p>
              <p>-FELLOW DO ITI (INTERNATIONAL TEAM FOR IMPLANTOLOGY)</p>
              <p></p>
            </div>
            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">
                    <b>Experiência em</b>
                  </div>-Implantodontia
                  <p>-Prótese Dentária</p>
                  <p>-Disfunção Temporomandibular e Dor Orofacial</p>
                  <p>-Dentística</p>
                  <p>-Odontologia Estética.</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!----------------------------- PopUp do Caio --------------------------------->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Caio">
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
              <div class="item-header"></div>Professor do Curso de Especialização em Dentística com ênfase em estética pela Fundecto USP
              <p>Especialista em Dentística pela Fundecto USP</p>
              <p>Mestre em Laser pelo IPEN/FOUSP</p>
              <p>Especialista em Endodontia pela Associação Paulista dos Cirurgiões Dentistas</p>
              <p></p>
            </div>
            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">
                    <b>Experiência em</b>
                  </div>-Odontologia Estética
                  <p>-Implantodontia</p>
                  <p>-Periodontia</p>
                  <p>-Endodontia.</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">
                    <b>Formação</b>
                  </div>Professor do Curso de Dentística com Ênfase em Estética da FOUSP
                  <p>Mestrado em Laser em Odontologia - IPEN/FOUSP</p>
                  <p>Especialização em Dentística - Fundecto/FOUSP</p>
                  <p>Especialização em Endodontia - APCD</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-------------------------------- PopUp do Marco Velangieri ----------------------------------------->
    <div class="item-inner">
      <div class="item-title">
        <div class="popup popup-about-Marco">
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
              <div class="item-header"></div>Estudei na Faculdade de Odontologia da Universidade de São Paulo - USP-SP por 10 anos: Graduação, Especialidade e Mestrado (Odontologia, Cirurgia Bucomaxilo e Ciências - área de Patologia Oral).
            </div>
            <br />
            <div class="item-inner">
              <div class="item-title">
                <br />
                <div class="item-title">
                  <div class="item-header">
                    <b>Experiência em:</b>
                  </div>
                  <p>
                    Cirurgia Oral
                    Cirurgia Ortognática e Estética
                    Traumatismos Faciais
                    Disfunção Temporomandibular e Dor Orofacial
                    Implantodontia
                  </p>
                </div>
              </div>
            </div>
            <div class="item-inner">
              <div class="item-title">
                <div class="item-header">
                  <b>Formado em:</b>
                </div>
                <p>Mestre em Ciencias Odontológicas, Universidade de São Paulo - USP-SP, 2009</p>
                <p>Cirurgião-dentista, Universidade de São Paulo - USP-SP, 2004</p>
                <p>Especialista em Cirurgia e Traumatologia Bucomaxilofaciais, Universidade de São Paulo - USP-SP, 2007</p>
                <p></p>
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
