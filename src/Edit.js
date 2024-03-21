import { InspectorControls } from "@wordpress/block-editor";
import { Fragment, useEffect, useState } from 'react';
import { TabPanel } from './Components/Panel/TabPanel/TabPanel';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import StyleSettings from './Components/Settings/StyleSettings/StyleSettings';
import ContentSettings from "./Components/Settings/ContentSettings/ContentSettings";
const Edit = props => {
	const { className, setAttributes, clientId, attributes } = props;
	const { cId } = attributes;
	const [tab, setTab] = useState("content");
	const isLoaderShow = true;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	return <Fragment>
		<InspectorControls>
			<TabPanel value={tab} onChange={value => setTab(value)} />
			{
				tab === "content" &&
				<ContentSettings attributes={attributes} setAttributes={setAttributes} />
			}
			{
				tab === "style" && <StyleSettings attributes={attributes} setAttributes={setAttributes} />
			}
		</InspectorControls>
		<div className={className} id={`rgfrRegisterBlock-${cId}`}>
			<RegisterForm attributes={attributes} isLoaderShow={isLoaderShow} isBackend={true} />
		</div>
	</Fragment>;
};
export default Edit;