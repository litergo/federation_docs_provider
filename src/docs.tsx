import './docs.css';

export default function ProviderDocs() {
    return <div className='left'> 
        <h2>To run locally</h2>
        <ol>
            <li>Clone a provider of a button with a counter: <a href="https://github.com/litergo/federation_button_provider">federation_button_provider</a></li>
            <li>Run <b>npm i</b></li>
            <li>Run <b>npm run dev</b>. This should deploy button microfrontend locally to http://localhost:3000/</li>
            <li>Clone a provider of this doc: <a href="https://github.com/litergo/federation_docs_provider">federation_docs_provider</a></li>
            <li>Run <b>npm i</b></li>
            <li>Run <b>npm run dev</b>. This should deploy docs microfrontend locally to http://localhost:3001/</li>
            <li>Clone a consumer that is combining them into web app: <a href="https://github.com/litergo/federation_consumer">federation_consumer</a> </li>
            <li>Run <b>npm i</b></li>
            <li>Run <b>npm run dev</b>. This should deploy application locally to http://localhost:4000/</li>
            <li>Visit the http://localhost:4000</li>
        </ol>
        <h2>To run on Render.com or other platforms</h2>
        <ol>
            <li>Clone a provider of a button with a counter: <a href="https://github.com/litergo/federation_button_provider">federation_button_provider</a></li>
            <li>Run <b>npm i</b></li>
            <li>Run <b>npm run build</b></li>
            <li>Deploy as static site on render. <b>Publish Directory</b> should be <b>Dist</b></li>
            <li>Add headers <b>Access-Control-Allow-Origin = *</b></li>
            <li>Do the same for <a href="https://github.com/litergo/federation_docs_provider">federation_docs_provider</a> and <a href="https://github.com/litergo/federation_consumer">federation_consumer</a></li>
            <li>Visit the url where <b>federation_consumer</b> is deployed</li>
        </ol>
    </div>;
}