import { createRoot } from 'react-dom/client';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import './style.scss';
// Block Name
function FrontEnd(props) {
	return (
		<>
			<RegisterForm {...props} />
		</>
	);
}

const container = document.querySelectorAll('.wp-block-rgfr-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const nonce = JSON.parse(ele.dataset.nonce);
	const root = createRoot(ele);
	ele.removeAttribute("data-attributes");
	root.render(<FrontEnd attributes={attributes} nonce={nonce} />);
})