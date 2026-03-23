import { Sheader,
	 HeaderMain, 
	 Container, 
	 HeaderBlock, 
	 HeaderLogo, 
	 HeaderBtnMainNew, 
	 HeaderUser,
	 HeaderNav,
	 Logo,
	 Ssylka
	} from './Sheader.js'
import { useState } from 'react'
import Ivanov from '../ivanov/ivanov.jsx'

const Header = () => {
	const [modal, setModal] = useState('false')
	const ModalToggle = () => {
		setModal(!modal);
	}
	return (
		<Sheader>
			<HeaderMain>
				<Container>
					<HeaderBlock>
						<HeaderLogo>
							<a href="" target="_self"><Logo src="public/logoweek.png" alt="logo"/></a>
						</HeaderLogo>
						<HeaderNav>
							<HeaderBtnMainNew id="btnMainNew"><Ssylka href="#popNewCard">Создать новую задачу</Ssylka></HeaderBtnMainNew>
							<HeaderUser onClick={ModalToggle} href="#user-set-target">Artem Ermakov</HeaderUser>
							{modal && <Ivanov/>}
						</HeaderNav>
					</HeaderBlock>
				</Container>
			</HeaderMain>
		</Sheader>
	);
};
export default Header;