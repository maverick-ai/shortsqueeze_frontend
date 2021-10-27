import ProfileComponent from "./Components/ProfileFormComponent";
import { useSelector } from "react-redux";
import { useState,useCallback,useEffect } from "react";
import {ProfileURL,Host} from "./constants";
import LoadingImage from "./Loading";



function Profile(){
    const userToken = useSelector((state) => state.userToken);
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState();


    const fetchProfile = useCallback(async () => {
        try {

            const response=await fetch(ProfileURL,{method:'GET',headers:{
                'Accept':'*/*',
                'Accept-Encoding':'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Host':Host,
                'Authorization': `Token ${userToken.token}`
              }});
            
            if (!response.ok) {
                throw new Error("Response is not ok");
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
        } catch (error) {}
        
      }, [userToken.token]);
    
      useEffect(() => {
        fetchProfile();
      }, [fetchProfile]);

      

    return(isLoading === false ? profile : <LoadingImage Show={!isLoading} />);
}

export default Profile;