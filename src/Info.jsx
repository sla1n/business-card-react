
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



export default function Info(){
	return (
		<div className='info-container'>
			<img src="src\assets\profile-pic.jpg" className="main-img" alt="" width="317px"/>
			<div className='name-container'>
				<h1 className='name-main'>Vitalii Pantsyr</h1>
				<h2>Frontend Developer</h2>
				<p>vitaliipantsyr.website</p>
				<a href="mailto:vitalikige@gmail.com">
					<button><FontAwesomeIcon icon={faEnvelope} /> Email</button>
				</a>
			</div>
		</div>
	)
}