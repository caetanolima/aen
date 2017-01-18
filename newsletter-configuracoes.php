<?php include '_header.php'; ?>

<section class="page-form">

	<div class="container">

		<div class="row">

			<div class="col-md-7">

				<header>
					<h1>Configurações da Newsletter</h1>
				</header>

				<form action="#">

					<h6>
						Selecione as editorias do seu interesse
					</h6>

					<fieldset>

						<ul class="editorias">
							<li>
								<input type="checkbox" value> Administração
							</li>
							<li>
								<input type="checkbox" value>Agência Reguladora
							</li>
							<li>
								<input type="checkbox" value>Agricultura
							</li>
							<li>
								<input type="checkbox" value>Assembleia
							</li>
							<li>
								<input type="checkbox" value>Assuntos Estratégicos
							</li>
							<li>
								<input type="checkbox" value>Assuntos Fundiários
							</li>
							<li>
								<input type="checkbox" value>BRDE
							</li>
							<li>
								<input type="checkbox" value>Casa Civil
							</li>
							<li>
								<input type="checkbox" value>Celepar
							</li>
							<li>
								<input type="checkbox" value>Ciência e Tecnologia
							</li>
							<li>
								<input type="checkbox" value>Comec
							</li>
							<li>
								<input type="checkbox" value>Compagas
							</li>
							<li>
								<input type="checkbox" value>Comunicação
							</li>
							<li>
								<input type="checkbox" value>Comunidade
							</li>
							<li>
								<input type="checkbox" value>Consumidor
							</li>
							<li>
								<input type="checkbox" value>Controladoria Geral do Estado
							</li>
						</ul>

					</fieldset>

					<div class="confirm">
						<button  class="btn btn-lg">Salvar</button>
						<a href="#">Desativar envio de newsletter</a>
					</div>

					<div class="confirm disable">
						<h6>Tem certeza? Você vai parar de receber os destaques da Agência de Notícias no seu e-mail.</h6>
						<div class="clearfix"></div>
						<button  class="btn btn-lg">Desativar newsletter</button>
						<a href="#">Cancelar</a>
					</div>

				</form>

			</div>

			<div class="col-md-4 col-lg-3 col-lg-offset-2">

				<aside>
					<dl>
						<dt>Notificações do seu navegador</dt>
						<dd>
							<p>Receba noticações em seu navegador assim que novas notícias forem publicadas.</p>
						</dd>
					</dl>

					<button class="button-news-notification" type="button">
						<i class="ia ia-bell"></i> Seja avisado de novas publicações
					</button>
				</aside>

			</div>

		</div>

	</div>

</section>

<?php include '_footer.php'; ?>