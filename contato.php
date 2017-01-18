<?php include '_header.php'; ?>

<section class="page-form">

	<div class="container">

		<div class="row">

			<div class="col-md-7">

				<header>
					<h1>Entre em contato com a Agência de Notícias do Paraná</h1>
					<p>
						Fale conosco preenchendo o formulário abaixo ou ligue para os telefones da Secretaria de Comunicação ou das assessorias.
					</p>
				</header>

				<form action="#">
					<fieldset>
						<p class="">
							<label for="nome">Seu nome</label>
							<input type="text" name="nome" placeholder="insira seu nome">
						</p>
						<p class="">
							<label for="email">Seu email</label>
							<input type="email" name="email" placeholder="insira seu email">
						</p>
						<p class="">
							<label for="telefone">Telefone para contato</label>
							<input type="tel" name="telefone" placeholder="(00) 00000-0000">
						</p>

						<p class="">
							<label for="mensagem">Sua mensagem</label>
							<textarea name="mensagem" placeholder="Digite sua mensagem"></textarea>
						</p>

						<p class="">
							<label for="nome">Seu nome</label>
							<input type="text" name="nome" placeholder="insira seu nome" class="error">
							<span class="error">Este campo deve ser preenchido</span>
						</p>

					</fieldset>

					<p class="required">
						* Todos os campos devem ser preenchidos
					</p>

					<button class="btn btn-lg" disabled>Enviar mensagem</button>

					<button  class="btn btn-lg">Enviar mensagem</button>

				</form>

			</div>

			<div class="col-md-4 col-lg-3 col-lg-offset-2">

				<aside>
					<dl>
						<dt>Fale com a secretaria de comunicação social</dt>
						<dd>
							<ul>
								<li>
									Secretário de Comunicação<br>
									Márcio Villela
									<strong>(41) 3350-2643</strong>
								</li>
								<li>
									Coordenadoria de Imprensa da Agência Estadual de Notícias
									<strong>(41) 3350-2643</strong>
								</li>
							</ul>

							<p><a href="#"><i class="fa fa-angle-double-right"></i>  Todas as assessorias de comunicação</a></p>

							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.7421406131325!2d-49.26989368526109!3d-25.413440683796065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce6590f2a0cd7%3A0x1f65d1c7d85d998b!2zUGFsw6FjaW8gSWd1YcOndQ!5e0!3m2!1spt-BR!2sbr!4v1484145062109" frameborder="0" allowfullscreen></iframe>

							<p>
								<strong>Palácio Iguaçu</strong> - Praça Nossa Senhora de Salette, s/n - Centro Cívico 80530-909 - Curitiba - PR. <a href="#">Mapa</a>
							</p>
						</dd>
					</dl>

					
				</aside>

			</div>

		</div>

	</div>

</section>

<?php include '_footer.php'; ?>