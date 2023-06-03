import {success} from "./ToastServices";
export const newAccountHandler=async(user,setIsLoggedIn,dispatch,navigate)=>{

    if(user.firstName && user.lastName && user.email && user.password){


        try{

            const response =await fetch("/api/auth/signup",{
                method:"POST",
                body:JSON.stringify(user)
            });
            const data=await response.json();
            const {createdUser,encodedToken}=data;
            setIsLoggedIn(true);
            localStorage.setItem("user",JSON.stringify(createdUser));
            localStorage.setItem("tokem,encodedToken");
            navigate("/ProductDetails");

            success("Logged In Successfully! ");

        }
        catch(error)
       {console.log(error)} 
    }
};

export const guestLoginhandler= async(setEmail,setPassword,setIsLoggedIn,dispatch,location,navigate)=>{


    const credentials={
        email:"aman@123",
        password:"aman"
    };
    setEmail(credentials.email)
    setPassword(credentials.password);
    try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(creds),
        });
        const data = await response.json();
    
        const { foundUser, encodedToken } = data;
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", encodedToken);
        const newPath = location?.state?.from?.pathname;
        if (newPath === "/login") {
            navigate("/ProductDetails");
          success("Login Successfull!");
        } else if (newPath === undefined) {
            navigate("/ProductDetails");
          success("Login Successfull!");
        } else {
          navigate(newPath);
          success("Login Successfull!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    export const loginHandler = async (
      email,
      password,
      setIsLoggedIn,
      navigate,
      dispatch,
      location
    ) => {
      if (email && password) {
        const creds = {
          email,
          password,
        };
    
        try {
          const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(creds),
          });
    
          const { foundUser, encodedToken } = await response.json();
          if (response.status === 200) {
            setIsLoggedIn(true);
            localStorage.setItem("user", JSON.stringify(foundUser));
            localStorage.setItem("token", encodedToken);
    
            navigate(location?.state?.from?.pathname);
            success("Login Successfull!");
          } else {
            alert(response.statusText);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
}