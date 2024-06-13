const Tweet = (props) => {
    return <div>
        <div class="name">{props.name}</div> 
        <div class="username">@{props.username}  {props.date}</div>
        <p class="message">{props.message}</p>
        <hr/>
    </div>;
}