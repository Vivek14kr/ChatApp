import "./Login.css"

export const Login = () =>{
    return (
      <div>
        <div id="secondbox">
          
          <h1>Sign In</h1>
           <label htmlFor="">E-mail</label>
          <input type="text" placeholder="Email"/>
          <br />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
          <br />
          <button>Sign In</button>
        </div>

        <div id="firstbox">
          
            <img
              id="imgtitle"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
              alt=""
            />
            <b id="title">WHATSAPP WEB</b>
          
        </div>

        <div id="thirdbox"></div>
      </div>
    );
}