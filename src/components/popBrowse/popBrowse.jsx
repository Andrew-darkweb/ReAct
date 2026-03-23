import { SpopBrowse } from '/SpopBrowse.js'
import { CategoryTheme, Subtitle } from '../newtask/Snewtask.js'
import Calendar from './Calendar'
import { CategoriesTheme, PopBrowseBlock, PopBrowseContainer, PopBrowseContent, PopBrowseTopBlock, PopBrowseTtl, Status, StatusThemes, StatusTheme, PopBrowseWrap, PopBrowseForm, FormBrowseBlock, FormBrowseArea, CategoriesTheme, PopBrowseBtn, BtnGroup, BtnBor, BtnBg } from './SpopBrowse.js'
const PopBrowse = () => {
    return (
        <SpopBrowse >
            <PopBrowse>
				<PopBrowseContainer>
					<PopBrowseBlock>
						<PopBrowseContent>
							<PopBrowseTopBlock>
								<PopBrowseTtl>Название задачи</PopBrowseTtl>
								<CategoriesTheme active='orange'>
									<Orange>Web Design</Orange>
								</CategoriesTheme>
							</PopBrowseTopBlock>
							<Status>
								<Subtitle>Статус</Subtitle>
								<StatusThemes>
									<StatusTheme active='hidden'>
										<p>Без статуса</p>
									</StatusTheme>
									<StatusTheme active='hidden'>
										<p class="_gray">Нужно сделать</p>
									</StatusTheme>
									<StatusTheme active='active'>
										<p>В работе</p>
									</StatusTheme>
									<StatusTheme active='hidden'>
										<p>Тестирование</p>
									</StatusTheme>
									<StatusTheme active='hidden'>
										<p>Готово</p>
									</StatusTheme>
								</StatusThemes>
							</Status>
							<PopBrowseWrap>
								<PopBrowseForm id="formBrowseCard" action="#">									
									<FormBrowseBlock>
										<Subtitle>Описание задачи</Subtitle>
										<FormBrowseArea name="text" id="textArea01" readonly="" placeholder="Введите описание задачи..."></FormBrowseArea>
									</FormBrowseBlock>
								</PopBrowseForm>
								<Calendar />
							</PopBrowseWrap>
							<div class="theme-down__categories theme-down">
								<Subtitle>Категория</Subtitle>
								<CategoryTheme color='orange'>
									<Orange>Web Design</Orange>
								</CategoryTheme>
							</div>
							<PopBrowseBtn>
								<BtnGroup>
									<BtnBrowseEdit><a href="#">Редактировать задачу</a></BtnBrowseEdit>
									<BtnBor><a href="#">Удалить задачу</a></BtnBor>
								</BtnGroup>
								<BtnBg><a href="#">Закрыть</a></BtnBg>
							</PopBrowseBtn>
							<BtnBrowseEdit active='hidden'>
								<BtnGroup>
									<BtnBg><a href="#">Сохранить</a></BtnBg>
									<BtnBg ><a href="#">Отменить</a></BtnBg>
									<BtnBg id="btnDelete"><a href="#">Удалить задачу</a></BtnBg>
								</BtnGroup>
								<BtnBg><a href="#">Закрыть</a></BtnBg>
							</BtnBrowseEdit>
						</PopBrowseContent>
					</PopBrowseBlock>
				</PopBrowseContainer>
			</PopBrowse>
        </SpopBrowse>
    );
};
export default PopBrowse;