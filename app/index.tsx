import { DatabaseInitializer } from "@/data/db.config";
import { Redirect } from "expo-router";
import { Suspense, useEffect, useState } from "react";


export default function Index() {
  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    const initilizeDB = async () => {
      try {
        console.log("Hello!")
        const db = new DatabaseInitializer();
        await db.initialize();
        setDbLoaded(true);
        console.log("Loaded")
      } catch (err) {
        console.log("Error in initilizing database: ", err);
      }
    }

    initilizeDB();
  }, []);

  return (
    <>
      {dbLoaded ? <Redirect href="/(tabs)/home" /> : <></>}
    </>
  );
}
