import { Snewtask,
       PopNewCard,
       PopCardContainer,
       PopCardBlock,
       PopCardContent,
       PopCardTitle,
       PopCardClose,
       PopCardWrap,
       PopCardForm,
       Blockform,
       Subtitle,
       CategoryTheme,
       CategoryThemes,
       FormInput
          } from '/Snewtask.js'
import { Orange, Green, Purple } from '../cards/Scards.js'
import Calendar from '../calendar'
const Newtask = () => {
    return (
        <Snewtask>
            <PopNewCard>
                <PopCardContainer>
                    <PopCardBlock>
                        <PopCardContent>
                            <PopCardTitle>Создание задачи</PopCardTitle>
                            <PopCardClose href="#">&#10006;</PopCardClose>
                            <PopCardWrap>
                                <PopCardForm action="#">
                                    <Blockform>
                                        <Subtitle for="formTitle">Название задачи</Subtitle>
                                        <FormInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autofocus />
                                    </Blockform>
                                    <Blockform>
                                        <label for="textArea" className="subttl">Описание задачи</label>
                                        <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea>
                                    </Blockform>
                                </PopCardForm>
                                <Calendar />
                            </PopCardWrap>
                            <Categories>
                                <p className="categories__p subttl">Категория</p>
                                <CategoryThemes>
                                    <CategoryTheme>
                                        <Orange>Web Design</Orange>
                                    </CategoryTheme>
                                    <CategoryTheme>
                                        <Green>Research</Green>
                                    </CategoryTheme>
                                    <CategoryTheme>
                                        <Purple>Copywriting</Purple>
                                    </CategoryTheme>
                                </CategoryThemes>
                            </Categories>
                        </PopCardContent>
                    </PopCardBlock>
                </PopCardContainer>
            </PopNewCard>
        </Snewtask>
            );
};
export default Newtask;