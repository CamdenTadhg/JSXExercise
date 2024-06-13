const App = () => {
    return <div>
        <Tweet name='Hank Green' username='hankgreen' date='6/12/24' message="One of the weirder things about chemo is it can kill enough of your immunce cells that they 'forget' about diseases you've been previously exposed to. In related news, I feel like I've been fighting off low-level viral infections for like eight straight months."/>
        <Tweet name='The CCBC' username='kidsbookcentre' date='6/12/24' message="Our friends at @kidscanpress are celebrating the launch of THE KIDS BOOK OF BLACK HISTORY IN CANADA at Nile Valley Books (1921 Gerrard St E.) from 5:30-7:30pm on Thursday, June 13. Please RSVP to publicity@kidscan.com by 5 pm on June 12."/>
        <Tweet name='ALSC' username='wearealsc' date='6/12/24' message="From the ALSC Blog: Thanks for Allowing Me to Serve as Your President."/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));