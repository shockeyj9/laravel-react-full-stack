export default function Signup(){
    const onSubmit = (event)=>{
        event.preventDefault();
    }

    return(
        <form onSubmit={onSubmit}>
            <h1 className="title">
                Sign up for free
            </h1>
            <input type="email" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password Confirmation" />
            <button className="btn btn-block">Signup</button>
            <p className="message">
                Already Registered? <Link to='/login'>Sign in</Link>
            </p>
        </form>
    )
}