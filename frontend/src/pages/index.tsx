import React, { Fragment, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { PageContainer } from '@toolpad/core/PageContainer';

const COVID19_WORLDWIDE_API_ENDPOINT = "https://disease.sh/v3/covid-19/all";


export default function HomePage() {

  // React Hooks
  const [covid19All, setCovid19All] = useState([]);

  
  const getCovid19AllStatistics = async () => {
    //setIsLoading(true);
    
    const covid19GetResponse = await fetch(COVID19_WORLDWIDE_API_ENDPOINT, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const covid19Data = await covid19GetResponse.json();
    console.info(covid19Data)

    let covid19Listing: any = [];
    covid19Data.forEach(function (item: any) {
      let newObject: any = {
        id: item.id,
        cases: item.cases,
        deaths: item.deaths,
        recovered: item.recovered,
      };
      covid19Listing.push(newObject);
    });
    console.info(covid19Listing)

    setCovid19All(covid19Listing);
    //setIsLoading(false);

    return;
  };
  

  useEffect(() => {
      getCovid19AllStatistics();

  }, [COVID19_WORLDWIDE_API_ENDPOINT,]);

  return (    
    <PageContainer>
      <Typography>
        Welcome to Toolpad Core!
      </Typography>
    </PageContainer>
  );
}
