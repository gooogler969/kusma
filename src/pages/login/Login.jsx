import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <p>KUSMA</p>
                <h1>Login</h1>
                <form>
                    <input type="text" name="username" id="" placeholder="Username" />
                    <input type="password" name="pass" id="" placeholder="Password" />
                    <button>Login</button>
                    <Link className="reg-btn" to="/register">
                        <button>Sign Up</button>
                    </Link>
                </form>
            </div>
            <div className="right">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum laborum sit, incidunt ipsa reprehenderit consectetur!</p>
            </div>
        </div>
    </div>
  )
}

export default Login