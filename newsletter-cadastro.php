<?php include '_header.php'; ?>

<section class="page-form">

	<div class="container">

		<div class="row">

			<div class="col-md-7">

				<header>
					<h1>Receba novas publicações na sua caixa de entrada</h1>

					<p>Assine a <em>newsletter</em> da Agência de Notícia e receba semanalmente no seu e-mail os destaques da pauta. Você ainda pode escolher os assuntos que mais interessam para você e receber todas as notícias desse assunto.</p>
				</header>

				<form action="#">

					<h6>
						<span>1</span>Informe seu email
					</h6>

					<fieldset>
						<p>
							<input type="email" name="email" placeholder="insira seu email">
						</p>
					</fieldset>

					<h6>
						<span>2</span>Selecione as editorias do seu interesse
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

					<button class="btn btn-lg" disabled>Assinar Newsletter</button>

					<button  class="btn btn-lg">Assinar Newsletter</button>

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