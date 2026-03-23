const PopExit = () => {
    return(
        <>
        <PopExit id="popExit">
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>
							<h2>Выйти из аккаунта?</h2>
						</PopExitTtl>
						<form class="pop-exit__form" id="formExit" action="#">
							<div class="pop-exit__form-group">
								<button class="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button class="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							</div>
						</form>
					</PopExitBlock>
				</PopExitContainer>
			</PopExit>
        </>
    );
}; export default PopExit