import facebookPic from './assets/icons/facebook.svg'
import githubPic from './assets/icons/github.svg'
import instPic from './assets/icons/inst.svg'
import twitterPic from './assets/icons/twitter.svg'



export default function Footer(){
	return (
		<footer>
			<a className="blue-link" href="https://www.facebook.com/profile.php?id=100015373453889&locale=uk_UA" target='_blank'>
				<img src={facebookPic} alt="" className="social-icon" />
			</a>
			<a className='black-link' href="https://github.com/sla1n" target='_blank'>
				<img src={githubPic} alt="" className="social-icon" />
			</a>
			<a className='red-link' href="https://www.instagram.com/l3vick?igsh=MWs2cWEydWZoMHM2eg==" target='_blank'>
				<img src={instPic} alt="" className="social-icon" />
			</a>
			<a className="blue-link" href="https://x.com/l3vick" target='_blank'>
				<img src={twitterPic} alt="" className="social-icon" />
			</a>
		</footer>
	)
}