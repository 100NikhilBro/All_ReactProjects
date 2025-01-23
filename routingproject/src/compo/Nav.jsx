import { Link, useNavigate } from 'react-router-dom'

const Nav = ({setLogIn,login}) => {

    const navigate = useNavigate();


    function LogoutHandler(){
        setLogIn(false);
        navigate("/LogIn")
    }

  return (
    <div className='flex justify-around'>
        
        <div className='flex justify-center pt-5'>
        <Link to="/">LOGO</Link>
        </div>

        <div className='flex justify-center space-x-5 pt-5'>
        <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
        </div>



        <div className='flex space-x-5 pt-5'>



           {
            login ?(<div>

<Link to="/dashboard"><button>Dashboard</button></Link>

            </div>)
            :
            (<div>
                 <Link to="/Login"><button >LogIn</button></Link>
            </div>)
           }


           {
            login?(
                <div> 
                    <Link to="/LogIn"><button onClick={LogoutHandler}>LogOut</button></Link>
                     </div>
            )
            :
            (
                <div>
                    <Link to="/SignUp"><button>SignUp</button></Link>
                      
                </div>
            )
           }
           
        </div>
      
    </div>
  )
}

export default Nav
