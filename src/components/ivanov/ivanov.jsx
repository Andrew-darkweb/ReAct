import { HeaderPopUserSet, 
     PopUserSetName, 
     PopUserSetMail,
     PopUserSetTheme,
     CheckBoxLight,
     CheckBoxDark,
     BtnExit } from './Sivanov.js';
import { useState } from 'react'
const Ivanov = () => {
        const [theme, setTheme] = useState('true')
        const switchTheme = () => {
            if (theme) {
                setTheme({
                    theme: false
                })
            }
            else {
                setTheme({
                    theme: true
                })
            }
        };
    return (
        <>
        <HeaderPopUserSet id="user-set-target">
								<a href="">x</a>
								<PopUserSetName>Ivan Ivanov</PopUserSetName>
								<PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
								<PopUserSetTheme>
									<p>Тёмная тема</p>
									<CheckBoxDark onClick={switchTheme} type="submit" name="checkbox"></CheckBoxDark>
								</PopUserSetTheme>
								<PopUserSetTheme>
									<p>Светлая тема</p>
									<CheckBoxLight onClick={switchTheme} type="submit" name="checkbox"></CheckBoxLight>
								</PopUserSetTheme>
								<BtnExit type="button"><a href="#popExit">Выйти</a></BtnExit>
							</HeaderPopUserSet>
        </>
    );
}; 
export default Ivanov;