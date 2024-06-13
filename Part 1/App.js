const App = () => {
    return <div>
        <FirstComponent/>
        <NamedComponent name='Camden' />
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));