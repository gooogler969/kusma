import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <p>KUSMA</p>
                <h1>Sign Up</h1>
                <form>
                    <input type="email" name="emil" id="" placeholder="Email" />
                    <input type="text" name="name" id="" placeholder="Full name" />
                    <input type="text" name="username" id="" placeholder="Username" />
                    <input type="password" name="pass" id="" placeholder="Password" />
                    <button>Sign Up</button>
                    <Link className="log-btn" to="/login">
                      <button>Login</button>
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

export default Register