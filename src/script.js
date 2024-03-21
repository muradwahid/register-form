import { createRoot } from 'react-dom/client';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import './style.scss';
// Block Name
function FrontEnd(props) {
	const isLoaderShow = false;
	return (
		<>
			<RegisterForm {...props} isLoaderShow={isLoaderShow} />
		</>
	);
}

const container = document.querySelectorAll('.wp-block-b-blocks-register-form');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const nonce = ele.dataset.nonce;
	const root = createRoot(ele);
	ele.removeAttribute("data-attributes");
	root.render(<FrontEnd attributes={attributes} nonce={nonce} />);
})