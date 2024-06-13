const App = () => {
    return <div>
        <Person name='Camden' age={44} hobbies={['archery', 'knitting', 'reading']}/>
        <Person name='Amanda' age={12} hobbies={['needlepoint', 'biking', 'reading']}/>
        <Person name='Diana Bright' age={18} hobbies={['activism', 'reading']}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));