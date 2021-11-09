import ProfileComponent from "./Components/ProfileFormComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState,useCallback,useEffect } from "react";
import { useHistory } from "react-router-dom";
import {UserTokenActions} from "./Store/UserTokenSlice";
import {ProfileURL,Host} from "./constants";
import LoadingImage from "./Loading";



function Profile(){
    const userToken = useSelector((state) => state.userToken);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState();


    const fetchProfile = useCallback(async () => {
        try {
          console.log(userToken.token);
            const response=await fetch(ProfileURL,{method:'GET',headers:{
                'Accept':'*/*',
                'Accept-Encoding':'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Host':Host,
                'Authorization': `Token ${userToken.token}`
              }});
            
            if (!response.ok) {
                throw new Error(response.status);
            }
            const data = await response.json();
            const DOB = data["date_of_birth"].split("-");
    
            setProfile(
            <ProfileComponent
            key={data["pk"]}
            FirstName={data["first_name"]}
            LastName={data["last_name"]}
            Country={data["country"]}
            State={data["state"]}
            City={data["city"]}
            StreetAddress={data["streetAddress"]}
            PhoneNumber={data["phoneNumber"]}
            Day={DOB[2]}
            Month={DOB[1]}
            Year={DOB[0]}
          />);
    
          setIsLoading(false);
        } catch (error) {
          console.log("inside error.....");
          console.log(error.message);
          console.log(+error.message === 403);
          if(+error.message === 403){
            dispatch(UserTokenActions.deleteToken());
            history.replace('/logIn');
          }

        }
        
      }, [userToken.token,dispatch,history]);
    
      useEffect(() => {
        fetchProfile();
      }, [fetchProfile]);

      

    return(isLoading === false ? profile : <LoadingImage Show={!isLoading} />);
}

export default Profile;